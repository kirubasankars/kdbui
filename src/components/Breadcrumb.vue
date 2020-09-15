<template>
 <nav class="breadcrumb">
   <ol>
     <li v-for="item in breadcrumbParent" v-bind:key="item.title"><a v-on:click="linked(item)">{{item.title}}</a></li>
     <li v-for="item in breadcrumbCurrent" v-bind:key="item.title">{{item.title}}</li>
   </ol>
 </nav>
</template>

<script>

export default {
  
  name: 'Breadcrumb',
  
  computed: {
    breadcrumbParent() {
      const bc = this.$store.state.breadcrumb      
      return bc.slice(0, bc.length - 1);
    },
    breadcrumbCurrent() {
      const bc = this.$store.state.breadcrumb      
      return bc.slice(bc.length - 1, bc.length);
    }
  },

  methods: {
    linked(item) {
      this.$router.push(item)
    }
  }

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
                  cursor: pointer;
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
