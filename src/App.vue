<template>
  <div id="app">
    <Regularlist/>
  </div>
</template>

<script>
import Regularlist from "./components/regularlist.vue";

export default {
  name: "app",
  components: {
    Regularlist
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .red {
    color: #fb846b;
  }

  .green {
    color: #74cd88;
  }

  .blue {
    color: #7796ff;
  }
}
</style>
