<template>    
  <DocumentEdit v-bind:datum="document"></DocumentEdit>
</template>

<script>

import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('kdb3')
import DocumentEdit from '../components/DocumentEdit.vue'

export default {
  
  name: 'EditDocument',
  
  components: {
    DocumentEdit
  },

  computed : {
    ...mapState({
      document: state => state.currentdocument
    })
  },

  methods: {
    ...mapActions({
      loadDocument: 'loadDocument',
      updateBreadcrumb: 'updateBreadcrumb',
      updateToolbox: 'updateToolbox',
      updateDocument: 'updateDocument'
    }),
    saveDocument() {      
      let params = this.$route.params;                
      params.doc = JSON.parse(this.$children[0].value)
      this.updateDocument(params)
    }
  },

  created() {         
    this.loadDocument(this.$route.params)    
    
    this.updateBreadcrumb([ 
        { title: "Databases", name: 'kdb3.ListDatabases' }, 
        { title: this.$route.params.database, name: 'kdb3.ListAllDocuments', params: { database: this.$route.params.database} }, 
        { title: this.$route.params.id }
    ])

    this.updateToolbox({
        left : [
            {
                "type": "button",
                "text": "Save",
                "action" : "kdb3:saveDocument"
            }
        ]
    })

  }

}

</script>
