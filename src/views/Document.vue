<template>
  <Editor :content="getDocument" />
</template>

<script>
import { mapGetters } from "vuex";
import Editor from "@/components/AceEditor.vue";

export default {
  components: {
    Editor
  },
  computed: {
    ...mapGetters(["getDocument"])
  },
  created() {
    var params = this.$route.params;
    if (this.$route.params.ddoc_id) {
      params = { db : this.$route.params.db, "doc_id" : "_design/" + this.$route.params.ddoc_id }
    }
    this.$store.dispatch("fetchDocument", params);
  }
};
</script>