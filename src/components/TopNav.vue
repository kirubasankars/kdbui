<template>
  <div class="top-nav">   
    <a class="title" v-on:click="goRoot()">KDB3</a> 
  </div>
</template>

<script>

export default {
  name: 'TopNav',

  methods : {
    goRoot() {
      this.$router.push({path: '/'})      
    }
  }
}

</script>
