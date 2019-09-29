<template>
    <div id="navbar">
      <ul class="top">
        <li class="item"><router-link to="/">Databases</router-link></li>
        <li class="item"><router-link to="/verify">Verify</router-link></li>
      </ul>
      <ul class="bottom">
        <li class="item" @click="toggleNav">Close</li>
      </ul>
    </div>
</template>

<script>
export default {
    methods:{
      toggleNav() {
        this.$emit("toggleNav")
      }
    }
}
</script>

<style scoped>
  #navbar {
      width: 220px;
      height: 100%;
      background-color:black;
      border-right: 1px solid #f1f1f1;
      position: relative;
  }

  #navbar .item {
    height: 25px;
    color: white;
    font-weight: bold;
  }
  #navbar .item a {
    display: block;
    width: 115px;
    color: white;
    font-weight: bold;
  }

  #navbar ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  #navbar ul.bottom {
    position:absolute;
    bottom: 0;
  }
</style>