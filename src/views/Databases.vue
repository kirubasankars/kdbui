<template>
  <div class="">
    <ul id="example-1" style="list-style:none">
      <li v-for="item in getDatabases" :key="item">
        <span>{{ item.name }}</span><span style="margin-left:10px;">{{ item.docCount }}</span>
      </li>
    </ul>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'databases',
  computed: {
     ...mapGetters([
      'getDatabases'
    ])
  },
  created() {
    this.$store.dispatch('fetchDatabases')
  }
}
</script>
