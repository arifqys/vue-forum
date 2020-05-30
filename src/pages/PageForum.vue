<template>
  <div v-if="forum" class="col-large">
    <div class="col-full push-top">
      <div class="forum-header">
        <div class="forum-details">
          <h1>{{forum.name}}</h1>
          <p class="text-lead">{{forum.description}}</p>
        </div>
        <router-link :to="{name: 'ThreadCreate', params: {forumId: this.forum['.key']}}" class="btn-green btn-small">Start a thread</router-link>
      </div>
    </div>
    <div class="col-full push-top">
      <ThreadList :threads="threads" />
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import ThreadList from '@/components/ThreadList.vue'

export default {
  components: {
    ThreadList
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    forum () {
      return this.$store.state.forums[this.id]
    },
    threads () {
      return Object.values(this.$store.state.threads)
        .filter(thread => thread.forumId === this.id)
    }
  },
  methods: {
    ...mapActions(['fetchForum', 'fetchThreads', 'fetchUser'])
  },
  created () {
    this.fetchForum({id: this.id})
      .then(forum => {
        this.fetchThreads({ids: forum.threads})
          .then(threads => {
            threads.forEach(thread => this.fetchUser({id: thread.userId}))
          })
      })
  }
}
</script>
