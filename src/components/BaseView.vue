<template>
  <div class="view">    
    <router-view :key="$route.path"></router-view>
  </div>  
</template>

<script>

export default {
  name: 'BaseView'
}

</script>