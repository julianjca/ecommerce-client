Vue.component('product-comp',{
  template : `
  <div class="product-container hvr-grow" :id="product._id" @click="addToCart(product)">
    <img src="https://via.placeholder.com/200x200" alt="">
    <p>{{product.name}}</p>
    <p>Price : {{product.price}}</p>
  </div>
  `,
  props : ['product'],
  methods : {
    addToCart(product){
      this.$emit('add-cart',product);
    }
  }
});