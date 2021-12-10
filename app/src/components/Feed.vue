<template>
  <div>
    <h2>{{ currentWeather.last_updated }}</h2>
    <h2>{{ date }}</h2>
  </div>
</template>

<script>
import getCurrentWeather from "../services/rest";
import formatDate from "../ressources/app";

export default {
  name: "Feed",
  props: {
    msg: String,
  },
  data() {
    return {
      currentWeather: Object,
      date: String,
    };
  },
  async created() {
    this.getCurrentWeather().then(() => this.getDate());
  },
  methods: {
    async getCurrentWeather() {
      const data = await getCurrentWeather();
      this.currentWeather = data.current;
      console.log("current", this.currentWeather);
    },

    getDate() {
      let unformattedDate = this.currentWeather.last_updated;
      this.date = formatDate(unformattedDate);
      console.log(this.date);
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
