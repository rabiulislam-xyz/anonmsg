<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="6" offset-lg="3">
        <div class="mt-5">
          <h3>Send message anonymously!</h3>
          <p>- Rabiul Islam</p>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" lg="6" offset-lg="3">
        <message-form />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MessageForm from './MessageForm.vue'

export default {
  components: { MessageForm }
}
</script>
