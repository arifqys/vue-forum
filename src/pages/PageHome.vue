<template>
  <div class="col-large push-top">
    <h1>Welcome to the Forum</h1>
    <CategoryList :categories="categories" />
    <!-- <ForumList :forums="forums"/> -->
  </div>
</template>

<script>
import sourceData from '@/data.json'
import CategoryList from '@/components/CategoryList.vue'

export default {
  components: {
    CategoryList
  },
  data () {
    return {
      categories: Object.values(sourceData.categories)
    }
  }
}
</script>