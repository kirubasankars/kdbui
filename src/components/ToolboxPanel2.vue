<template>
  <div class="panel2">
    <div class="left_bar">
      <ul>
        <li v-for="(item, index) in left" v-bind:key="index">
          <template v-if="item.type === 'button'">        
            <button class="btn-danger" v-on:click="actionClick(item)">{{item.text}}</button>
          </template>
        </li>
      </ul>      
    </div>
    <div class="center_bar">
      <ul>
        <li v-for="(item, index) in center" v-bind:key="index">
          <template v-if="item.type === 'button'">        
            <button class="btn-danger" v-on:click="actionClick(item)">{{item.text}}</button>
          </template>
        </li>
      </ul>    
    </div>
    <div class="right_bar" />
  </div>
</template>

<script>

export default {  
  name: "ToolboxPanel2",
  computed: {
    left () {
      return this.$store.state.toolbox.left;
    },
    center () {
      return this.$store.state.toolbox.center;
    }
  },
  methods: {
    actionClick(item) {
      if (item.action && item.action != "") {       
        let component = this.$parent.$parent.$children[1].$children[0]
        const seg = item.action.split(":")   
        const method = seg[1]
        if (component[method] != undefined) {
          component[seg[1]].apply(component)
        }
      }
    }
  }
};

</script>

<style scoped>
  .left_bar > ul, .center_bar > ul, .right_bar > ul {    
    list-style-type: none;    
    padding: 0;
  }

  .left_bar > ul > li, .center_bar > ul > li, .right_bar > ul > li {    
    float: left;
    padding-right: 10px;
  }

</style>