<template>
  <div class="loading" v-bind:class="{ visible: show }">
      loading...
  </div>  
</template>

<script>

export default {
  name: 'LoadingPanel',
  computed : {
    show() {
      return this.$store.state.loading;
    }
  },
}

</script>
