<template>    
  <component v-bind:is="view" v-bind:config="config" v-bind:rows="data"></component>
</template>

<script>

import List from '@/components/List.vue'

export default {
  
  name: 'ListView',
  
  components: {
    List
  },
  props: {
    model: String
  },
  computed : {
    data() {
      return this.$store.state.list.data;
    },
    config() {
      return this.$store.state.list.config;
    },
    view() {
      return this.config.view;
    }
  },

  created() {        
    let params = this.$route.params;
    params.view = 'list';
    params.model = this.model;
    this.$store.dispatch('LOAD_DATA', params)
  }
  
}

</script>
