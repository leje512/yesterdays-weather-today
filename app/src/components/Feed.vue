<template>
  <div>
    <h1>Here is todays weather</h1>
  </div>
</template>

<script>
import getCurrentWeather from "../services/rest";

export default {
  name: "Feed",
  props: {
    msg: String,
  },
  data() {
    return {
      currentWeather: Object,
    };
  },
  created() {
    this.getCurrentWeather();
  },
  methods: {
    async getCurrentWeather() {
      const data = await getCurrentWeather();
      this.currentWeather = data.current;
      console.log("current", this.currentWeather);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
