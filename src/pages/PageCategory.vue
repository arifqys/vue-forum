<template>
  <div class="col-large push-top">
    <h1>{{category.name}}</h1>
    <CategoryListItem :category="category"/>
  </div>
</template>

<script>
import sourceData from '@/data'
import CategoryListItem from '@/components/CategoryListItem'

export default {
  components: {
    CategoryListItem
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    category () {
      return sourceData.categories[this.id]
    }
  }
}
</script>
