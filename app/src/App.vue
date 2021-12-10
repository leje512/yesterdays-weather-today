<template>
  <Feed />
</template>

<script>
import Feed from "./components/Feed.vue";

export default {
  name: "App",
  components: {
    Feed,
  },
};
</script>

<style>
* {
  background-color: #e4eef5;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 18px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
