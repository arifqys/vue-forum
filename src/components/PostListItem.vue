<template>
  <div class="post">
    <div class="user-info">
        <a href="#" class="user-name">{{user.name}}</a>
        <a href="#">
            <img class="avatar-large" :src="user.avatar" alt="">
        </a>
        <p class="desktop-only text-small">{{userPostsCount}} {{userPostsCount > 1 ? 'posts' : 'post'}}</p>
    </div>
    <div class="post-content">
        <div>
          <p>
            {{post.text}}
          </p>
        </div>
    </div>
    <div class="post-date text-faded" :title="post.publishedAt | humanFriendlyDate">
      {{post.publishedAt | diffForHumans}}
    </div>
  </div>
</template>

<script>
  import moment from 'moment'

  import sourceData from '@/data.json'

  export default {
    props: {
      post: {
        type: Object,
        required: true
      }
    },
    computed: {
      user () {
        return sourceData.users[this.post.userId]
      },
      userPostsCount () {
        return Object.keys(this.user.posts).length
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

<style>

</style>