<template>
  <div id="app">
    <!-- 头部 -->
    <head-top></head-top>

    <div class="container">
        <transition name="router-fade" mode="out-in">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        </transition>
        <transition name="router-fade" mode="out-in">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </transition>
    </div>
      
  </div>
</template>

<script>

import './style/style.css'
import {setCookie,getCookie} from './assets/config/cookie.js'
import headTop from './components/header/Vhead'

export default {
  name: 'Vapp',
  data(){
    return{
      timer:null,
      scroll:false,
      scrollTimer:null
    }
  },
  components:{
      headTop
  },
  methods:{
    scrolltoTop:()=>{
      if(document.documentElement.scrollTop){
        var scrollTop=document.documentElement.scrollTop
        var step=scrollTop/30;
        var now=scrollTop-step;
        var i=0;
        var time=setInterval(function(){
          i++;
          if(i>32){
            clearInterval(time)
          }
          document.documentElement.scrollTop=now;
          scrollTop=document.documentElement.scrollTop
          now=scrollTop-step;
        },10)
      }else if(document.body.scrollTop){
        var scrollTop=document.body.scrollTop
        var step=scrollTop/30;
        var now=scrollTop-step;
        var i=0;
        var time=setInterval(function(){
          i++;
          if(i>32){
            clearInterval(time)
          }
          document.body.scrollTop=now;
          scrollTop=document.body.scrollTop
          now=scrollTop-step;
        },10)
      }
      
    },
  },
   created(){
      // var self=this;
      // var a=1
      // window.onload=()=>{

      // }
      // window.onresize=()=>{
      //   if(self.timer){
      //     clearTimeout(self.timer)//函数节流
      //   }
      //   self.timer=setTimeout(function(){
      
      // }
      // window.onscroll=()=>{
        
      //    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      //       if(scrollTop>10){
      //         this.scroll=true;
      //       }else{
      //         this.scroll=false;
      //       }
        
      // }
   },
   mounted(){
        this.$store.state.show = this.$route.matched[0].path;
        /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
        if(getCookie('username')){
            
            this.$store.state.islogin = true;
        }
   }
}
</script>

<style>
.container {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 960px;
}
article, aside, details, figcaption, figure, footer, header, main, menu, nav, section, summary {
    display: block;
}
.router-fade-enter-active, .router-fade-leave-active {
      transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
      opacity: 0;
  }
.container:after {
    display: table;
    content: "";
    clear: both;
}

</style>
