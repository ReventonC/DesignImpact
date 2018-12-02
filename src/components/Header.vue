<template>
    <div class="header">
        <p><router-link to="/">Design Impact</router-link> &nbsp;&nbsp; <a target="_blank" href="https://reventonc.github.io">Zehua Chen</a></p>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
* {
  color: #4b4b4b;
}
.header {
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 5px 5px 5px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    display: flex;
    align-content: center;
}

p {
    font-size: 1.2em;
    font-weight: bold;
    margin: auto 20px; 
}

a {
    text-decoration: none;
    &:hover {
        color: rgb(96, 138, 123);
    }
}
</style>
