<template>
  <div>
    <b-form @submit.prevent="onSubmit">
    email<input type="text" v-model="email"><br>
    password<input type="text" v-model="password">
    <b-button type="submit">submit</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    onSubmit() {
      axios
        .post("/users", {
          user: {
            email: this.email,
            password: this.password
          }
        })
        .then(response => {
          console.log("done");
          // whatever you want
        })
        .catch(error => {
          // whatever you want
        });
    }
  }
};
</script>

<style scoped>

</style>
