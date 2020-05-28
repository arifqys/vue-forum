<template>
  <form @submit.prevent="save">
    <div class="form-group">
      <textarea v-model="text" name="" id="" cols="30" rows="10" class="form-input"></textarea>
    </div>
    <div class="form-action">
      <button class="btn-blue">Submit post</button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    threadId: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      text: ''
    }
  },
  methods: {
    save () {
      const post = {
        text: this.text,
        threadId: this.threadId
      }
      this.text = ''
      this.$emit('save', {post})
      this.$store.dispatch('addPost', post)
    }
  }
}
</script>
