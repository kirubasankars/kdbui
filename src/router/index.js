import { createRouter, createWebHashHistory } from "vue-router";
import Databases from '../components/Databases.vue'
import AllDocuments from '../components/AllDocuments.vue'
import Document from '../components/Document.vue'
import DDocument from '../components/DDocument.vue'
import CreateDatabase from '../components/CreateDatabase.vue'

const routes = [
    {
        name: "databases",
        path: '/',
        component: Databases
    },
    {
        name: "create_database",
        path: '/create',
        component: CreateDatabase
    },
    {
        name: "all_docs",
        path: '/:db/_all_docs',
        component: AllDocuments
    },    
    {
        name: "ddocument",
        path: '/:db/_design/:doc_id',
        component: DDocument
    },
    {
        name: "document",
        path: '/:db/:doc_id',
        component: Document
    }
]

const router = createRouter({

    history: createWebHashHistory(),
    
    routes,

})

export default router