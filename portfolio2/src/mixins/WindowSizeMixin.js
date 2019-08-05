export default {
  data () {
    return {
      bulma: {},
      bulmaTypes: ["isMobile", "isTablet", "isDesktop", "isWidescreen", "isFullHD"],

      bulmaClasses: {
          isFlexTouch:            [1, 1, 0, 0, 0],
          isFlexTablet:           [0, 1, 1, 1, 1],
          isFlexDesktop:          [0, 0, 1, 1, 1],
          isFlexWidescreen:       [0, 0, 0, 1, 1],
          isFlexFullHD:           [0, 0, 0, 0, 1],

          isHiddenMobile:         [0, 1, 1, 1, 1],
          isHiddenTabletOnly:     [1, 0, 1, 1, 1],
          isHiddenDesktopOly:     [1, 1, 0, 1, 1],
          isHiddenWidescreenOnly: [1, 1, 1, 0, 1],

          isHiddenTouch:          [0, 0, 1, 1, 1],
          isHiddenTablet:         [1, 0, 0, 0, 0],
          isHiddenDesktop:        [1, 1, 0, 0, 0],
          isHiddenWidescreen:     [1, 1, 1, 0, 0],
          isHiddenFullHD:         [1, 1, 1, 1, 0]
      }
    }
  },
  mounted() {
    this.bulma = null;
    window.addEventListener("resize", () => {
        this.bulma = null;
    })
  },
  watch: {
    bulma() {
      if (this.bulma != null) { return; }

      let ret = {};
      const suffix = "Bulma";

      let isFullHD = true;
      for (const type of this.bulmaTypes) {

          const div = document.createElement("div");
          const klass = type.replace(/([A-Z])/, (m) => { return "-flex-" + m.toLowerCase(); });
          div.setAttribute("id", type + suffix);
          div.setAttribute("class", klass);
          this.$el.appendChild(div);

          const el = document.querySelector("#" + type + suffix);
          const style = window.getComputedStyle(div, null);
          ret[type] = false;
          if (style.display == "flex") {
              ret[type] = true;
              isFullHD = false;
          }

          el.remove();
      }
      ret["isFullHD"] = isFullHD;

      const size = this.bulmaTypes.indexOf(Object.keys(ret).filter((d) => { return ret[d] == true; })[0]);
      for (const klass in this.bulmaClasses) {
          ret[klass] = (this.bulmaClasses[klass][size] == 1) ? true : false;
      }

      this.bulma = ret;
    }
  }
}