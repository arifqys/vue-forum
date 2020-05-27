<template>
  <span :title="timestamp | humanFriendlyDate">{{timestamp | diffForHumans}}</span>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    timestamp: {
      type: Number,
      required: true
    }
  },
  filters: {
    humanFriendlyDate (date) {
      return moment.unix(date).format('MMMM Do YYYY, h:mm:ss a')
    },
    diffForHumans (date) {
      return moment.unix(date).fromNow()
    }
  }
}
</script>