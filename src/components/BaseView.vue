<template>
  <div class="view">
    <ListView />
  </div>  
</template>

<script>

import ListView from './ListView.vue'

export default {
  name: 'BaseView',
  components: {
    ListView
  }
}

</script>