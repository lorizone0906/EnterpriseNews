
export default {

	// 显示、隐藏登录框
  ISLOGINSHOW(state,isloginval){
	  state.isloginshow = isloginval.isloginshow;
  },
  // 显示、隐藏注册框
  ISREGISTERSHOW(state,isloginval){
  		state.isregistershow = isloginval.isregistershow;
  },
  // 手机号、密码通过验证，修改登录状态
  ISLONI(state, info){
	  state.islogin = true;
	  state.hide = true;
	  state.userinfo = info;

  },
  // 手机、密码不通过验证，显示相应的警告信息
  TELWARNING(state, telwarningval){
	  state.telwarning = telwarningval;
  },
  PWDWARNING(state, pwdwarningval){
	  state.pwdwarning = pwdwarningval;
  },
  // 用户退出登录
  ISLOGOUT(state){
	  state.userinfo = {};
	  state.hide = false;
	  state.islogin = false;
	  state.isloginshow = true;
  },
  // 用户注册，手机号验证警告信息
  ISREGIST(state, telinfoval){
	  state.telinfo = telinfoval;
	  state.telwarning = true;
  },
  // 用户注册，密码警告信息
  ISPWD(state, pwdinfoval){
	  state.pwdinfo = pwdinfoval;
	  state.pwdwarning = true;
  },
  ISTELOK(state, telval){
	  state.istelok = telval;
  },
  ISPWDOK(state, pwdval){
	  state.ispwdok = pwdval;
  },
  // 获取新的分栏
  NEWARTICALS(state,arr){
  	state.columns = state.columns.concat(arr);
  },

}
