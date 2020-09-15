<template>  
  <List v-bind:config="config" v-bind:rows="rows" />      
</template>

<script>

import List from '@/components/List.vue'

export default {
  
  name: 'ListView',
  
  components: {
    List
  },

  computed : {
    rows() {
      return this.$store.state.list.data;
    },
    config() {
      return this.$store.state.list.config;
    }
  },

  created() {    
    this.$store.dispatch('LOAD_DATA', { view: 'list', model: this.$route.params.model, id: this.$route.params.id })
  }
  
}

</script>
