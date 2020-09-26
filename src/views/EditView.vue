<template>    
  <component v-bind:is="view" v-bind:config="config" v-bind:item="data"></component>
</template>

<script>

export default {
  
  name: 'EditView',
  
  props: {
    model: String
  },
  
  computed : {
    data() {
      return this.$store.state.edit.data;
    },
    config() {
      return this.$store.state.edit.config;
    },
    view() {
      return this.$store.state.edit.config.view;
    }
  },

  created() {            
    let params = this.$route.params;
    params.view = 'edit';
    params.model = this.model;
    this.$store.dispatch('LOAD_DATA', params)    
  }
    
}

</script>
