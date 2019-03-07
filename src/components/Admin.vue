<template>
  <div class="admin container row">
    <div class="col-7">
      <Newpizza></Newpizza>
      
    </div>
    <div class="col-5">
      <NewMenu></NewMenu>
    </div>
  </div>
</template>

<script>
import Newpizza from '@/components/Newpizza'
import NewMenu from '@/components/NewMenu'
export default {
  name: 'Admin',
  data () {
    return {}
  }, 
  components:{
    'Newpizza':Newpizza,
      NewMenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.admin{
  margin: 0 auto;
}
</style>
