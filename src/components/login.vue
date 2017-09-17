<template>
	<div class="shade" v-show="isshade">
		<div class="auth-modal-box">
			<form class="auth-form">
				<div class="panfish">
					<p v-for='(ele, index) in this.$store.state.panfish'>
						<img :src="ele.url" :class="ele.class" v-show='index === imgIndex'>
					</p>
				</div>
				<p class="title clearfix">
					<label>登录</label>
					<i class="fa fa-times close fr" aria-hidden="true" @click='close1'></i>
				</p>
				<p>
					<input type="text" placeholder="请填写手机号或邮箱" id='loginPhoneOrEmail' v-focus="isFocus" @focus='focus1' :class="{focus : this.imgState.normal}" maxlength="64" @blur='blur1' v-model="info.account">

					<input type="password" placeholder="请输入密码" id="loginPassword" maxlength="64" :class="{focus : this.imgState.greeting}" @blur='blur2' v-model="info.password" @focus='focus2'>

					<input type="button" id="btn" value="登录" @click.prevent='userLogin(info)'>
				</p>
				<div class="prompt-box clearfix">
					<span class="no-accounts">没有账号？ </span>
					<a @click='toRegister1'>注册</a>
					<a class="clickable fr">忘记密码</a>
				</div>
				<div class="oauth-box">
					<span>第三方账号登录：</span>
					<i><img src="http://gold-cdn.xitu.io/v3/static/img/weibo.fa758eb.svg"/></i>
					<i><img src="http://gold-cdn.xitu.io/v3/static/img/wechat.e0ff124.svg"/></i>
					<i><img src="http://gold-cdn.xitu.io/v3/static/img/github.547dd8a.svg"/></i>
				</div>
			</form>
		</div>
		<div style="display: none;">
			{{showLogin}}
		</div>
	</div>

</template>

<script>

import {mapActions} from 'vuex'
import {setCookie,getCookie} from '../assets/config/cookie.js'

	export default {
		name: 'login',
		data() {
			return {
				info: {      // 用户输入的信息，调用 userLogin方法，把值传到后台进行验证
	    			account: '',
	    			password: ''
	    		},
				isFocus: true,
				username: '',
				passwd: '',
				//隐藏或显示登录框
				isshade: false,
				//三张图片对应三个变量
				imgState: {
					normal: false,
					greeting: false,
					blindfold: false,
				},
				imgIndex: 0,
			}
		},
		methods: {
			...mapActions(
				['userLogin']
			),

			clearState() {
				for(var ele in this.imgState) {
					this.imgState[ele] = false;
				}
			},
			focus1() {
				this.clearState()
				this.imgState.normal = true
				this.isFocus = true
				this.imgIndex = 1
			},
			focus2() {
				this.clearState()
				this.imgState.greeting = true
				this.imgIndex = 2

			},
			blur1() {
				this.isFocus = false
				this.clearState()
				this.imgIndex = 0;
				
			},
			blur2() {
				this.clearState()
				this.imgIndex = 0
			},
			close1() {
				this.username = ''
				this.passwd = ''
				this.$emit('close')
			},
			toRegister1() {
				this.$emit('toRegister')
			},

			//登录
			judge() {
				// if(this.username == '') {
				// 	alert('请填写手机号或邮箱');
				// 	this.imgState.normal = true
				// 	this.imgIndex = 1
				// } else if(this.passwd == '') {
				// 	alert('请输入密码')
				// } else {
					// if(this.username == "" || this.password == ""){
	    //                 alert("请输入用户名或密码")
	    //             }else{
	    //                 let data = {'username':this.username,'password':this.password}
	    //                 /*接口请求*/
	    //                 this.$http.post('http://localhost/vueapi/index.php/Home/user/login',data).then((res)=>{
	    //                     console.log(res)
	    //                  /*接口的传值是(-1,该用户不存在),(0,密码错误)，同时还会检测管理员账号的值*/
	    //                   if(res.data == -1){
	    //                       this.tishi = "该用户不存在"
	    //                       this.showTishi = true
	    //                   }else if(res.data == 0){
	    //                       this.tishi = "密码输入错误"
	    //                       this.showTishi = true
	    //                   }else if(res.data == 'admin'){
	    //                   /*路由跳转this.$router.push*/
	    //                       this.$router.push('/main')
	    //                   }else{
	    //                       this.tishi = "登录成功"
	    //                       this.showTishi = true
	    //                       setCookie('username',this.username,1000*60)
	    //                       setTimeout(function(){
	    //                           this.$router.push('/home')
	    //                       }.bind(this),1000)
	    //                   }
	    //               })
				// }



			}
		},
		computed: {
			showLogin() {
	
				this.isshade = this.login
				if(this.isshade) {
					this.imgState.normal = true
					this.imgIndex = 1
					this.isFocus = this.isFocuse
				}
				return this.login
			}
		},
		directives: {
			focus: {
				inserted: function(el, binding) {
					//					console.log(binding)
					if(binding.value)
						el.focus();
					else
						el.blur();
				},
				componentUpdated: function(el, binding) {
					if(binding.value)
						el.focus();
					else
						el.blur();
				},
			}
		},
		props: {
			login: Boolean,
			isFocuse: Boolean
		}
	}
</script>

<style scoped>
	.auth-form .focus {
		border: 0.01rem solid #007fff;
	}
	
	.nav-list {
		width: 1rem;
		height: 0.6rem;
		font-size: 0.14rem;
		color: #007fff;
		padding: 0.21rem 0.20rem 0.1rem 0.23rem;
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
	
	.show {
		display: block !important;
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
	/*登录*/
	
	.auth-modal-box {
		top: 0;
		left: 0;
		position: absolute;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.3);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.panfish {
		position: absolute;
		top: -0.8rem;
		left: 0;
		right: 0;
		margin: auto;
		text-align: center;
	}
	
	.panfish .normal {
		width: 1.2rem;
		height: 0.99rem;
	}
	
	.panfish .greeting {
		position: absolute;
		top: -0.1rem;
		left: 0;
		right: 0;
		margin: auto;
		width: 1.24rem;
		height: 1.17rem;
	}
	
	.panfish .blindfold {
		width: 1.11rem;
		height: 0.9rem;
	}
	
	.auth-form {
		padding: 0.24rem;
		width: 3.18rem;
		height: 3.26rem;
		background: #fff;
		position: relative;
	}
	
	.auth-form .title {
		font-size: 0.18rem;
		color: #333;
		margin-bottom: 0.17rem;
	}
	
	.auth-form input {
		font-size: 0.14rem;
		padding: 0.1rem 0.12rem;
		width: 100%;
		border: 1px solid #e9e9e9;
		border-radius: 2px;
		outline: none;
		box-sizing: border-box;
		margin-bottom: 0.096rem;
	}
	
	.prompt-box {
		margin-top: -0.09rem;
	}
	
	#btn {
		margin-top: 0.04rem;
		height: 0.42rem;
		line-height: 0.22rem;
		background: #007fff;
		color: #fff;
		border-radius: 2px;
		box-sizing: border-box;
		cursor: pointer;
	}
	
	.no-accounts {
		color: #8b9196;
	}
	/*第三方登录*/
	
	.oauth-box {
		margin-top: 0.27rem;
	}
	
	.oauth-box span {
		color: #8b9196;
		font-size: 0.12rem;
		line-height: 0.25rem;
	}
	
	.oauth-box img {
		margin-left: 0.13rem;
		width: 0.23rem;
		height: 0.23rem;
	}
</style>