<template>
  <table class="list">
    <thead>
      <tr class="header">
        <th v-if="config.selectable">
          <input type="checkbox" />
        </th>
        <th v-for="column in config.columns" v-bind:key="column.name" v-bind:style="{ width: column.width }">{{column.name}}</th>
      </tr>
    </thead>
    <tbody>
      <tr class="item" v-for="row in rows" v-bind:key="row.id" v-on:click="onItemClicked(row)">
        <td v-if="config.selectable">
          <input type="checkbox" class="chksel" />
        </td>
        <td v-for="(item, index) in row.items" v-bind:key="index">{{item}}</td>
      </tr>     
    </tbody>
  </table>
</template>

<script>

export default {
  
  name: "List",
  
  props: {
    'config': Object,
    'rows': Array    
  },

  methods: {
    onItemClicked(row) {      
      this.$emit('onItemClicked', row)
    }
  }

};

</script>
