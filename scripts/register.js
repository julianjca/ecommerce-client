Vue.component('register-form',{
  template : `
  <div class="login-form">
  <input type="text" v-model="name" placeholder="name">
  <input type="email" v-model="email" placeholder="email">
  <br>
  <input type="password" v-model="password" placeholder="password">
  <br>
  <input type="submit" @click="register">
  <button @click = "close">close</button>
  </div>
  `,
  methods : {
    register(){
      const registerData = {
        email : this.email,
        password : this.password,
        name : this.name
      };
      this.$emit('register',registerData);
    },

    close(){
      this.$emit('close-register');
    }
  },
  data: function(){
      return {
        email : '',
        password : '',
        name : ''
    };
  }

});