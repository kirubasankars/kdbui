<template>
    <div v-if="loading">loading...</div>
    <div v-if="!loading" class="p-3">
        <router-link class="text-purple-400" :to="{ name: 'all_docs', params: { db: db } }">&lt;&nbsp;{{ db }}</router-link>
        <div class="flex pb-3 pt-3">
            <div class="flex-none text-xl text-red-700">
                {{ document._id }}
            </div>
            <div class="flex-grow"></div>
            <div class="flex-none self-end text-purple-600">
                <div class="grid grid-flow-col gap-4">
                    <router-link :to="{ name: 'create_database' }" class="items-end content-end">delete</router-link>                                 
                </div>
            </div>
        </div>
        <pre class="overflow-x-auto overflow-y-hidden border-t-2 border-fuchsia-600 pt-2">{{ document }}</pre>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

const store = useStore()
const route = useRoute()

const document = computed(() => {
    return store.state.db.document
})

const db = computed(() => {
    return route.params.db
})

const loading = computed(() => {
    return store.state.db.loading
})

store.dispatch("loadDocument", route.params)

</script>s