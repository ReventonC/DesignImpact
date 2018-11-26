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
* {
  transition: 0.5s ease;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #4b4b4b;
}
</style>
