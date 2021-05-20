<template>
  <div>
    <v-textarea
      solo
      name="input-7-4"
      label="Write here, whatever you want!"
      v-model="message"
      auto-grow
    ></v-textarea>

    <div class="text-right">
      <v-btn
        outlined
        color="indigo lighten-1"
        @click="addMessage"
        :disabled="message.length < 1"
        >Send

        <v-progress-circular
          v-if="message_sending"
          size="20"
          class="ml-2"
          indeterminate
          color="primary"
        ></v-progress-circular>
        <v-icon v-else class="ml-2" small color="indigo lighten-1"
          >mdi-send
        </v-icon>
      </v-btn>
    </div>

    <v-snackbar
      :timeout="3000"
      :value="true"
      rounded="pill"
      top
      right
      absolute
      v-model="message_sent"
      color="primary"
      text
    >
      Message sent successfully, Thank you!

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="message_sent = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

  </div>
</template>

<script>

export default {
  data: () => ({
      message: '',
      message_sent: false,
      message_sending: false,
    }),
  methods: {
    addMessage () {
      this.message_sending = true
      this.$store.commit('addMessage', this.message)
      this.message = ''
      this.message_sent = true
      this.message_sending = false
    }
  }
}
</script>
