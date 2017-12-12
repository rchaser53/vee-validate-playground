<template>
  <div class="column is-12">
      <label class="label" for="email">Email</label>
      <p :class="{ 'control': true }">
          <input v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text" placeholder="Email">
          <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
      </p>
  </div>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
