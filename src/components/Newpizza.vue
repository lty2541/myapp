<template>
  <div class="newpizza">
     <h3 class="text-center text-warning">添加新Pizza</h3>
     <form>
        <div class="form-group">
            <label for="input1">品种：</label>
            <input type="text" v-model="newpizza.name" class="form-control" id="input1"  placeholder="给这个pizza起个名字吧...">
        </div>
        <div class="form-group">
            <label class="label" for="input2">商品描述:</label><br/>
            <textarea id="input2" v-model="newpizza.description" placeholder="请输入商品的相关描述..." cols="85" rows="2"></textarea>
        </div>
        <h3>尺寸&价格</h3>
        <div class="form-group1">
            <div class="form-group float">
                <span class="span"> 尺寸：</span>   
                <select class="form-control" v-model="newpizza.size1" id="input3">
                <option>5</option>
                <option>7</option>
                <option>9</option>
                <option>11</option>
                <option>14</option>
                </select>
            </div>
            <div class="form-group">
                <label for="input4">价格：</label>
                <input type="text" v-model="newpizza.price1" class="form-control" id="input4">
            </div>
        </div>
        <div class="form-group1">
            <div class="form-group">
                <span class="span"> 尺寸：</span>   
                <select class="form-control" v-model="newpizza.size2" id="input5">
                <option>5</option>
                <option>7</option>
                <option>9</option>
                <option>11</option>
                <option>14</option>
                </select>
            </div>
            <div class="form-group">
                <label for="input6">价格：</label>
                <input type="text"  v-model="newpizza.price2"  class="form-control" id="input6">
            </div>
        </div>
        <button class="btn btn-primary btn-block" @click.prevent="addPizza">添加pizza</button>
    </form> 
  </div>  
</template>

<script>
import axios from 'axios'
export default {
    name:'Newpazzi',
    data(){
        return{
            newpizza:{}
        }
    },
    methods:{
     addPizza(){
       var data={
          name:this.newpizza.name,
          description:this.newpizza.description,
          options:[
            {
              size:this.newpizza.size1,
              price:this.newpizza.price1
            },
            {
              size:this.newpizza.size2,
              price:this.newpizza.price2
            },
          ]
        }
       axios.post('./menu-lty.json',data)
       .then(res=>{
          console.log(res.data) 
       })
       this.$router.push('/menu')
    }
   } 

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#input1{
    width: 82%;
}
/* .form-group1{
    float: left;
    width: 100%;
}
.form-group1 .form-group{
    float: left;
} */

</style>
