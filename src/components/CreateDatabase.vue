<template>
    <div class="p-3">
        <router-link :to="{ name: 'databases' }">&lt;&nbsp;Databases</router-link>
        <div class="flex pb-3 pt-3">
            <div class="flex-none text-xl text-red-700">
                Create Database
            </div>
            <div class="flex-grow"></div>
            <div class="flex-none self-end">            
            </div>
        </div>
        <div>Name</div>
        <input type="text" autocomplete="off" class="input border border-gray-400 appearance-none rounded focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600" v-model="name" />        
        <div class="pt-2">
            <button v-on:click="createDatabase()" class="bg-indigo-600 hover:bg-blue-dark text-white px-2 mr-2 rounded">Create</button>
            <button v-on:click="cancel()" class="bg-indigo-600 hover:bg-blue-dark text-white px-2 rounded">Cancel</button>        
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue'
import axios from '../store/axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const name = ref('');

const createDatabase = () => {
    if (name.value == '') {
        return
    }
    axios.put(`/${name.value}`).then((response) => {    
        router.push(
            {
                name: 'all_docs',
                params: {   
                    db: name.value
                }
            }
        )            
    });
}

const cancel = () => {    
    router.push(
        {
            name: 'databases'
        }
    );
}

</script>