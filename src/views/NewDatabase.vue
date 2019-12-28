<template>
    <div>
      <input v-model="name" placeholder="edit me">
      <button @click="create">Create</button>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data () {
    return {
      name : ""
    }
  },
   computed: {
    ...mapGetters(["getDatabase"])
  },
  watch : {
    getDatabase (db) {
      this.$router.push({name:'all_docs', params:{db: db}});
    }
  },
  mounted() {
    this.name = "";
  },
  methods : {
    create () {
      this.$store.dispatch("createDatabase", this.name);
    }
  }
};
</script>