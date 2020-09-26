<template>
  <div class="searchview">
    <input type="text">
  </div>  
</template>

<script>

export default {
  name: 'SearchView'
}

</script>

<style lang="scss" scoped>

  .searchview {    
      display: none;                
      height: 30px;
      width: 200px;
      line-height: 46px;                    
      flex: 2;                   

      > input[type='text'] {
          height: 30px;
          width: calc(100% - 20px);                        
          border: 0;
          border-bottom: #b3b3b3 solid 2px;
      }

      > input[type='text']:focus {
        outline: none;
      }

  }

</style>
