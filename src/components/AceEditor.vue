<template>
  <div class="editor">
    <div>
     <button @click="save">Save</button>
    </div>
    <div id="docEditor"/>
  </div>
</template>

<script>
export default {
  props: ['content'],
  data: function() {
    return {
      editor: null,
      beforeContent: '',
    }
  },
  watch : {
    content: function (val) {
      this.editor.setValue(JSON.stringify(val, null, 2))

      if(this.beforeContent == null) {
         setTimeout(() => {
           this.$router.push({ "name" : "all_docs", "params" : { "db" : this.$route.params.db } })
         }, 500)
      }

      this.beforeContent = val;
    }
  },
  mounted () {
    this.editor = window.ace.edit("docEditor");
    this.editor.setTheme("ace/theme/dracula");
    this.editor.session.setMode("ace/mode/json");
    this.editor.setFontSize(14);
    this.editor.setOption("showPrintMargin", false);
    this.editor.setValue('{\n\t\n}')
  },
  methods: {
    save() {
      this.$store.dispatch("saveDocument", {
        db: this.$route.params.db,
        doc: JSON.parse(this.editor.getValue())
      });
      this.beforeContent = null;
    }
  }
};
</script>

<style scoped>
    .editor {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
    }

    .editor #docEditor {
      flex: 1 1 auto;
    }
</style>
