<template>
    <div class="view-nav">
      <ul class="nav-list">
        <!-- left_navs是通过mapgetters来的数据，在index.js中 -->
        <!-- <li v-for="(ele,index) of navs" class="nav-item" :key="index">
        <router-link :to="mainRoute+ele.url">{{ele.title}}</router-link>
      </li> -->
        <li :class="{bg:getRoute===left_nav_value.url}" v-for="left_nav_value in navs">
            <router-link :to="mainRoute+left_nav_value.url" class="nav_a">{{left_nav_value.title}}</router-link>
        </li>
      </ul>
      
      <transition name="introduction">
       <router-view></router-view>
      </transition> 
    </div>
</template>

<script type="text/javascript">
    export default {
        
        data(){
            return{
                 mainRoute:this.$route.matched[0].path,
            }
        },
        props:{
            navs:Array,
        },
        methods:{

        },
        computed:{
            getRoute(){
                
                return '/'+this.$route.params.id;
            }
        },
        created(){
        }
            
    }
</script>

<style type="text/css" scoped>
.view-nav {
    width: 100%;
    height: 0.4rem;
    z-index: 100;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    transition: all .2s;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
}
article, aside, details, figcaption, figure, footer, header, main, menu, nav, section, summary {
    display: block;
}

.view-nav .nav-list {
    width: auto;
    overflow-x: scroll;
}
.view-nav .nav-list, .view-nav .nav-list .nav-item {
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.view-nav .nav-list {
    position: fixed;
    top: .61rem;
    margin: auto;
    line-height: 1;
    margin-top: 3px;
}

.view-nav .nav-list .nav-item:first-child {
    padding: 0 0.2rem 0 0;
}
.view-nav .nav-list .nav-item {
    flex-shrink: 0;
    font-size: 0.14rem;
    padding: 0 0.2rem;
}
.nav-item {
  height: 100%;
    position: relative;
    cursor: pointer;
    top:-0.04rem;
}
a{
  color: inherit;
}
.bg{color: #007fff; }
.nav_a{display: inline-block;padding: 0 0.15rem;}
 .nav-list .nav-item .router-link-active{
    color: #007fff;
  } 

</style>