<template>
    <div>
    <v-app-bar flat app id="naviBar">
			<div v-if="this.bulma.isMobile">
			<v-app-bar-nav-icon class="black--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
			</div>
			<v-spacer></v-spacer>
			<div v-if="!this.bulma.isMobile">
			<v-tabs slider-color="black" color="black">
				<v-tab text color="black" v-for="item in naviMenuItems" :key="item.id" :ripple="false">{{item.name}}</v-tab>
			</v-tabs>
			</div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app left temporary class="responsive">
			<v-list flat>
					<v-list-item-group color="primary">
							<v-list-item v-for="item in naviMenuItems" :key="item.id">
								<v-list-item-content>
									<v-list-item-title class="text-center">{{item.name}}</v-list-item-title>
								</v-list-item-content>
							</v-list-item>
					</v-list-item-group>
			</v-list>
    </v-navigation-drawer>
    </div>
</template>

<script>
export default {
  data() {
    return {
			drawer: false,
			naviMenuItems: [
				{name: "Home", link:"#"},
				{name: "About", link:"#"},
				{name: "Skills", link:"#"},
				{name: "Works", link:"#"},
				{name: "Contact", link:"#"}
			]
			
    }
  }
}
</script>

<style　scoped>
.v-tab:before {
	border-radius: 25px!important;
}
</style>