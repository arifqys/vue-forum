<template>
  <div v-if="thread && user" class="col-large push-top">
    <h1>{{thread.title}}
    <router-link
      :to="{name: 'ThreadEdit', id: this.id}"
      class="btn-green btn-small"
      tag="button"
    >
      Edit Thread
    </router-link>
    </h1>
    <p>
      By <a href="#" class="link-unstyled">{{user.name}}</a>, <AppDate :timestamp="thread.publishedAt"/>.
      <span style="float:right; margin-top: 2px;" class="hide-mobile text-faded text-small">{{repliesCount}} replies by {{contributorsCount}} contributors</span>
    </p>
    <PostList :posts="posts" />
    <PostEditor :threadId="id" />
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import PostList from '@/components/PostList'
import PostEditor from '@/components/PostEditor'
import {countObjectProperties} from '@/utils'

export default {
  components: {
    PostList,
    PostEditor
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    thread () {
      return this.$store.state.threads[this.id]
    },
    user () {
      return this.$store.state.users[this.thread.userId]
    },
    repliesCount () {
      return this.$store.getters.threadRepliesCount(this.thread['.key'])
    },
    contributorsCount () {
      return countObjectProperties(this.thread.contributors)
    },
    posts () {
      const postIds = Object.values(this.thread.posts)
      return Object.values(this.$store.state.posts)
        .filter(post => postIds.includes(post['.key']))
    }
  },
  methods: {
    ...mapActions(['fetchThread', 'fetchUser', 'fetchPosts'])
  },
  created () {
    this.fetchThread({id: this.id})
      .then(thread => {
        // fetch user
        this.fetchUser({id: thread.userId})
        // fetch posts
        this.fetchPosts({ids: Object.keys(thread.posts)})
          .then(posts => {
            posts.forEach(post => {
              // fetch user
              this.fetchUser({id: post.userId})
            })
          })
      })
  }
}
</script>