<template>
  <div>
	  <footer>
	  	<p>{{copyright}}</p>
	  </footer>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      copyright: "vamshi 217 copyrights"
    };
  }
};
</script>

<style scoped>
footer {
  background: #222;
  padding: 6px;
}
p {
  color: lightgreen;
  text-align: center;
}
</style>
