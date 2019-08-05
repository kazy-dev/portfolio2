<template>
    <div>
    <v-app-bar flat app color="rgb(0, 0, 0, 0)" id="naviBar">
        <v-app-bar-nav-icon class="black--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <!-- <v-btn text color="white">
            <span>Sign Out</span>
            <v-icon right>exit_to_app</v-icon>
        </v-btn> -->
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app left temporary>
            <v-list flat>
                <v-subheader>リンク</v-subheader>
                <v-list-item-group color="primary">
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>library_books</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>ブログ</v-list-item-title>
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
    }
  }
}
</script>

<style>
</style>