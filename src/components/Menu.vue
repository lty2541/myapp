<template>
  <div class="menu container row">
     <!-- 左菜单展示 -->
     <div class="col-7">
       <h3 class="text-center text-primary">点餐</h3>
       <table class="table text-center">
        <thead class="bg-primary text-white ">
          <tr>
            <th scope="col">尺寸</th>
            <th scope="col">价格(元)</th>
            <th scope="col">加入</th>
          </tr>
        </thead>
        <tbody v-for="(item,index) in items" :key="index">
          <tr>
             <td colspan="3">{{item.name}}</td>
          </tr>
          <tr>
             <td colspan="3">{{item.description}}</td>
          </tr>
          <tr v-for="(item1,index1) in item.options" :key="index1">
            <td>{{item1.size}}</td>
            <td>{{item1.price}}</td>
            <td><button class="btn btn-success" @click="addToBasket(item,item1)">+</button></td>
          </tr>
        </tbody>
      </table>
     </div>
     <!-- 右购物车 -->
     <div class="col-5 text-center">
        <!-- 商品的数量 + 种类 +价格  -->
        <h3 class="text-primary">购物车</h3>
        <table class="table text-center">
        <thead class="bg-primary text-white ">
          <tr>
            <th scope="col">数量</th>
            <th scope="col">种类</th>
            <th scope="col">价格</th>
          </tr>
        </thead>
        <template v-if="newItems.length>0">
        <tbody v-for="(item,index) in newItems" :key="index">
           <tr>
            <td>
              <button class="btn btn-primary" @click="reduce(item,index)">-</button>
              <input class="input" type="number" v-model.number="item.quantity">
              <button class="btn btn-primary" @click="add(item)">+</button>
            </td>
            <td>{{item.name}}->{{item.size}}</td>
            <td>{{item.price*item.quantity}}</td>
          </tr>
        </tbody>
         <tr>
            <td></td>
            <td colspan="2" class="text-info">商品总件数：<span class="strong">{{totalNum}}</span></td>
          </tr>
          <tr>
            <td></td>
            <td colspan="2" class="text-info">商品总价格：<span class="strong">{{totalPrice}}</span></td>
          </tr>
        </template>
        <template v-else>
          <tr>
            <td colspan="3"><h3 class="text-danger ">此购物车空空如也~</h3></td>
          </tr>
        </template>
      </table>
     </div> 
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Meun',
  data () {
    return {
     items: {},
     newItems:[]
    }
  },
  mounted(){
    axios.get('./menu-lty.json')
    .then(res=>{
      this.items=res.data
    })
  },
  methods:{
    addToBasket(item,options){
      var result = this.newItems.filter((item1)=>{
        return item.name == item1.name && options.size == item1.size
      })
      if(result != null && result.length>0){
        result[0].quantity++
      }else{
        this.newItems.push({
        name:item.name,
        size:options.size,
        quantity:1,
        price:options.price
        })
      }
    },
    reduce(item,index){
      if(item.quantity > 1){
        item.quantity--
      }else{
        this.newItems.splice(index,1)
      }
    },
    add(item){
      item.quantity++
    }
  },
  computed:{
    totalNum(){
      return this.newItems.length
    },
    totalPrice(){
      return this.newItems.reduce((per,cur)=>{
         return per+cur.quantity*cur.price
      },0)
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .input{width: 50px;text-align: center;}
  .btn{width: 30px;height: 30px;padding: 0;} 
</style>
