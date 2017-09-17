<template>
	<div class="headerbox">
		<nav class="clearfix">
			<div class="logo fl">
				<img src="//gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="掘金" class="logo-img">
			</div>
			<div class="nav-list fl" id="nav-list" @click='showRouters()'>
				<span class="drapdown">{{details}}</span>
				<i></i>
				<ul class="phone-hide" v-show="isShowRouters">
					<li v-for='(ele,index) in navItem'>{{getCurrentRoute}}
						<router-link :to='ele.url' :class='{isActive :isActive ===index ? true : false}' @click.native='routerClick(ele.title,index)'>
							{{ele.title}}
						</router-link>
					</li>
				</ul>
			</div>

			<!-- 未登录 -->
			<div class="nav-item fr" v-if='!isLogin'>
				<span class="login" @click='login'>登录</span>·
				<span class="register" @click='register'>注册</span>
			</div>


			<!-- 已登录-通知 -->
			<div class="nav-item customNavitem notification router-link-exact-active route-active active" v-if="isLogin">
				<i class="icon ion-android-notifications"></i>
				<!---->
			</div>
			<!-- 已登录-头像 -->
			<div class="nav-item customNavitem menu" @click='showSetting()' v-if="isLogin">
				<div class="avatar" style="background-image: url(&quot;https://user-gold-cdn.xitu.io/2017/7/22/ef70bad32da718a1a6be5f7cff5c0783?imageView2/1/w/100/h/100/q/85/interlace/1&quot;);">
					<!-- <img src="https://user-gold-cdn.xitu.io/2017/7/22/ef70bad32da718a1a6be5f7cff5c0783?imageView2/1/w/100/h/100/q/85/interlace/1" class="hidden"> -->
				</div>

				<!-- Setting -->
				<ul class="nav-menu user-dropdown-list" v-show="isShowSetting">
					<!---->
					<div class="nav-menu-item-group">
						<li class="nav-menu-item">
							<a href="#"><i class="fengwei fw-person"></i>我的主页</a>
						</li>
						<li class="nav-menu-item">
							<a href="#"><i class="fengwei fw-like"></i>我喜欢的</a>
						</li>
						<li class="nav-menu-item">
							<router-link to='/mycollection' @click.native='routerClick'>
								<i class="fengwei fw-collection"></i>我的收藏集
							</router-link>
						</li>
						<!---->
						<li class="nav-menu-item">
							<a href="#"><i class="fengwei fw-tag"></i>标签管理</a>
						</li>
					</div>
					<div class="nav-menu-item-group">
						<li class="nav-menu-item route-active">
							<a href="#"><i class="fengwei fw-setting"></i>设置</a>
						</li>
						<li class="nav-menu-item more">
							<a><i class="fengwei fw-info"></i>关于<i class="ion-chevron-right more-icon"></i></a>
							<!-- <ul class="nav-menu more-dropdown-list">
								<div class="nav-menu-item-group">
									<li class="nav-menu-item">
										<a href="/app" target="_blank">下载应用</a>
									</li>
									<li class="nav-menu-item">
										<a href="/about" target="_blank">关于</a>
									</li>
									<li class="nav-menu-item">
										<a href="https://xitu.io/jobs" target="_blank">加入我们</a>
									</li>
									<li class="nav-menu-item">
										<a href="https://github.com/xitu/gold-miner" rel="nofollow noopener noreferrer" target="_blank">翻译计划</a>
									</li>
									<li class="nav-menu-item">
										<a href="https://bd.juejin.im?utm_campaign=bd&amp;utm_source=web&amp;utm_medium=nav" target="_blank">合作伙伴</a>
									</li>
								</div>
							</ul> -->
						</li>
					</div>
					<div class="nav-menu-item-group">
						<li @click="logout" class="nav-menu-item">
							<a><i class="fengwei fw-logout"></i>登出</a>
						</li>
					</div>
				</ul>
			</div>

		</nav>

		<!--  -->
		<Login :login='isLoginShow' :isFocuse='isFoc' @close='close' @toRegister='toRegister'></Login>
	    <!-- <Login :login='isshade' :isFocuse='isFoc' @close='close' @toRegister='toRegister'></Login> -->
	    <!-- <Register :register='isshade2' :isFocuse='isFoc' @close='close2' @toLogin='toLogin'></Register> -->
	    <Register :register='isregistershow' :isFocuse='isFoc' @close='close2' @toLogin='toLogin'></Register>

	</div>
	
</template>

<script type="text/javascript">

	import Login from '../login'
	import Register from '../register' 
	import {mapActions,mapGetters} from 'vuex'

	export default {
		components:{
			Login,
      		Register
      	},
		name:'Vhead',
		data() {
			return {
				isShowRouters:false,
				isActive: 0,
				detail: '首页',
				isShowSetting:false,
				isLogged:false,
				isshade2: false,
				isshade: false,
				isFoc: true,
			}
		},
		methods: {
			...mapActions(
   				['logout']
   			),
			// 登录弹框
			login() {
				// this.isshade = true
				this.$store.state.isloginshow = true;
			},
			register() {
				this.$store.state.isregistershow = true;
				// this.isshade2 = true
			},
			// 关闭登录弹框
			close() {
				this.$store.state.isloginshow = false;
				// this.isshade = false
			},
			close2() {
				this.$store.state.isregistershow = false;
				// this.isshade2 = false
			},
			// 登录注册切换
			toRegister() {
				this.isshade = false
				this.isshade2 = true
			},
			// 传到
			toLogin() {
				this.isshade = true
				this.isshade2 = false
			},

			showRouters() {
				this.isShowRouters = !this.isShowRouters;
			},
			showSetting() {
				this.isShowSetting = !this.isShowSetting;
			},
			routerClick(title, index) {
				if (index == 6) {
					this.$store.state.show = '/mycollection';
				}
				console.log(index)
				this.detail = title;
				this.isActive = index;
				this.$store.state.show = this.$route.matched[0].path;
			},
			
			

		},
		computed: {

			//检测注册成功后显示登录框
			...mapGetters({
				isLogin:'getIsLogin', 
				ishide:'getIsHide',
		        isLoginShow:'getIsloginShow',
		        isregistershow:'getIsregistershow',
		        column_navs:'getColumn_nav',
		      }),

			navItem() {
				return this.$store.state.navItem
			},
			details() {
				return this.detail
			},
			getCurrentRoute(){

				var currentR = this.$store.state.show;
				console.log(currentR,this.isActive);
				switch (currentR) {
					case '/collection':
						this.detail = '收藏集';
						this.isActive = 2;
						break;
					case '/home':
						this.detail = '首页';
						this.isActive = 0;
						break;
					case '/column':
						this.detail = '专栏';
						this.isActive = 1;
						break;
					case '/':
						this.detail = '首页';
						this.isActive = 0;
						break;
					case '':
						this.detail = '首页';
						this.isActive = 0;
						break;
					default:
						this.detail = '首页';
						this.isActive = -1;
						break;
				}
			},

		},
		created(){
		},
	}
</script>

<style scoped>
	body {
		background: #f4f5f5 !important;
		font-family: -apple-system, PingFang SC, Hiragino Sans GB, Arial, Microsoft YaHei, Helvetica Neue, sans-serif;
	}
	
	ul {
		margin: 0;
		padding: 0;
	}
	
	button:focus {
		outline: none;
	}
	.headerbox{
		position: fixed;
		top: 0;
		    right: 0px;
    left: 0px;
		z-index: 1000;
	}
	nav {
		width: 100%;
		height: 0.6rem;
		background: #fff;

	}
	
	nav .logo {
		margin: 0.11rem 0;
	}
	
	nav img {
		margin-left: 0.08rem;
		vertical-align: top;
		margin-top: -0.01rem;
		width: 0.98rem;
		height: 0.38rem;
	}
	
	.nav-item {
		width: 0.8rem;
		height: 0.4rem;
		font-size: 0.14rem;
		padding: 0.20rem 0.03rem 0.01rem 0.23rem;
		color: #007fff;
	}
	
	.nav-item span {
		cursor: pointer;
		margin-right: 0.05rem;
		font-weight: 400;
		text-decoration: none;
	}
	
	.nav-list {
		width: 1rem;
		height: 0.4rem;
		font-size: 0.14rem;
		color: #007fff;
		padding: 0.21rem 0.20rem 0.01rem 0.23rem;
		position: relative;
	}
	
	.nav-list span {
		margin-right: 0.06rem;
	}
	
	.nav-list i {
		position: absolute;
		top: 0.26rem;
		border: 0.05rem solid transparent;
		border-top: 0.06rem solid #007fff;
	}
	
	.phone-hide {
		position: absolute;
		top: 0.63rem;
		left: 0.02rem;
		background: #fff;
		margin: 0;
		padding: 0;
		box-shadow: 0 0 0.01rem rgba(0, 0, 0, 0.4);
		border-radius: 2%;
	}
	
	.phone-hide li {
		width: 0.9rem;
		line-height: 0.48rem;
		height: 0.48rem;
		font-size: 0.14rem;
		text-align: center;
	}
	
	.phone-hide li a {
		text-decoration: none;
		color: #71777c;
	}
	
	.phone-hide .isActive {
		color: #007fff;
	}
	.ion-android-notifications:before {
    content: "\f39b";
        display: inline-block;
    font-family: "Ionicons";
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    text-rendering: auto;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

	/*头像&通知*/
.avatar {
    width: .25rem;
    height: .25rem;
    border-radius: 50%;
}
.avatar{
    display: inline-block;
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
}
img{
	 width: 50%;
	 height: 50%;
}
.clearbox{
	float: left;
}
	.notification {
	    position: relative;
	    display: inline-block;
	}
	.nav-item .menu {
	    position: relative;
	    float: right;
	}
	.customNavitem{
		width: 0.2rem;
		height: 0.2rem;
	}
	.menu{
		display: inline-block;
		margin-right: .10rem;	
	}
	.nav-item:last-child {
	    padding-right: 0;
	}
	.nav-item.active>.icon, .nav-item.active>a {
    color: #007fff;
}

.nav-item .icon {
    font-size: 0.2rem;
    color: #71777c;
}
i, cite, em, var, address, dfn {
    font-style: italic;

}
	/*设置列表*/
	.nav-menu.user-dropdown-list {
	    width: 1.3rem;
	    right: 0;
	    left: auto;
	    -webkit-transform: translateX(0);
	    transform: translateX(0);
	}
	.nav-menu {
	    position: absolute;
	    width: 1.1rem;
	    left: 50%;
	    top: 100%;
	    -webkit-transform: translateX(-50%);
	    transform: translateX(-50%);
	    margin: 0;
	    padding: 0;
	    list-style: none;
	    background-color: #fff;
	    box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
	    border: 1px solid hsla(217,5%,71%,.45);
	    border-radius: 4px;
	    font-size: 0.12rem;
	}
	.nav-menu.user-dropdown-list .nav-menu-item-group:not(:last-child) {
	    border-bottom: 1px solid rgba(0,0,0,.04);
	}
	.nav-menu .nav-menu-item-group {
	    padding: 0.1rem 0;
	}
	.nav-menu .nav-menu-item {
	    font-size: 0.13rem;
	    cursor: pointer;
	}
	li {
	    list-style: none;
	}
	li {
	    display: list-item;
	    text-align: -webkit-match-parent;
	}
	.nav-menu .nav-menu-item>a {
	    padding: .05rem 0.1rem;
	}
	.nav-menu-item>a {
	    display: block;
	    color: #71777c;
	}
	.fengwei {
	    display: inline-block;
	    width: 0.1em;
	    height: .1em;
	    margin-right: .08rem;
	    font-size: .12em;
	    vertical-align: middle;
	    color: #b2bac2;
	}


</style>








