<template>
  <div>
    <v-card
      class="mx-auto mb-2 px-2"
      :color="message.is_read ? '' : 'indigo lighten-4'"
      outlined
    >
      <div class="d-flex justify-space-between">
        <div>
          <v-btn 
          icon
          @click="$store.commit('toggleMarkAsRead', message.id)"
          >
          <v-icon v-if="message.is_read" color="grey lighten-1">
            mdi-email-open-outline
          </v-icon>
          <v-icon v-else color="indigo darken-3"> mdi-email </v-icon>
          </v-btn>

          
        </div>
        <div>
          <span>{{ from_now(message.timestamp) }} </span>

          <v-btn
           icon 
           class="delete-btn"
          @click="$store.commit('deleteMessage', message.id)"
          >
            <v-icon> mdi-close-circle-outline </v-icon>
          </v-btn>
        </div>
      </div>

      <v-divider :key="message.id"></v-divider>

      <p class="mt-2">{{message.text }}</p>
    </v-card>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)


export default {
    props: [
        'message',
    ],
    methods: {
        from_now (time_stamp) {
            if ( !time_stamp ) {
                return ''
            }

             try {
                return dayjs(time_stamp.toDate()).fromNow()
            } catch {
                return ''
            }
        },
      
    }

}
</script>


<style scoped>
.delete-btn::before {
    color: transparent
}

.delete-btn:hover {
    color: red;
}

</style>