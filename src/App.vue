<template>
  <div id="app">
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import footer from'./components/footer/footer'
export default {
  name: 'App',
  components: {
      "v-footer":footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width :100%;
  height:100%;
  overflow :hidden;
  margin :0;
  padding:0;
}
</style>
