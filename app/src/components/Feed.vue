<template>
  <div>
    <h2>{{ date }}</h2>
    <p>{{ currentWeather.temp_c }}</p>
    <br />
    <p>Humidity: {{ humidity }}%</p>
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
      minTemp: Number,
      maxTemp: Number,
      humidity: Number,
    };
  },
  async created() {
    this.getCurrentWeather()
      .then(() => this.getCurrentDate())
      .then(() => this.getCurrentMinMaxTempHumidity());
  },
  methods: {
    async getCurrentWeather() {
      const data = await getCurrentWeather();
      this.currentWeather = data.forecast.forecastday[0];
      console.log("current", this.currentWeather);
    },

    getCurrentDate() {
      let unformattedDate = this.currentWeather.date;
      this.date = formatDate(unformattedDate);
      console.log(this.date);
    },

    getCurrentMinMaxTempHumidity() {
      this.minTemp = this.currentWeather.day.mintemp_c;
      this.maxTemp = this.currentWeather.day.maxtemp_c;
      this.humidity = this.currentWeather.day.avghumidity;
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
