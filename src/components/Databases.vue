<template>
    <div class="p-3">
        <div class="flex">
            <div class="flex-none text-xl text-red-700">Databases</div>
            <div class="flex-grow"></div>
            <div class="flex-none self-end text-purple-600">
                <router-link
                    :to="{ name: 'create_database' }"
                    class="items-end content-end"
                >create database</router-link>
            </div>
        </div>
        <div class="pt-3">
            <div v-if="!loading" class="grid grid-cols-1 border-t-2 border-fuchsia-600">
                <div v-for="db in databases" :key="db" class="border-b-2 border-fuchsia-600 p-1 hover:bg-purple-100">
                    <router-link :to="{ name: 'all_docs', params: { db: db } }" class="block">{{ db }}</router-link>
                </div>
            </div>
        </div>
        <div v-if="loading">loading...</div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const databases = computed(() => {
    return store.state.db.databases
})

const loading = computed(() => {
    return store.state.db.loading
})

const store = useStore()
store.dispatch("loadDatabases")

</script>


