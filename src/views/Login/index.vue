<template>
  <div class="login d-flex justify-center">
    <v-container>
      <v-layout wrap>
        <v-flex sm12 md6 offset-md3>
          <v-layout align-center justify-space-between class="mt-8">
            <h1 class="headline"><b>PerpusKu</b></h1>
            <v-img
              class="ml-3"
              contain
              height="48px"
              position="center left"
              src="./logo.png"
            ></v-img>
          </v-layout>
          <v-card elevation="4" dark tag="section" class="mt-8">
            <v-card-title class="card-title">
              <v-layout align-center justify-center> LOGIN </v-layout>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-form>
                <v-text-field
                  outline
                  label="Username"
                  type="text"
                  v-model="username"
                ></v-text-field>
                <v-text-field
                  outline
                  hide-details
                  label="Password"
                  type="password"
                  v-model="password"
                ></v-text-field>
              </v-form>
              <a href=""><p class="mt-8">Lupa Password</p></a>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
              <v-btn color="info" :large="$vuetify.breakpoint.smAndUp">
                <font-awesome-icon icon="fas fa-user" />&nbsp; Daftar Akun
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn color="info" :large="$vuetify.breakpoint.smAndUp">
                <font-awesome-icon icon="fas fa-sign-in-alt" />&nbsp; Login
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkTheme: true,
      platformName: "Platform name",
      password: null,
      username: null,
    };
  },
};
</script>

<style lang="scss">
.login {
  height: 100vh;
  background: url("./bg-landing.jpg");
  background-size: cover;
  .headline {
    color: black;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
    font-size: 2rem !important;
  }
  .card-title {
    text-align: center;
    font-size: 1.5rem;
  }
}
</style>
