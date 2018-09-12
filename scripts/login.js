Vue.component('login-form',{
  template : `
  <div class="login-form">
  <input type="email" v-model="email" placeholder="email">
  <br>
  <input type="password" v-model="password" placeholder="password">
  <br>
  <input type="submit" @click="login">
  <button @click = "close">close</button>
  </div>
  `,
  methods : {
    login(){
      const loginData = {
        email : this.email,
        password : this.password
      };
      this.$emit('login',loginData);
    },

    close(){
      this.$emit('close-login');
    }
  },
  data: function(){
      return {
        email : '',
        password : ''
    };
  }

});