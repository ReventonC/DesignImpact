<template>
  <div id="app">
    <app-header/>
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable */
import Header from '@/components/Header'
export default {
  name: "App",
  components: {
      'app-header': Header
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Lato|Raleway");
@import url('https://fonts.googleapis.com/css?family=Quicksand');
* {
  transition: 0.5s ease;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /*font-family: "Raleway", sans-serif;*/
  font-family:'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  color: #4b4b4b;
}
</style>
