<template>
    <div >
        <div class="outer"/>
        <router-link active-class='active' to="/Raccoonal" exact>
            <div class="page left">
                <div class="page-background"/>
                <div class="page-content">
                    <h1>Raccoonal</h1>
                    <div class="line"></div>
                    <h2>COGS 120 Project</h2>
                    <p>An emotional journal &amp; companion for you. </p>
                </div>
            </div>
        </router-link>

        <router-link active-class='active' to="/JSA" exact>
            <div class="page right">
                <div class="page-background"/>
                <div class="page-content">
                    <h1>UCSD JSA</h1>
                    <div class="line"></div>
                    <h2>Student Organization Website</h2>
                    <p>The official website of UCSD JSA (Japanese Student Association).</p>
                </div>
            </div>
        </router-link>
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
  color: rgba(0, 0, 0, 0.8);
}
.outer {
  background-image: url("../assets/background.png");
  background-repeat: repeat;
  width: 100%;
  height: 100%;
  position: fixed;

}
h1,
h2 {
  font-weight: 600;
}

h1 {
  margin: 20px auto 5px;
}

h2 {
  margin: 10px auto 30px;
}

.line {
  margin: 0 auto;
  width: 30%;
}

.page {
  position: absolute;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  pointer-events: none;
  padding-top: 80px;

  .line {
    border: 0px;
  }
  h1 {
    font-size: 4em;
  }
  h2,
  p {
    font-size: 0;
  }

  &:hover {
    * {
      color: white;
    }
    .line {
      border: solid 1.5px;
    }
    h1 {
      font-size: 2.5em;
    }
    h2 {
      font-size: 1.5em;
    }
    p {
      font-size: 1.5em;
    }

    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
  }

  $background-size: 25vw;
  &-background {
    margin: auto auto 0;
    border-radius: 50%;
    width: $background-size;
    height: $background-size;
    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.5);
    pointer-events: auto;
    border: 10px white solid;

    &:hover {
      width: 100%;
      height: 1.5 * $background-size;
      border-radius: 0;
      box-shadow: 0 3px 15px rgba(0, 0, 0, 0.5);
      border: 0px white solid;
    }
  }

  &-content {
    margin: 0 auto auto;
    display: flex;
    flex-direction: column;
    align-content: center;
    pointer-events: none;
  }
}
$padding-side: 15%;
.left {
  left: 0;
  top: 0;
  .page-background {
    background-image: url("../assets/RaccoonalSlide.png");
    background-size: cover;
    background-position: center;
  }

  &:hover {
    background-color: rgba(#88cffe, 0.7);
  }
}

.right {
  right: 0;
  top: 0;
  .page-background {
    background: url("../assets/JSAbanner.jpg");
    background-size: cover;
    background-position: center;
  }

  &:hover {
    background-color: rgba(#ff98ca, 0.7);
  }
}
</style>
