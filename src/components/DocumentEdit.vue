<template>    
  <div class="documentEdit">    
    <codemirror v-model="value" :options="cmOptions"/>
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
      value: "{}",
      cmOptions: {
        tabSize: 4,
        mode: "application/ld+json",
        lineNumbers: true,
        line: true,
        theme: 'monokai'
      }
    }
  },
  props: {
    item: Object
  },
  watch: { 
      item: function(nv) {
        this.value = JSON.stringify(nv, null, 4)
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