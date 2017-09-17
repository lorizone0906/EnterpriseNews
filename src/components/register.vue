<template>
	<div class="shade" v-show="isshade">
		<div class="auth-modal-box">
			<form class="auth-form">
				<p class="title clearfix">
					<label>注册</label>
					<i class="fa fa-times close fr" aria-hidden="true" @click='close1'></i>
				</p>
				<p>
					<input type="text" placeholder="请输入用户名" :class="{focus : this.focusInput.username}" id='registerUsername' autofocus v-model="info.username" v-focus="isFocus" @focus='focus1' @blur="blur1">
					<input type="text" placeholder="请填写手机号或邮箱" :class="{focus : this.focusInput.account}" id="registerPhoneOrEmail" maxlength="64" v-model="info.account" @focus='focus2' @blur="blur2">
					<input type="password" placeholder="请输入密码" :class="{focus : this.focusInput.passwd}" id="registerPassword" maxlength="64" v-model="info.password" @focus='focus3' @blur="blur3">
					<input type="button" id="btn" value="注册" @click.prevent='userRegister(info)'>
				</p>
				<div class="prompt-box clearfix">
					<p>
						<a @click='toLogin1'>已有账号登录</a>
					</p>
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
			{{showregister}}
		</div>
	</div>

</template>

<script>
	import {mapActions} from 'vuex'

	export default {
		name: 'register',
		data() {
			return {
				info: {
					username:'',
	    			account: '',
	    			password: ''
	    		},
				isFocus: true,
				username: '',
				account: '',
				password: '',
				//隐藏或显示登录框
				isshade: false,
				focusInput: {
					username: false,
					account: false,
					password: false
				}
			}
		},
		methods: {
			...mapActions(
				['userRegister']
			),
			// （注册成功后）跳转到登录
			toLogin1() {
				this.$emit('toLogin')
			},
			clearFocus() {
				for(var ele in this.focusInput) {
					this.focusInput[ele] = false;
				}
			},
			focus1() {
				this.focusInput.username = true;
				this.isFocus = true;
			},
			focus2() {
				this.focusInput.account = true;
				this.isFocus2 = true;

			},
			focus3() {
				this.focusInput.password = true;
				this.isFocus3 = true;
			},
			blur1() {
				this.clearFocus();
				this.isFocus = false;
				
			},
			blur2() {
				this.clearFocus();
				this.isFocus2 = false;
				
			},
			blur3() {
				this.clearFocus();
				this.isFocus3 = false;
				
			},
			close1() {
				this.username = ''
				this.account = ''
				this.password = ''
				this.$emit('close')
			},
			// 注册
			register111(){
                // if(this.newUsername == "" || this.newPassword == ""){
                //     alert("请输入用户名或密码")
                // }else{
                //     let data = {'username':this.newUsername,'password':this.newPassword}
                //     this.$http.post('http://localhost/vueapi/index.php/Home/user/register',data).then((res)=>{
                //         console.log(res)
                //         if(res.data == "ok"){
                //             this.tishi = "注册成功"
                //             this.showTishi = true
                //             this.username = ''
                //             this.password = ''
                //              /*注册成功之后再跳回登录页*/
                //             setTimeout(function(){
                //                 this.showRegister = false
                //                 this.showLogin = true
                //                 this.showTishi = false
                //             }.bind(this),1000)
                //         }
                //     })
                // }
            }
		},
		computed: {
			// yanzheng(){
			// 	if (!this.isFocus) {
			// 		if (this.info.username == '') {
			// 			alert('请输入用户名');
			// 		}else {
			// 			this.$store.fetch('getUsername',this.info);
			// 		}
			// 	}else if (!this.isFocus1) {
			// 		if (this.info.account == '') {
			// 			alert('请输入手机号');
			// 		}else {
			// 			this.$store.fetch('getRegisteinfo',this.info);
			// 		}

			// 	}else if (!this.isFocus2) {
			// 		if (this.info.password == '') {
			// 			alert('请输入密码');
			// 		}else {
			// 			this.$store.fetch('getPwd',this.info);
			// 		}
			// 	}
			// 	// 

			// },


			showregister() {
				this.isshade = this.register
				if(this.isshade) {
					this.focusInput.username = true
					this.isFocus = this.isFocuse
				}
				return this.register
			}
		},
		props: {
			register: Boolean,
			isFocuse: Boolean

		},
		directives: {
			focus: {
				inserted: function(el, binding) {
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
	}
</script>

<style scoped>
	.auth-form .focus {
		border: 0.01rem solid #007fff;
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
	
	.auth-form {
		padding: 0.24rem;
		width: 3.18rem;
		height: 3.8rem;
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
	
	.prompt-box p {
		text-align: center;
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
		margin-top: 0.17rem;
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