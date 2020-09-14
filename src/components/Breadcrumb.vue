<template>
 <nav class="breadcrumb">
   <ol>
     <li>Databases</li>
   </ol>
 </nav>
</template>

<script>

export default {
  name: 'Breadcrumb'
}

</script>

<style lang="scss" scoped>

    .breadcrumb {                    
      
      padding-left: 15px;
      height: 40px;
      line-height: 46px;
      font-size: 1rem;                    
      order: 0;
      flex: 3;

      > ol {
          list-style: none;
          padding: 0;
          margin:0;
          clear: both;

          > li {
              float: left;
              padding-right: 10px;              
          
              > a, a:hover {
                  text-decoration: none;
              }                            

              > a::after {
                  content: ">";
                  padding-left: 10px;
                  text-decoration: none;
                  color: indigo;
              }
          }                        

          > li:last-child {
              color: #808080;
          }
      }
  }

</style>
