<template>
  <div>
    <!-- <router-view></router-view> -->
    <h2>sdg{{blog.items}}</h2>
    <h2>Add New Blogpost </h2>
    <form>
      <label>Title</label>
      <input type='text' v-model.lazy="blog.title" required/><br><br><br>
      <label>Blog content:</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <lable>ninjas</lable>
      <input type="checkbox" value="ninjas" v-model="blog.categories" />
      <lable>ni</lable>
      <input type="checkbox" value="ni" v-model="blog.categories" />
      <lable>nin</lable>
      <input type="checkbox" value="nin" v-model="blog.categories" />
      <lable>ninja</lable>
      <input type="checkbox" value="ninja" v-model="blog.categories" />
      <button v-on:click.prevent="submit">submit</button>
    </form>
    <div id="preview">
      <h2>preview blog</h2>
      <router-view></router-view>
      <p>title: {{blog.title | to-uppercase}}</p>
      <p>content : {{blog.content}}</p>
      <ul>
        <li v-for="category in blog.categories"><{{category}}></li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        itmes: []
      }
    };
  },
  methods: {
    submit() {
      axios
        .post("/teams", {
          data: this.blog.content
        })
        .then(Response => {
          console.log(Response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style scoped>

</style>
