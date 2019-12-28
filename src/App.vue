<template>
  <div id="app" :class="{ closedNav: closedNav }">
    <NavBar @toggleNav="toggleNav" />
    <div class="dashboard">
      <div class="toppanel">
        <router-view name="topBar" />
      </div>
      <div class="contentpanel" style="overflow:auto">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "app",
  components: {
    NavBar
  },
  data () {
    return {
      closedNav: false
    }
  },
  methods: {
    toggleNav () {
      this.closedNav = !this.closedNav;
    }
  }
};
</script>

<style>

html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    background-color:white;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

#app > .dashboard {
    width: 100%;
    height: 100%;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
}

#app > .dashboard > .toppanel {
    width: 100%;
    height: 64px;
    border-bottom: 1px solid #f1f1f1;
}

#app > .dashboard > .contentpanel {
    width: 100%;
    flex: 1 1 auto;
}

#app.closedNav #navbar {
  width: 64px;
}

</style>
