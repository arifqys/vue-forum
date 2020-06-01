<template>
  <div v-if="post && user" class="post">
    <div class="user-info">
        <a href="#" class="user-name">{{user.name}}</a>
        <a href="#">
            <img class="avatar-large" :src="user.avatar" alt="">
        </a>
        <p class="desktop-only text-small">{{userThreadsCount}} {{userThreadsCount > 1 ? 'threads' : 'thread'}}</p>
        <p class="desktop-only text-small">{{userPostsCount}} {{userPostsCount > 1 ? 'posts' : 'post'}}</p>
    </div>
    <div class="post-content">
      <template v-if="!editing">
        <div>
          {{post.text}}
        </div>
        <a @click.prevent="editing = true" href="#" style="margin-left: auto; padding-left: 10px;" class="link-unstyled" title="Make a change"><i class="fa fa-pencil"></i></a>
      </template>
      <div v-else class="form-group">
        <PostEditor :post="post" @save="editing = false" @cancel="editing = false" />
      </div>
    </div>
    <div class="post-date text-faded">
      <div v-if="post.edited" class="edition-info">edited</div>
      <AppDate :timestamp="post.publishedAt" />
    </div>
  </div>
</template>

<script>
import PostEditor from '@/components/PostEditor'

export default {
  components: {
    PostEditor
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      editing: false
    }
  },
  computed: {
    user () {
      return this.$store.state.users.items[this.post.userId]
    },
    userThreadsCount () {
      return this.$store.getters['users/userThreadsCount'](this.post.userId)
    },
    userPostsCount () {
      return this.$store.getters['users/userPostsCount'](this.post.userId)
    }
  }
}
</script>
