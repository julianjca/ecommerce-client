Vue.component('main-category', {
  template: `
      <a href="#" class="hvr-grow" :id ="category._id" @click="callCategory(category._id)">{{ category.name }}</a>
  `,
    data : function(){
      return {
        show : false
      };
    },
    methods : {
      closeCart : function(){
        this.$emit('tutup');
      },

      callCategory : function(id){
        this.$emit('call-category',id);
      }
    },
    props : ['category']
  }
);