<template>
  <div>
	  <header>
	  	<h1>{{title}}</h1>
	  </header>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  data: function() {
    return {};
  }
};
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 6px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
