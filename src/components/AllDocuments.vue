<template>    
    <div class="p-3">
        <router-link class="text-purple-400" :to="{ name: 'databases' }">&lt;&nbsp;Databases</router-link>
        <div class="flex pb-3 pt-3">
            <div class="flex-none text-xl text-red-700">All Documents</div>
            <div class="flex-grow"></div>
            <div class="flex-none self-end text-purple-600">
                <div class="grid grid-flow-col gap-4">
                    <router-link
                        :to="{ name: 'create_database' }"
                        class="items-end content-end"
                    >manage</router-link>
                    <router-link
                        :to="{ name: 'create_database' }"
                        class="items-end content-end"
                    >changes</router-link>
                    <router-link
                        :to="{ name: 'create_database' }"
                        class="items-end content-end"
                    >create document</router-link>
                </div>
            </div>
        </div>
        <div v-if="!loading">
            <div class="table w-full border-t-2 border-fuchsia-600">
                <router-link
                    class="table-row hover:bg-purple-100"
                    v-for="row in rs.rows"
                    :key="row._id"
                    :to="{ name: (row.id[0] == '_' ? 'ddocument' : 'document'), params: { db: db, doc_id: row.id.replace('_design/', '') } }"
                >
                    <div class="table-cell p-1 border-b-2 border-fuchsia-600">{{ row.id }}</div>
                    <div class="table-cell p-1 border-b-2 border-fuchsia-600">{{ row.rev }}</div>
                </router-link>
            </div>
            <div class="table w-full py-2">
                <div class="table-row">                    
                    <router-link
                        class="pr-2"
                        :class="{ 'pointer-events-none text-gray-500': noPrevious, 'text-purple-600': !noPrevious }"
                        :to="{ name: 'all_docs', params: { db: db }, query: { page: page - 1 } }"
                    >&lt;&nbsp;prev</router-link>
                    <router-link
                        class="pr-2"                        
                        :class="{ 'pointer-events-none text-gray-500': noNext, 'text-purple-600': !noNext }"
                        :to="{ name: 'all_docs', params: { db: db }, query: { page: page + 1 } }"
                    >next&nbsp;&gt;</router-link>
                    <span class="pr-2">total_rows : {{ rs.total_rows }}</span>
                    <span class="pr-2">offset : {{ rs.offset }}</span>
                </div>
            </div>
        </div>
        <div v-if="loading">loading...</div>
    </div>    
</template>


<script setup>

import { computed, watch } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

const store = useStore()
const route = useRoute()

const rs = computed(() => {
    return store.state.db.all_docs
})

const db = computed(() => {
    return route.params.db
})

const loading = computed(() => {
    return store.state.db.loading
})

const noNext = computed(() => {
    let rs = store.state.db.all_docs
    return (rs.offset + 10) > rs.total_rows
})

const noPrevious = computed(() => {
    return store.state.db.all_docs.offset == 1
})


const page = computed(() => {
    if (route.query.page) {
        return parseInt(route.query.page)
    }
    return 1
})

watch(page, () => {
    store.dispatch("loadAllDocuments", { db: route.params.db, page: page.value })
})

store.dispatch("loadAllDocuments", { db: route.params.db, page: page.value })

</script>