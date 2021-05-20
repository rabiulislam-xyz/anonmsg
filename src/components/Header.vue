<template>
  <v-app-bar app color="indigo lighten-1" dark>
    <router-link to="/" style="text-decoration: none;">
      <v-btn icon>
        <v-icon large color="white"> mdi-home </v-icon>
      </v-btn>
    </router-link>

    <v-spacer></v-spacer>

    <router-link to="/messages" style="text-decoration: none;">
      <v-btn icon>
        <v-icon large color="white"> mdi-message-bulleted </v-icon>
      </v-btn>
    </router-link>
  </v-app-bar>
</template>
