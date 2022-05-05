<template>
  <div id="app">
    <TreeMenu 
      :label="tree.label" 
      :nodes="tree.nodes"
      :id="tree.id"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TreeMenu from './components/TreeMenu.vue';
export default {
  name: 'App',
  components: {
    TreeMenu,
  },
  computed: {
    ...mapState([
      'tree'
    ])
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
#app ul li {
  list-style-type: none;
}
</style>
