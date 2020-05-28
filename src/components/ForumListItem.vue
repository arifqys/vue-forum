<template>
  <div class="forum-listing">
    <div class="forum-details">
      <router-link
        class="text-xlarge"
        :to="{name: 'Forum', params: {id: forum['.key']}}"
      >
        {{forum.name}}
      </router-link>
      <p>{{forum.description}}</p>
    </div>

    <div class="threads-count">
      <p class="count">{{threadsCount}}</p>
      {{threadsCount > 1 ? 'threads' : 'thread'}}
    </div>

    <div class="last-thread">
      <!-- TODO: implement later -->
    </div>
  </div>
</template>

<script>
import {countObjectProperties} from '@/utils'

export default {
  props: {
    forum: {
      type: Object,
      required: true
    }
  },
  computed: {
    threadsCount () {
      return countObjectProperties(this.forum.threads)
    }
  }
}
</script>
