const baseUrl = `http://api.minimalistcoder.xyz/`;

const app = new Vue({
  el: '#app',
  methods : {
    show(){
      this.showModal= true;
    },
    close(){
      this.showModal = false;
    },

    findCategory : function(id){
      axios({
        method: 'GET',
        url: `${baseUrl}categories/${id}`
      })
        .then(data => {
          app.products = data.data.data.products;
        })
        .catch(err => {
          console.log(err);
        });
    },

    addToCart(data){
      console.log(data);
      const cart = JSON.parse(localStorage.getItem('cart'));
      if(cart===null){
        const arr = [];
        arr.push(data);
        this.cart = arr;
        localStorage.setItem('cart',JSON.stringify(arr));
      } else{
        cart.push(data);
        this.cart = cart;
        localStorage.setItem('cart',JSON.stringify(cart));
      }
    },

    deleteFromCart(id){
      const cart = JSON.parse(localStorage.getItem('cart'));
      console.log(id);
      for(let i = 0;i< cart.length;i++){
        if(cart[i]._id===id){
          cart.splice(i,1);
        }
      }
      this.cart = cart;
      localStorage.setItem('cart',JSON.stringify(cart));
    },

    login(loginData){
      axios({
        method : 'POST',
        url : `${baseUrl}login`,
        data : {
          email : loginData.email,
          password : loginData.password
        }
      })
      .then(response=>{
        localStorage.setItem('token',response.data.token);
        app.isLogin = true;
        app.showLogin = false;

      })
      .catch(err=>{
        console.log(err);
        app.errMess = "wrong password";

      });
    },

    showingLogin(){
      this.showLogin = true;
    },

    register(registerData){
      axios({
        method : 'POST',
        url : `${baseUrl}register`,
        data : {
          email : registerData.email,
          password : registerData.password,
          name : registerData.name
        }
      })
      .then(response=>{
        console.log(response);
        app.showRegister = false;
      })
      .catch(err=>{
        console.log(err);
      });
    },
    checkout(){
      const finalArr = [];
      const token = localStorage.getItem("token");
      for(let i = 0;i<this.cart.length;i++){
        finalArr.push(this.cart[i]._id);
      }

      axios({
        method : "POST",
        url : `${baseUrl}checkout`,
        data : {
          objId : finalArr
        },
        headers : {
          token : token
        }
      })
      .then(response=>{
        console.log(response);
        this.cart = [];

      })
      .catch(err=>{
        console.log(err);
      });
    },

    findProducts(key){
      axios({
        method : "post",
        data : {
          searchKey : key
        },
        url : `${baseUrl}products/search`
      })
      .then(data=>{
        app.products = data.data.data;
      })
      .catch(err=>{
        console.log(err);
      });
    }
  },

  data : function(){
    return{
      showModal : false,
      products : [],
      categories : [],
      cart : [],
      showLogin : false,
      showRegister : false,
      isLogin : false,
      errMess : ''
    };
  },

  created : function(){
      this.cart = JSON.parse(localStorage.getItem('cart'));
      axios({
        method: 'get',
        url: `${baseUrl}categories/`,
      })
        .then(data => {
          console.log(data.data.data);
          app.categories = data.data.data;
          app.products = data.data.data[5].products;
        })
        .catch(err => {
          console.log(err);
        });
    },
    mounted : function (){
      axios({
        method : 'GET',
        url : `${baseUrl}auth`,
        headers : {
          token : localStorage.getItem('token')
        }
      })
      .then(response=>{
        if(response.data.message!==''){
          app.isLogin = true;
        }
      })
      .catch(err=>{
        console.log(err);
        app.errMess = "Anda belum login";
      });
    }
});