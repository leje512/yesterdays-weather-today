<template>
  <div>
    <h2>Today: {{ currentDate }}</h2>
    <p>vs. Yesterday: {{ yesterdaysDate }}</p>
    <Difference
      id="minTemp"
      :old-data="yesterdaysMinTemp"
      :new-data="currentMinTemp"
      :key="yesterdaysMinTemp"
    />
    <br />
    <p>Humidity: {{ currentHumidity }}%</p>
  </div>
</template>

<script>
import { getCurrentWeather, getYesterdaysWeather } from "../services/rest";
import { formatDate, yesterdaysDate } from "../ressources/app";
import Difference from "./Difference.vue";

export default {
  name: "Feed",
  components: { Difference },
  props: {
    msg: String,
  },
  data() {
    return {
      currentWeather: undefined,
      currentDate: undefined,
      currentMinTemp: undefined,
      currentMaxTemp: undefined,
      currentHumidity: undefined,
      yesterdaysWeather: undefined,
      yesterdaysDate: undefined,
      yesterdaysMinTemp: undefined,
      yesterdaysMaxTemp: undefined,
      yesterdaysHumidity: undefined,
    };
  },
  async created() {
    this.getCurrentWeather()
      .then(() => this.getCurrentDate())
      .then(() => this.getCurrentMinMaxTempHumidity())
      .then(() => this.getYesterdaysWeather())
      .then(() => this.getYesterdaysWeather())
      .then(() => this.getYesterdaysDate())
      .then(() => this.getYesterdaysMinMaxTempHumidity());
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
    getYesterdaysDate() {
      let unformattedDate = this.yesterdaysWeather.date;
      this.yesterdaysDate = formatDate(unformattedDate);
      console.log("yesterday", this.date);
    },
    getYesterdaysMinMaxTempHumidity() {
      this.yesterdaysMinTemp = this.yesterdaysWeather.day.mintemp_c;
      this.yesterdaysMaxTemp = this.yesterdaysWeather.day.maxtemp_c;
      this.yesterdaysHumidity = this.yesterdaysWeather.day.avghumidity;
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
