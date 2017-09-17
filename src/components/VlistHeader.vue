<template>
	<header class="list-header">
		<span class="list-title">原创文章</span>
		<nav role="navigation" class="list-nav">
			<ul class="nav-list left">
                <!-- /zhuanlan/all?sort=popular -->
				<li :class="['nav-item' , onShow==0?'active':'']" @click.stop="searchOne(0)"><a href="#">热门</a></li>
                <!-- /zhuanlan/all?sort=newest -->
				<li :class="['nav-item' , onShow==1?'active':'']" @click.stop="searchOne(1)"><a href="#">最新</a></li>
                <!-- /zhuanlan/all?sort=comment -->
				<li :class="['nav-item' , onShow==2?'active':'']" @click.stop="searchOne(2)"><a href="#">评论</a></li>
			</ul>
		</nav>
	</header>
</template>
<script type="text/javascript">
	export default {
		name:'VlistHeader',
        data(){
            return{
                onShow:1,
            }
        },
        methods: {
            searchOne(ev) {
              // let _this=ev.currentTarget;
              // $(_this).addClass('on').siblings().removeClass('on');
              this.onShow = ev;
            }
        }
	}
	
</script>
<style type="text/css" scoped>

.list-nav{
     display: flex;  
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.list-header {
    display: flex; 
    justify-content: space-between;
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
.list-header .nav-item {
    padding: 0.08rem;
    font-size: 0.12rem;
    border-right: 1px solid hsla(0,0%,59%,.2);
}
.nav-item {
    position: relative;
    cursor: pointer;
}

li {
    list-style: none;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}

a {
    text-decoration: none;
    cursor: pointer;
    color: #909090;
}
a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}

ul {
    padding: 0;
    margin: 0;
}
.list-header .nav-list .nav-item.active a, .list-header .nav-list .nav-item a:hover {
    color: #007fff;
}
/*.list-header{
	
    align-items: center;
    padding: 0.13rem 0.1rem;
    border-bottom: 1px solid hsla(0,0%,59%,.1);
}*/
.column-entry-list .list-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0.13rem 0.2rem;
}
.column-entry-list .list-title {
    font-size: 0.13rem;
    color: #000;
}
</style>