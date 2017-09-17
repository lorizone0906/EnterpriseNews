<template>
	<div class="columnlist">
	   <!--  -->
       <VlistHeader></VlistHeader>
       <!--  -->
      <ul class="column-entry-list">
        <VcolumnItem v-for='(column,index) in columns' :column='column' :key='index'></VcolumnItem>
      </ul>
    </div>
</template>

<script type="text/javascript">
    import {mapActions,mapGetters} from 'vuex'
	  import VcolumnItem from './VcolumnItem'
    import VlistHeader from '../../components/VlistHeader'
    import $ from 'jquery'

	export default {
        data(){
            return{
                columnsArticals:[],//保存文章
                len:'',//记录滚动条离底部的距离
            }
        },
    		components:{
                VlistHeader,
    			VcolumnItem,
    		},
        computed:{
            ...mapGetters({
              columns:'getColumns',
            }),

        },
        created(){
            // console.log("columns ,message");
            

        },
        methods: {

            // 
            ...mapActions(
              ['getNewArticals']
            ),

            // 
            scrolTop() {
                let scrolled = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                // console.log(scrolled);
                if (scrolled > 200) {
                  $('#app .headerbox').css('top',-60);
                  $('.nav-list1').css('top',0);
                }else{
                  $('#app .headerbox').css('top',0);
                  $('.nav-list1').css('top','.61rem');
                }

                //滚动条离底部的距离
                this.len=document.body.scrollHeight-document.body.scrollTop-window.screen.height;
                if(this.len<20 && this.len>10){
                  // var id=sessionStorage.getItem('id');
                  var d=document.body.scrollHeight-50;

                  $(window).scrollTop(d);//成功后将获得的评论信息并入原先的comments
                  // 
                  this.getNewArticals();
                }
              }
            },
          mounted() {
            // 
            this.getNewArticals();
            // 
            this.$nextTick(function () {
              window.addEventListener('scroll', this.scrolTop);
            });
          },
  }
</script>

<style type="text/css" scoped>

.column-entry-list{
    padding: .25rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}


</style>