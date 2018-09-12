Vue.component('main-cart', {
  template: `
  <div class="item" v-show="show">
    <div class="buttons">
      <span class="delete-btn" @click="deleteItem"></span>
      <span class="like-btn"></span>
    </div>

    <div class="image">
      <img src="https://via.placeholder.com/100x100" alt="" />
    </div>

    <div class="description">
      <span>{{item.name}}</span>
      <span>{{item.description}}</span>
      <span>{{item.price}}</span>
    </div>

    <div class="quantity">
      <button class="plus-btn" type="button" name="button" @click="increaseTotal">
        <img src="./images/plus.svg" alt="" />
      </button>
      <h4>{{total}}</h4>
      <button class="minus-btn" type="button" name="button" @click="reduceTotal">
        <img src="./images/minus.svg" alt="" />
      </button>
    </div>

    <div class="total-price">{{price}}</div>
    </div>

  `,
    data : function(){
      return {
        show : true,
        price : this.item.price,
        total : 1
      };
    },
    methods : {
      increaseTotal(){
        this.price += this.item.price;
        this.total++;
      },
      reduceTotal(){
        this.price -= this.item.price;
        this.total--;
      },
      deleteItem(){
        this.show = false;
        const id = this.item._id;
        this.$emit('delete-on-parent',id);
      }
    },
    props : ['item']
  }
);