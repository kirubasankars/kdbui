import axios from 'axios'

export default {
    'database': {        
        views: {
            list: {
                view: 'List',
                
                selectable: false,
                columns: [
                    { name: 'Name' }
                ],
                itemClicked (row) {                            
                    this.$router.push({ name: 'ListDocuments', params: { database: row.id } })
                },
                load_data () {
                    return axios.get('/api/_all_dbs').then(response => {
                        const data = []
                        response.data.forEach(element => {
                            data.push({ id: element, items: [element] })
                        });
                        return data
                    })
                },

                breadcrumb: [{ title: "Databases" }],
                toolbox: {
                    left : [
                        {
                            "type": "button",
                            "text": "Create",                            
                            "action" : function(view) {
                                console.log(view)
                            }
                        }
                    ]
                }
            }
        }
    },
    'document': {                                                 
        views : {
            list : {
                view: 'List',
                
                selectable: true,
                columns: [
                    { name: 'Key', width: '40%'},
                    { name: 'Value', width: '20%'},
                    { name: 'Id', width: '40%'}
                ],                                        
                itemClicked (row) {                        
                    let db = this.$route.params.database;                    
                    this.$router.push({ name: 'EditDocument', params: { database: db, docid: row.id } })                                        
                },
                load_data (params) {
                    return axios.get(`/api/${params.database}/_all_docs`).then(response => {
                        const data = []
                        response.data.rows.forEach(element => {
                            data.push({ id: element['id'], items: [element["key"], element["value"], element["id"]] })
                        });
                        return data
                    })
                },

                breadcrumb (params) {
                    return [{title: "Databases", name: 'ListDatabases' }, { title: params.database }]
                },
                toolbox: {
                    left : [
                        {
                            "text": "Create",
                            "type": "button"
                        }
                    ]
                }
            },
            edit : {                
                view: 'DocumentEdit',
                breadcrumb (params) {
                    return [{title: "Databases", name: 'ListDatabases' }, { name: 'ListDocuments', params: { database: params.database }, title: params.database }, { title: params.docid }]
                },
                toolbox: {
                    left : [
                        {
                            "text": "Save",
                            "type": "button",                            
                            "action" : function(view) {
                                console.log(view.value)
                            }
                        }
                    ]
                },
                load_data: function(params) {
                    return axios.get(`/api/${params.database}/${params.docid}`).then(response => {                        
                        return response.data                        
                    })
                }
            }
        }
    }
}