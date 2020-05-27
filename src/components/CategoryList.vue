<template>
  <div>
    <CategoryListItem v-for="category in categories" :key="category['.key']" :category="category" />
  </div>
</template>

<script>
import CategoryListItem from '@/components/CategoryListItem'

export default {
  components: {
    CategoryListItem
  },
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>