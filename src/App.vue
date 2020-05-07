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
  width :100%;
  height:100%;
  /* overflow :hidden; */
  margin :0;
  padding:0;
  background :#eee;
}
</style>
