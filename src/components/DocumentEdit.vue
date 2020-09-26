<template>    
  <div class="documentEdit">    
    <codemirror :value="row" :options="cmOptions"/>
  </div>
</template>
<script>

import { codemirror } from 'vue-codemirror'

import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/theme/monokai.css'

export default {  
  name: 'DocumentEdit',  
  components: {
    codemirror
  },
  data: function() {
    return {
      cmOptions: {
        tabSize: 4,
        mode: "application/ld+json",
        lineNumbers: true,
        line: true,
        theme: 'monokai'
      }
    }
  },
  computed : {
    row() {
      return JSON.stringify(this.$store.state.edit.data, null, 4);
    },
    config() {
      return this.$store.state.edit.config;
    }
  }
}

</script>

<style lang="scss" scoped>
  .documentEdit, .vue-codemirror {        
    width: 100%;
    height: 100%;    
  }
</style>