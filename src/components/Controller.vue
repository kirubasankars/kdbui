<template>
  <div class="controller">
    <Toolbox />
    <BaseView />
  </div>  
</template>

<script>

import Toolbox from './Toolbox.vue'
import BaseView from './BaseView.vue'

export default {
  name: 'Controller',
  components: {
      Toolbox,
      BaseView
  }
}

</script>
