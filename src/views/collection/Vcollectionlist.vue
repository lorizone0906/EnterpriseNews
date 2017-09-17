<template>
	<div class="collection-list-box">
		<header class="list-header">
			<nav role="navigation" class="list-nav">
				<ul class="nav-list left">
                    <!-- /collections/recommended?sort=popular -->
					<li :class="['nav-item' , onShow?'':'active']" @click.stop="searchOne(false)"><a href="#">热门</a></li>
                    <!-- /collections/recommended?sort=newest -->
					<li :class="['nav-item', onShow?'active':'']" @click.stop="searchOne(true)"><a href="#">最新</a></li>

				</ul>
			</nav>
		</header>

		<!--  -->
		<ul class="collection-list">
	  	<!--  -->
	    <VcollectionItem v-for='(collection,index) in collections' :collection='collection' :key='index'></VcollectionItem>
	  </ul>
	</div>
</template>
<script type="text/javascript">
	import {mapGetters} from 'vuex'
	import VcollectionItem from './VcollectionItem.vue'

	export default {
		name:'VCollectionList',
		data(){
			return{
				list:[],
                onShow:true,
			}
		},
		computed:{
            ...mapGetters({
              collections:'getCollections',
            }),
        },
		components:{
			VcollectionItem
		},
        methods:{
            searchOne(temp) {
                this.onShow = temp;
              // let _this=ev.currentTarget;
              // $(_this).addClass('active').siblings().removeClass('active');

              // 


            },
        },
		mounted(){

		}

	}
</script>
<style type="text/css" scoped>

.collection-list-box{
    width: 100%;
}
.collection-list-box {
    margin-right: 2.17rem;
    background-color: #fff;
}
.shadow {
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
}
.list-header {
    padding: .13rem .1rem;
    border-bottom: 1px solid hsla(0,0%,59%,.1);
}
.list-header .nav-list {
	display: flex;	
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    line-height: 1;
}
.list-header .left .nav-item {
    padding: 0 .12rem;
    font-size: .12rem;
    border-right: 1px solid hsla(0,0%,59%,.2);
}
.nav-item {
    position: relative;
    cursor: pointer;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
.list-header .nav-list .nav-item.active a, .list-header .nav-list .nav-item a:hover {
    color: #007fff;
}
a {
    text-decoration: none;
    cursor: pointer;
    color: #909090;
}
.collection-list{
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