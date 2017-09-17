<template>
	<div id="app">
		<transition name="introduction">
         <router-view></router-view>
        </transition>

		<!-- body -->
		<section class="auth-section">{{changeRoute}}
			<header>掘金 · 一个帮助开发者成长的社区，立即加入：</header>
			<div class="auth-list">
				<ul>
					<li class="weibo">
						<a href="https://api.weibo.com/oauth2/authorize?client_id=162709412&response_type=code&redirect_uri=https%3a%2f%2fgold.xitu.io%2foauth%2flogin&state=weibo" target="_blank">
							<button class="weibo">
								<img src="http://gold-cdn.xitu.io/v3/static/img/weibo.6d23ea3.svg">
								使用微博登录
							</button>
						</a>
					</li>
					<li class="wechat">
						<a href="https://open.weixin.qq.com/connect/qrconnect?appid=wx1f78f78832fc2c16&redirect_uri=https%3a%2f%2fgold.xitu.io%2foauth%2flogin&response_type=code&scope=snsapi_login&state=wechat#wechat_redirect" target="_blank">
							<button class="wechat">
								<img src="http://gold-cdn.xitu.io/v3/static/img/wechat.6f45976.svg">
								使用微信登录
							</button>
						</a>
					</li>
					<li class="github">
						<a href="https://github.com/login?client_id=b9c43dc2e807f3b31c38&return_to=%2Flogin%2Foauth%2Fauthorize%3Fclient_id%3Db9c43dc2e807f3b31c38%26redirect_uri%3Dhttp%253A%252F%252Fgold.xitu.io%252Foauth%252Flogin%26state%3Dgithub" target="_blank">
							<button class="github">
								<img src="http://gold-cdn.xitu.io/v3/static/img/github.27724f9.svg">
								使用Github登录
							</button>
						</a>
					</li>
					<li class="default">
						<button class="">
							邮箱 / 手机注册
						</button>
					</li>
				</ul>
			</div>
			<div class="user-company-box">
				<p>这些大厂的工程师也在用掘金</p>
				<img src="http://gold-cdn.xitu.io/v3/static/img/user-company.c6a25da.png">
			</div>
		</section>
		<section class="follow-section">
			<header class="header">关注我们</header>
			<ul class="account-list">
				<li><a href="http://weibo.com/xitucircle"><img src="http://gold-cdn.xitu.io/v3/static/img/weibo.0cd39f5.png" alt=""></a></li>
				
				<li><img src="http://gold-cdn.xitu.io/v3/static/img/wechat.ce329e6.png" alt=""></li>
				
				<li><a href="https://zhuanlan.zhihu.com/xitucircle"><img src="http://gold-cdn.xitu.io/v3/static/img/zhuanlan.18265c6.png" alt=""></a></li>
				
				<li><a href="http://www.jianshu.com/users/5fc9b6410f4f/latest_articles"><img src="http://gold-cdn.xitu.io/v3/static/img/jianshu.80c1fdd.png" alt=""></a></li>
			</ul>
			<ul class="more-list">
				<li><a href="https://juejin.im/about" target="_blank">关于&nbsp&nbsp·</a></li>
				<li><a href="https://xitu.io/jobs" target="_blank">招聘&nbsp&nbsp·</a></li>
				<li><a href="https://bd.juejin.im?utm_campaign=bd&utm_source=web&utm_medium=more" target="_blank">商务合作</a></li>
			</ul>
		</section>
	</div>
</template>

<script>
import {setCookie,getCookie} from '../../assets/config/cookie.js'
	export default {
		name: 'Vunloghome',
		components:{
			
		},
		created(){
			
        },
        mounted(){

        },
        computed:{

        	changeRoute() {
    			if (this.$store.state.islogin) {
                this.$router.push('/home');
            	}
        	}
        	
        },
	}
</script>

<style scoped>

	.auth-section{
		margin:0.21rem;
		padding:0.15rem;
		background: #fff;
	}
	.auth-section header{
		font-size: 0.14rem;
		color: #333;
		line-height: 0.16rem;
		margin-bottom: 0.13rem;
		font-weight: 700;
	}
	.auth-list{
		width: 2.14rem;
		margin:0 auto;
	}
	.auth-list li{
		width: 100%;
		height: 0.44rem;
		margin-bottom: 0.06rem;
		padding-left: 0.35rem;
		border-radius: 4%;
	}
	.auth-list li a{
		color: #fff;
	}
	.auth-list button{
		border:none;
		height: 0.44rem;
	}
	.weibo{
		background: #d21a1a;
	}
	.wechat{
		background: #37c700
	}
	.github{
		background: #4c4c4c
	}
	.auth-list .default{
		color: #007fff;
		width:100%;
		height: 0.38rem;
		background: #fff;
		/*box-shadow: 0px 1px 5px rgba(0,0,0,0.3);*/
		box-shadow: inset 0 -0.02rem 0 0 rgba(0,0,0,.05);
		border: 1px solid #eaeaea;
	}
	.auth-list .default button{
		background: #fff;height: 0.34rem
	}
	.user-company-box{
		width: 100%;
		text-align: center;
		color:#909090;
		font-size: 0.12rem;
		margin-top: 0.24rem;
	}
	.user-company-box img{
		width: 170px;
	}
	.follow-section,.follow-section a{
		color: #909090;
		font-size: 0.14rem;text-decoration: none;
	}
	.follow-section header{
		text-align: center;
		color: #909090;
		font-size: 0.12rem;
	}
	.follow-section ul{
		display: flex;
		-webkit-box-pack: center;
		justify-content: center;
		padding: 0.1rem 0;
	}
	.follow-section li{
		margin:0 0.06rem;
	}
	.follow-section li img{
		width: 0.24rem;height: 0.24rem
	}
</style>