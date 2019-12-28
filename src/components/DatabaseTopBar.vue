<template>
    <div>
        <span>{{this.$route.params.db}}</span>
        <button @click="deleteDatabase">X</button>
        <button @click="newDocument">+</button>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed : {
         ...mapGetters(["getDatabase"])
    },
    watch : {
        getDatabase(val) {
            if (val == "") {
                this.$router.push({name:'databases', params:{}});
            }
        }
    },
    mounted () {
        this.$store.dispatch("setDatabase", this.$route.params.db)
    },
    methods : {
        deleteDatabase () {
            this.$store.dispatch("deleteDatabase", this.$route.params.db)
        },
        newDocument () {
            this.$store.dispatch("newDocument")
            this.$router.push({name:'document', params:{db:this.$route.params.db, doc_id: '_new'}});
        }
    }
}
</script>