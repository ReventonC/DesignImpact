<template>
    <div>
        <app-directory/>
    </div>
</template>

<script>
/* eslint-disable */
import Directory from "@/components/Directory"
export default {
  name: "Home",
  components: {
      "app-directory": Directory
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
* {
  color: #4b4b4b;
}
</style>
