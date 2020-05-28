<template>
  <div class="col-large push-top">
    <h1>Welcome to the Forum</h1>
    <CategoryList :categories="categories" />
    <!-- <ForumList :forums="forums"/> -->
  </div>
</template>

<script>
import CategoryList from '@/components/CategoryList'

export default {
  components: {
    CategoryList
  },
  computed: {
    categories () {
      return Object.values(this.$store.state.categories)
    }
  }
}
</script>