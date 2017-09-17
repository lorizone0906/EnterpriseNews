<template>
  <div class="collectionbox">
      <!-- nav -->
      <Vnavbar :navs='collection_navs'></Vnavbar>
      <!-- homelist -->
      <!-- <Vcollectionlist></Vcollectionlist> -->
      
      <!-- <transition name="introduction">
       <router-view></router-view>
      </transition> --> 
  </div>
</template>

<script>

import {mapGetters} from 'vuex'
import {setCookie,getCookie} from '../../assets/config/cookie.js'
import Vnavbar from '../../components/Vnavbar'
// import Vcollectionlist from '../column/VcolumnList'

export default {
  name: 'vcollection',
  data () {
    return {
    }
  },
  components:{
    Vnavbar,
    
  },
  computed:{
    ...mapGetters({
        collection_navs:'getCollection_nav',
      })

  },
  mounted(){
          /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
            if(getCookie('username')){
                this.$router.push('/collection')
            }
        },
}
</script>

<style scoped>
.collectionbox{
  display: relative;
  margin-top: 2px;
}
</style>
