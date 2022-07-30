<template>
  <v-app>
    <v-navigation-drawer app :permanent="$vuetify.breakpoint.mdAndUp" dark
      :mini-variant="mini && $vuetify.breakpoint.mdAndUp" mini-variant-width="64" class="app-nav-drawer white--text">
      <v-list-item v-if="mini" class="py-2">
        <v-app-bar-nav-icon @click.stop="mini = !mini">
          <font-awesome-icon size="16" icon="fas fa-bars" />
        </v-app-bar-nav-icon>
      </v-list-item>
      <v-list-item v-if="!mini" class="py-2">
        <v-list-item-content class="py-0">
          <v-list-group :value="true">
            <template v-slot:activator>
              <font-awesome-icon icon="fas fa-user-circle" class="mr-8"/>
              <v-list-item-title>User</v-list-item-title>
            </template>

            <v-list-group :value="true" no-action sub-group>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Profil</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item v-for="([title, icon], i) in admins" :key="i" link>
                <v-list-item-title v-text="title"></v-list-item-title>

                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-group no-action sub-group>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Manajemen User</v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item v-for="([title, icon], i) in cruds" :key="i" link>
                <v-list-item-title v-text="title"></v-list-item-title>
                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-group no-action sub-group>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>LogOut</v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item v-for="([title, icon], i) in cruds" :key="i" link>
                <v-list-item-title v-text="title"></v-list-item-title>
                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

          </v-list-group>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav class="mt-8">
        <v-list-item v-for="item in items" :key="item.title" link @click="() => navigate(item)">
          <v-list-item-icon class="ml-2 align-center">
            <font-awesome-icon :icon="item.icon" />
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="list-item">{{
                item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append v-if="!mini">
        <p class="copyright mb-8">Copyright &copy; Mateus Argastra</p>
      </template>
    </v-navigation-drawer>

    <v-app-bar app dark color="dark">
      <v-app-bar-nav-icon v-if="!mini || $vuetify.breakpoint.smAndDown" @click.stop="toggleDrawer">
        <font-awesome-icon size="16" icon="fas fa-bars" />
      </v-app-bar-nav-icon>
      <v-toolbar-title><b>Perpusku</b></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main class="mt-2" style="padding: 30px !important">
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Dashboard",
          icon: "fas fa-tachometer-alt",
          link: "/dashboard",
        },
        { title: "Buku", icon: "fas fa-book", link: "/buku" },
        { title: "Transaksi", icon: "fas fa-exchange-alt", link: "/transaksi" },
      ],
      right: null,
      mini: false,
    };
  },
  methods: {
    toggleDrawer() {
      if (this.$vuetify.breakpoint.mdAndUp) {
        this.mini = !this.mini;
        return;
      }
      this.drawer = !this.drawer;
    },
    navigate(item) {
      this.$router.push(item.link)
    }
  },
};
</script>

<style>
.list-item {
  font-size: 0.9rem !important;
}

.copyright {
  text-align: center;
  font-size: 0.8rem;
}

.user {
  font-size: 1.5rem;
}
</style>
