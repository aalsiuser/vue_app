<template>
  <div>
    <nav-bar></nav-bar>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style scoped>
.container-fluid {
  padding-top: 70px;
}
</style>
