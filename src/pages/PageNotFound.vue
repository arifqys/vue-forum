<template>
  <div class="col-large push-top">
    <h1 :class="$style.headingLarge">Not Found</h1>
    <p :class="$style.textLarge">Ooops, we couldn't find what you are looking for. Why don't yo
      <router-link :to="{name: 'Home'}">go home instead?</router-link>
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style module>
  .headingLarge {
    font-size: 5em;
  }
  .textLarge {
    font-size: 3em;
  }
</style>