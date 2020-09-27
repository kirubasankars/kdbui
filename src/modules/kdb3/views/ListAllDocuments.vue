<template>    
  <List v-bind:config="config" v-bind:rows="allDocs" @onItemClicked="onItemClicked"></List>
</template>

<script>

import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('kdb3')

import List from '@/components/List.vue'

export default {
  
  name: 'ListAllDocuments',  
  components: {
    List
  },  
  data() {
    return { 
      config: {
        selectable: true,
        columns: [
            { name: 'Key', width: '40%'},
            { name: 'Value', width: '20%'},
            { name: 'Id', width: '40%'}
        ]
      }
    }
  },
  computed : {
    ...mapState({
      allDocs: state => state.documents
    })
  },
  methods: {    
    ...mapActions({
      loadDocuments: 'loadDocuments',
      updateBreadcrumb: 'updateBreadcrumb',
      updateToolbox: 'updateToolbox',      
    }),
    onItemClicked(row) {
      const db = this.$route.params.database
      this.$router.push({ name : 'kdb3.EditDocument', params: { database: db, id: row.id }})
    },
    createDocument() {
      
    }
  },
  created() {
    const db = this.$route.params.database
    this.loadDocuments(db)
    this.updateToolbox({
      left : [
        {
          text: "Create",
          type: "button",
          action: "kdb3:createDocument"
        }
      ]
    })
    this.updateBreadcrumb([{ title: "Databases", name: 'kdb3.ListDatabases' }, { title: db}])
  }  
}

</script>
