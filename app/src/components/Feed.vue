<template>
  <div>
    <h2>{{ currentDate }}</h2>
    <p>{{ currentWeather.temp_c }}</p>
    <br />
    <p>Humidity: {{ currentHumidity }}%</p>
  </div>
</template>

<script>
import { getCurrentWeather, getYesterdaysWeather } from "../services/rest";
import { formatDate, yesterdaysDate } from "../ressources/app";

export default {
  name: "Feed",
  props: {
    msg: String,
  },
  data() {
    return {
      currentWeather: Object,
      currentDate: String,
      currentMinTemp: Number,
      currentMaxTemp: Number,
      currentHumidity: Number,

      yesterdaysWeather: Object,
      yesterdaysDate: String,
      yesterdaysMinTemp: Number,
      yesterdaysMaxTemp: Number,
      yesterdaysHumidity: Number,
    };
  },
  async created() {
    this.getCurrentWeather()
      .then(() => this.getCurrentDate())
      .then(() => this.getCurrentMinMaxTempHumidity())
      .then(() => this.getYesterdaysWeather());
  },
  methods: {
    async getCurrentWeather() {
      const data = await getCurrentWeather();
      this.currentWeather = data.forecast.forecastday[0];
      console.log("current", this.currentWeather);
    },

    getCurrentDate() {
      let unformattedDate = this.currentWeather.date;
      this.currentDate = formatDate(unformattedDate);
      console.log(this.date);
    },

    getCurrentMinMaxTempHumidity() {
      this.currentMinTemp = this.currentWeather.day.mintemp_c;
      this.currentMaxTemp = this.currentWeather.day.maxtemp_c;
      this.currentHumidity = this.currentWeather.day.avghumidity;
    },

    async getYesterdaysWeather() {
      let yesterday = yesterdaysDate(this.currentDate);
      const data = await getYesterdaysWeather(yesterday);
      this.yesterdaysWeather = data.forecast.forecastday[0];
      console.log("yesterday", this.yesterdaysWeather);
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
