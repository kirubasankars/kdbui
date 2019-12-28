<template>
  <div>
    <div class="modal-background" v-show="modalEditor" v-on:keyup="keyescapse">
      <div class="modal">
        <div class="header">
          <div class="close" v-on:click="hideModal()">X</div>
        </div>
        <div class="body">
          <div id="docEditor"/>
        </div>
        <div class="footer">
          <button v-on:click="save()">Save</button>
          <button v-on:click="hideModal()">Close</button>
        </div>
      </div>
    </div>
    <div v-for="(view, name) in views" :key="view" class="scripts">
      <div>{{name}}</div>
      <div><span>setup</span><button v-on:click="showModal('', view['setup'].length, 'setup', name)">+</button></div>
      <div v-for="(item, index) in view.setup" :key="'setup'+index" v-on:click="showModal(item, index, 'setup', name)" class="item">{{item}}</div>
      <div><span>run</span><button v-on:click="showModal('', view['run'].length, 'run', name)">+</button></div>
      <div v-for="(item, index) in view.run" :key="'run'+index" v-on:click="showModal(item, index, 'run', name)" class="item">{{item}}</div>
      <div><span>select</span><button v-on:click="showModal('', view['run'].length, 'run', name)">+</button></div>
      <div v-for="(item, key) in view.select" :key="key" v-on:click="showModal(item, key, 'select', name)" class="item">
        <div>{{key}}</div>
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {},
  data () {
    return {
      modalEditor : false
    }
  },
  computed: {
    ...mapGetters(["getDocument"]),
    views() {
      return this.getDocument["views"];
    }
  },
  methods : {
    showModal(item, index, type, view) {
      this.modalEditor = true
      this.modalContent = item
      this.modalIndex = index
      this.modalType = type
      this.modalView = view
      this.editor.setValue(item)
      this.editor.focus()
    },
    hideModal() {
      this.modalEditor = false
    },
    save() {
      var content = this.getDocument
      var view = content.views[this.modalView]
      view[this.modalType][this.modalIndex] = this.editor.getValue()

      this.$store.dispatch("saveDocument", {
        db: this.$route.params.db,
        doc: JSON.parse(JSON.stringify(content))
      });

      this.modalEditor = false
      this.created()
    },
    keyescapse(event) {
      if(event.key == "Escape") {
         this.modalEditor = false
       }
    }
  },
  mounted() {
    this.editor = window.ace.edit("docEditor");
    this.editor.setTheme("ace/theme/dracula");
    this.editor.session.setMode("ace/mode/sql");
    this.editor.setFontSize(14);
    this.editor.setOption("showPrintMargin", false);
    this.editor.setValue('')

    
  },
  created() {
    var params = this.$route.params;
    if (this.$route.params.ddoc_id) {
      params = {
        db: this.$route.params.db,
        doc_id: "_design/" + this.$route.params.ddoc_id
      };
    }
    this.$store.dispatch("fetchDocument", params);
  }
};
</script>

<style scoped>
.scripts {
  padding: 5px;
}

.scripts .item {
  padding: 5px;
  margin: 5px 5px 5px 10px;
  border: 1px solid green;
}

.modal-background {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #212529;
}

.modal {
  height: calc(100% - 40px);
  width: calc(100% - 40px);
  position: relative;
  left: 20px;
  top: 20px;
}

.modal .header, .modal .footer {
  position: relative;
  height: 30px;
  background-color: blue;
}

.modal .footer button {
  float: right;
  margin-left: 5px;
}

.modal .header .close {
  position: absolute;
  right: 0;
  color:white;
  font-size: 14px;
  padding: 5px;
  cursor: pointer;
}

.modal .body {
  height: calc(100% - 60px);
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}

.body #docEditor {
  flex: 1 1 auto;
}
</style>