<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="6" offset-lg="3">
        <div class="d-flex justify-space-between">
          <h2>Messages</h2>

          <v-btn
            icon
            class="ma-2"
            :loading="loading"
            :disabled="loading"
            @click="$store.commit('getMessages')"
          >
            <v-icon large color="indigo lighten-2"> mdi-cached </v-icon>
            <template v-slot:loader>
              <span class="custom-loader">
                <v-icon learge light>mdi-cached</v-icon>
              </span>
            </template>
          </v-btn>
        </div>

        <message-detail
          v-for="message in messages"
          :key="message.id"
          :message="message"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import MessageDetail from './MessageDetail.vue'

export default {
name: 'message_list',
components: {
MessageDetail
},
    computed: mapState([
      'messages',
      'loading'
    ]),
    mounted: function() {
         this.$store.commit('getMessages')
    }
  }
</script>

<style>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
