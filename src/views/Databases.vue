<template>
  <div class="">
    {{fetchDatabases()}}
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'databases',
  created() {
    axios.get(`_all_dbs`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    fetchDatabases () {
      return {
        "testDB" : {
          docCount: 2
        }
      }
    }
  }
}
</script>
