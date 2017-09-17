<template>
  <div class="columnbox">
      <!-- nav -->
      <Vnavbar :navs='column_navs' ></Vnavbar>
      <!-- homelist -->
      <!-- <Vcolumnlist></Vcolumnlist> -->
      
  </div>
</template>
<script>
import Vnavbar from '../../components/Vnavbar'
// import Vcolumnlist from './VcolumnList'
// import $ from 'jquery'

  import {mapGetters} from 'vuex'
  import {setCookie,getCookie} from '../../assets/config/cookie.js'

  export default{
    name:'zhuanlan',
    data(){
      return{
        columnsArticals:[],//保存文章
        len:'',//记录滚动条离底部的距离
      }
    },
    methods:{
      // scrolTop() {
      //           let scrolled = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      //           if (scrolled > 200) {
      //             $('#app .headerbox').css('top',-100);
      //             $('.container .view-nav').css('top',0);
      //           }else{
      //             $('#app .headerbox').css('top',0);
      //             $('.container .view-nav').css('top','5.1rem');
      //           }

      //           //滚动条离底部的距离
      //           this.len=document.body.scrollHeight-document.body.scrollTop-window.screen.height;
      //           if(this.len<20 && this.len>10){
      //             // var id=sessionStorage.getItem('id');
      //             var d=document.body.scrollHeight-50;

      //             $(window).scrollTop(d);//成功后将获得的评论信息并入原先的comments
      //              var arr1=this.columnsArticals;
      //             this.columnsArticals=arr1.concat(arr1);

      //           }
      //         }
    },
    computed:{
      ...mapGetters({
        column_navs:'getColumn_nav',
      })
    },
    components:{
      Vnavbar,
    },
    // mounted() {
    //   this.$nextTick(function () {
    //     window.addEventListener('scroll', this.scrolTop);
    //   });
    // },
  }
</script>
<style scoped>
.columnbox{
  display: relative;
  margin-top: 2px;
}

</style>


<!-- <template>
  <div class="newsBox" v-scroll="loadMore()">
    <ul id="news">
      <li class="news__item" v-for="(news, index) in newslist">
        {{index}}-{{news.title}}
      </li>


    </ul>

    <button @click ='clickHandler'>hhhhahahahahah</button>
  </div>
</template>
<style>
  .news__item {
    height: 80px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
  }
</style>
<script>
import $ from 'jquery'

  export default{
    data(){
      return{
        index:10,
        scrollDisable:false,
        newslist: [
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},

        ]
      }
    },
    methods: {
      clickHandler(){

       var a = document.getElementById('news');
       console.log(a);


      },
      loadMore() {
        
        var b = document.getElementById('news');
        // console.log(b,'获取dom');

        this.scrollDisable = true;
        let content = '';
        for(let i=0; i< 10; i++) {
          content += '<li class="news__item">'+(++this.index)+'、hello world</li>'    
        }
        // 
        // var a = $('#news');
        
        // var oldContent = b.innerHTML;
        // b.innerHTML = oldContent+content;

        //
        this.scrollDisable = false;

      }
    },
    directives: {
      scroll: {
        bind: function (el, binding){
          window.addEventListener('scroll', function(){
            if(document.body.scrollTop + window.innerHeight >= el.clientHeight) {
              console.log('load data');
              //       
              if(!this.scrollDisable) {
                // 
                this.loadMore();
                // el.loadMore;  
              } 
            }
          })
        }
      }
    },
    

}

</script>
 -->