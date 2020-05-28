<template>
  <form @submit.prevent="save">
    <div class="form-group">
      <textarea v-model="text" name="" id="" cols="30" rows="10" class="form-input"></textarea>
    </div>
    <div class="form-action">
      <button class="btn-blue">{{isUpdate ? 'Update' : 'Submit'}} post</button>
      <button v-if="isUpdate" @click.prevent="cancel" class="btn btn-ghost">Cancel</button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    threadId: {
      type: String
    },
    post: {
      type: Object,
      validator: obj => {
        const keyIsValid = typeof obj['.key'] === 'string'
        const textIsValid = typeof obj.text === 'string'
        const valid = keyIsValid && textIsValid
        if (!textIsValid) {
          console.error('The post prop object must include a `text` attribute.')
        }
        if (!keyIsValid) {
          console.error('The post prop object must include a `.key` attribute.')
        }
        return valid
      }
    }
  },
  data () {
    return {
      text: this.post ? this.post.text : ''
    }
  },
  computed: {
    isUpdate () {
      return !!this.post
    }
  },
  methods: {
    save () {
      this.persist()
        .then(post => {
          this.$emit('save', {post})
        })
    },
    cancel () {
      this.$emit('cancel')
    },
    create () {
      const post = {
        text: this.text,
        threadId: this.threadId
      }
      this.text = ''
      this.$emit('save', {post})
      return this.$store.dispatch('createPost', post)
    },
    update () {
      const payload = {
        id: this.post['.key'],
        text: this.text
      }
      return this.$store.dispatch('updatePost', payload)
    },
    persist () {
      return this.isUpdate ? this.update() : this.create()
    }
  }
}
</script>
