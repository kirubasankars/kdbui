<template>
  <div class="panel1">
    <Breadcrumb />
    <SearchView />
  </div>  
</template>

<script>

import Breadcrumb from './Breadcrumb.vue'
import SearchView from './SearchView.vue'

export default {
  name: 'ToolboxPanel1',
  components : {
      Breadcrumb,
      SearchView
  }
}

</script>