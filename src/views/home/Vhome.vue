<template>
    <div>
        <!-- nav -->
        <Vnavbar :navs='home_navs'></Vnavbar>{{changeRoute}}
    </div>
</template>

<style>
    ul{padding: 0;}
    ul li{list-style: none;}
</style>

<script>
import Vnavbar from '../../components/Vnavbar'
// import Vhomelist from '../column/VcolumnList'

import {mapGetters} from 'vuex'
import {setCookie,getCookie} from '../../assets/config/cookie.js'

    export default{
        data(){
            return{
                list: ''
            }
        },
        components:{
            Vnavbar,
        },
        computed:{
            ...mapGetters({
              home_navs:'getHome_navs',
            }),
            changeRoute(){
                if (!this.$store.state.islogin) {
                    this.$router.push('/');
                }
            }
        },
        mounted(){
          /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
            if(getCookie('username')){
                // this.$router.push('/home')
            }else{
                this.$router.replace('/');
            }
        },
       
    }

</script>