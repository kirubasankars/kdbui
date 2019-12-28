<template>
  <div style="width:100%;height:100%;overflow:auto">
    <table style="width:100%;">
      <thead>
        <tr>
          <td>Key</td>
          <td>Value</td>
          <td>Id</td>
        </tr>
      </thead>
      <tr v-for="item in listViewItems" :key="item.id" @click="navigateDoc(item)">
        <td>{{ item.key }}</td>
        <td>{{ item.value }}</td>
        <td>{{ item.id }}</td>
      </tr>
      <tr></tr>
    </table>
  </div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  name: "DatabaseView",
  computed: {
    ...mapGetters(["listViewItems"])
  },
  methods: {
    navigateDoc(item) {
      this.$router.push({ path: `/database/${this.$route.params.db}/${item.id}` });
    }
  },
  created() {
    this.$store.dispatch("fetchView", this.$route.params.db, "all_docs");
  }
};
</script>
