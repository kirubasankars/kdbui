<template>
  <div class>
    <ul id="example-1" style="list-style:none">
      <li v-for="item in listDatabases" :key="item.name">
        <router-link :to="{name:'all_docs', params:{db: item.db_name}}">{{ item.db_name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "databases",
  computed: {
    ...mapGetters(["listDatabases"])
  },
  created() {
    this.$store.dispatch("fetchDatabases");
  }
};
</script>
