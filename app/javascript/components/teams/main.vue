<template>
  <div>
  	<app-header v-bind:title='title'></app-header>
  	<app-ninja :items='items'></app-ninja>
  	<app-footer v-bind:title='title'></app-footer>
  </div>
</template>

<script>
import header from "./index.vue";
import footer from "./edit.vue";
import items from "./show.vue";
export default {
  components: {
    "app-header": header,
    "app-footer": footer,
    "app-ninja": items
  },
  data: function() {
    return {
      items: [
        { name: "vamshi", special: "okay", show: false },
        { name: "vamshi", special: "okay", show: false },
        { name: "vamshi", special: "okay", show: false },
        { name: "vamshi", special: "okay", show: false },
        { name: "vamshi", special: "okay", show: false }
      ],
      title: "Vue Ninjas"
    };
  }
};
</script>

<style scoped>

</style>
