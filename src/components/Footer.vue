<template>
  <v-footer  dark padless>
    <v-card
      flat
      tile
      width="100%"
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon.name"
          :href="icon.url"
          class="mx-4 white--text"
          target="_blank"
          icon
        >
          <v-icon size="24px">
            {{ icon.name }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — Developed by
        <strong>Rabiul Islam</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
data: () => ({
      icons: [
        {'name': 'mdi-facebook', 'url': 'https://facebook.com/rabiulislam.xyz'},
        {'name': 'mdi-twitter', 'url': 'https://twitter.com/rabiulislam_xyz'},
        {'name': 'mdi-linkedin', 'url': 'https://www.linkedin.com/in/rabiulislam-xyz/'}
      ],
    })
}
</script>
