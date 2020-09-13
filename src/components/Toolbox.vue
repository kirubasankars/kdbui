<template>
  <div class="toolbox">
    <Panel1 />
    <Panel2 />
  </div>  
</template>

<script>

import Panel1 from './ToolboxPanel1'
import Panel2 from './ToolboxPanel2'

export default {
  name: 'Toolbox',
  components: {
    Panel1,
    Panel2
  }
}

</script>