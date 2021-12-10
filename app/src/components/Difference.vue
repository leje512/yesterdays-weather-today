<template>
  <div>
    <span>{{ oldData }}</span>
    <span id="difference">{{ difference }}</span>
    <span>{{ newData }}</span>
  </div>
</template>

<script>
export default {
  name: "Difference",
  props: {
    oldData: Number,
    newData: Number,
  },
  data() {
    return {
      difference: Number,
    };
  },
  created() {
    this.getDifference();
  },
  methods: {
    getDifference() {
      this.difference = this.newData - this.oldData;
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
#difference {
  padding-left: 10px;
  padding-right: 10px;
  font-size: 25px;
}
</style>
