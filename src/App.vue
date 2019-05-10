<template>
  <div id="app">
    <TrixEdit value="<b>hello world</b>" />
  </div>
</template>

<script>
import TrixEdit from './components/TrixEdit.vue'

export default {
  name: 'app',
  components: {
    TrixEdit
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
