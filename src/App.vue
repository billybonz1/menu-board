<script>
  import config from './config.json';
  let data = [];
  config.blocks.forEach(function(block){
      data.push([]);
  });
  export default{
    data(){
      return{
        config: config,
        activeConfig: config.blocks[0],
        activeBlockIndex: 0,
        data: data,
        products: [
            {
                id: 1,
                sort: 1,
                name: "Product Name",
                price: "8$",
                imageUrl: "data:image/jpeg;base64,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"
            },
            {
                id: 2,
                sort: 1,
                name: "Product Name",
                price: "8$",
                imageUrl: "data:image/jpeg;base64,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"
            },
            {
                id: 3,
                sort: 1,
                name: "Product Name",
                price: "8$",
                imageUrl: "data:image/jpeg;base64,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"
            },
            {
                id: 4,
                sort: 1,
                name: "Product Name",
                price: "8$",
                imageUrl: "data:image/jpeg;base64,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"
            },
            {
                id: 5,
                sort: 1,
                name: "Product Name",
                price: "8$",
                imageUrl: "data:image/jpeg;base64,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"
            }
        ]
      }
    },
    methods: {
      activateBlock(index,config){
        this.activeConfig = config;
        this.activeBlockIndex = index;
      },
      checkProduct(product, event){
        if(event.target.checked){
            if(!this.data[this.activeBlockIndex].products){
                this.data[this.activeBlockIndex].products = [];
            }
            this.data[this.activeBlockIndex].products.push(product);
        }else{
            let index;
            this.data[this.activeBlockIndex].products.forEach(function(p, i){
                if(p.id === product.id){
                    index = i;
                }
            });
            this.data[this.activeBlockIndex].products.splice(index, 1);
        }
        console.log(this.data);
      },
      productChecked(productId){
        if(this.data[this.activeBlockIndex].products && this.data[this.activeBlockIndex].products.length > 0){
            let r = false;
            this.data[this.activeBlockIndex].products.forEach(function(p){
                if(p.id === productId){
                    r = true;
                }
            });
            return r;
        }else{
            return false;
        }
      }
    }
  }
</script>

<template>
  <div class="menu-board-container">
    <div class="mbc-column">
      <h3>Blocks</h3>
      <div class="blocks-tabs">
        <div @click="activateBlock(index, block)" v-for="(block, index) in config.blocks" :class="{ active: index === activeBlockIndex, blockTab: true }">
          {{block.title}}
        </div>
      </div>

      <div class="options-container">
          <div v-if="activeConfig.grid" class="option grid-option">
              <p>Grid</p>
              <input type="text" v-model="data[activeBlockIndex].columns">
              <p>x</p>
              <input type="text" v-model="data[activeBlockIndex].rows">
          </div>
      </div>

      <div class="blocks-container">
        <div @click="activateBlock(index, block)" v-for="(block, index) in config.blocks" :class="{active: index === activeBlockIndex, block: true}" :style="{'grid-column': block['grid-column'], 'grid-row': block['grid-row']}"></div>
      </div>
    </div>
    <div class="mbc-column">
        <div v-if="activeConfig.products">
            <h3>Products</h3>
            <div class="products-container">
                <div v-for="(product, index) in products" class="product" :class="{active: productChecked(product.id)}">
                    <div class="product-checkbox">
                        <label>
                            <input :checked="productChecked(product.id)" type="checkbox" @change="(event) => checkProduct(product,event)">
                        </label>
                    </div>
                    <div class="product-image">
                        <img :src="product.imageUrl" alt="">
                    </div>
                    <div class="product-price">
                        {{ product.price }}
                    </div>
                    <div class="product-name">
                        {{ product.name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
  .menu-board-container{
    width: 1482px;
    background: #F5F6F7;
    border-radius: 7px;
    display: flex;
    flex-wrap: wrap;
    padding: 16px 8px;
    font-family: 'Lato', sans-serif;
  }
  .menu-board-container *{
    font-family: 'Lato', sans-serif;
  }
  .menu-board-container h3{
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
  .mbc-column{
    padding: 0 8px;
  }
  .mbc-column:first-child{
    width: 1019px;
  }
  .mbc-column:last-child{
    width: 404px;
  }

  .blocks-tabs{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 16px;
  }
  .options-container{
      display: flex;
      flex-wrap: wrap;
  }
  .grid-option{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
  }
  .grid-option p{
      margin: 0;
      font-size: 12px;
      line-height: 14px;
      display: flex;
      align-items: center;
      color: #333333;
  }
  .grid-option *{
      margin-right: 8px !important;
  }
  .grid-option input{
      width: 33px;
      height: 30px;
      background: #FFFFFF;
      border: 1px solid rgba(51, 51, 51, 0.5);
      border-radius: 7px;
      font-size: 12px;
      line-height: 14px;
      text-align: center;
      color: #333333;
  }
  .grid-option *:last-child{
      margin-right: 0;
  }
  .blockTab{
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #333;
    margin-right: 16px;
    padding-bottom: 5px;
    position: relative;
    cursor: pointer;
  }
  .blockTab:after{
    position: absolute;
    width: 100%;
    bottom: -3px;
    left: 0;
    background: rgba(51, 51, 51, 0.25);
    border-radius: 7px;
    height: 3px;
    content: "";
  }
  .blockTab.active{
    color: #0A578B;
  }
  .blockTab.active:after{
    background: #0A578B;
  }
  .blocks-container{
    background: #fff;
    margin-top: 16px;
    border-radius: 8px;
    display: grid;
    gap: 16px;
    height: 476px;
    padding: 16px;
  }
  .block{
    background: #ccc;
    opacity: .5;
  }
  .block.active{
    opacity: 1;
    filter: drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.25));
  }
  .product{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding: 8px;
      width: 100%;
      height: 48px;
      background: rgba(51, 51, 51, 0.03);
      border-radius: 8px;
      margin-bottom: 8px;
  }
  .product.active{
      background: rgba(51, 51, 51, 0.07);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
    .product-image img{
        width: 32px;
        height: 32px;
        margin: 0 8px;
        border-radius: 8px;
    }
    .product-price{
        margin-right: 8px;
    }
</style>
