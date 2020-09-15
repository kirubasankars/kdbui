import axios from 'axios'

class Api {

    constructor(router, store) {
        this.$router = router
        this.$store = store
    }

    async loadData(config) {
        if (config.model == "databases") {
            return this.getDatabases()
        }

        if (config.model == "database") {
            return this.getDocuments(config.id)
        }
    } 
    
    async loadViews(config) {                
        const api = this;
        return new Promise((resolve) => {
            if (config.model == "databases") {  
                const config = {                                         
                    model : 'databases',
                    views : {
                        list : {
                            selectable: false,
                            columns: [
                                { name: 'Name'}                        
                            ],
                            itemClicked: function(row) {
                                api.$router.push({name: 'List2', params: {model: 'database', id: row.id}})                        
                            },
                            breadcrumb : [{title: "Databases", name: 'List1', params: { model: 'databases'}}]
                        }
                    }
                }                
                resolve(config)
            }
            if (config.model == "database") {                
                const config = {                                         
                    model : 'database',
                    views : {
                        list : {
                            selectable: true,
                            columns: [
                                { name: 'Key', width: '40%'},
                                { name: 'Value', width: '20%'},
                                { name: 'Id', width: '40%'}
                            ],
                            itemClicked: function() {
                                    
                            },
                            breadcrumb : [{title: "Databases", name: 'List1', params: { model: 'databases'}}, {title: config.id}]
                        }
                    }
                }                                
                resolve(config)               
            }
        })
    }

    async getDatabases() {
        return axios.get('/api/_all_dbs').then(response => {
            const output = []
            response.data.forEach(element => {
                output.push({id: element, items: [element]})
            });
            return output;
        })
    }

    async getDocuments(db) {
        return axios.get(`/api/${db}/_all_docs`).then(response => {
            const output = []
            response.data.rows.forEach(element => {
                output.push({id: element['id'], items: [element["key"], element["value"], element["id"]]})
            });
            return output;
        })
    }
}

export default function(router, store) {
    return new Api(router, store)
}