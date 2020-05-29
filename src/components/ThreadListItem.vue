<template>
  <div class="thread">
      <div>
          <p>
              <router-link :to="{name: 'ThreadShow', params: {id: thread['.key']}}">{{thread.title}}</router-link>
          </p>
          <p class="text-faded text-xsmall">
              By <a href="#">{{user.name}}</a>, <AppDate :timestamp="thread.publishedAt" />.
          </p>
      </div>
      <div class="activity">
          <p class="replies-count">
              {{repliesCount}} {{repliesCount > 1 ? 'replies' : 'reply'}}
          </p>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    thread: {
      type: Object,
      required: true
    }
  },
  computed: {
    repliesCount () {
      return this.$store.getters.threadRepliesCount(this.thread['.key'])
    },
    user () {
      return this.$store.state.users[this.thread.userId]
    }
  }
}
</script>