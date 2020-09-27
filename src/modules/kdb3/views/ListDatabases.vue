<template>    
  <List v-bind:config="config" v-bind:rows="databases" @onItemClicked="onItemClicked"></List>
</template>

<script>

import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('kdb3')

import List from '@/components/List.vue'

export default {
  
  name: 'ListDatabases',  
  components: {
    List
  },  
  data() {
    return { 
      config: {
        selectable: false,
        columns: [
            { name: 'Name' }
        ]
      }
    }
  },
  computed : {
    ...mapState({
      databases: state => state.databases
    })
  },
  methods: {
    ...mapActions({
      loadDatabases: 'loadDatabases',
      updateToolbox: 'updateToolbox',
      updateBreadcrumb: 'updateBreadcrumb'
    }),
    onItemClicked(row) {      
      this.$router.push({ name : 'kdb3.ListAllDocuments', params: { database: row.id} })
    }
  },
  created() {
    this.loadDatabases()
    this.updateToolbox({})
    this.updateBreadcrumb([{ title: "Databases" }])
  }  
}

</script>
