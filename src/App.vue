<template>
  <div id="app" class=" ">
    <topNav></topNav>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{
    'topNav':Header
  }
}

</script>

<style scoped>

</style>
