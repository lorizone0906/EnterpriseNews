
//xq: 
import api from '../service/api';
import {setCookie,getCookie,delCookie} from '../assets/config/cookie.js'

export default {
	userRegister(context, registeInfo){
		if (registeInfo.username == '') {
			alert('请输入用户名');
		}else if (registeInfo.account == '') {
			alert('请输入手机号或邮箱');
		}else if (registeInfo.password == '') {
			alert('请输入密码');
		}else {
	// if(state.istelok == 'OK' && state.ispwdok == 'OK'){
		api.userregiste(registeInfo, function(res){
			console.log('注册成功，去登陆界面');
			console.log(res.data);
			context.commit('ISLOGINSHOW', {isloginshow: true});
			context.commit('ISREGISTERSHOW', {isregistershow: false});
		});
		// context.commit('ISLOGINSHOW', {isloginshow: true});
		// context.commit('ISREGISTERSHOW', {isregistershow: false});
		// 注册成功后调用 登录 的方法，用户自动登录
		// context.dispatch('userLogin', registeInfo);
	}
 },
	/* 用户登录的各种处理 */
  userLogin(context, info){
  	// 模拟
 //  	context.commit('ISLOGINSHOW', {isloginshow: false});   // 隐藏登录框
	// context.commit('ISLONI',info);
	// setCookie('username',info.username,1000*60);
	// this.router.push({path: '/home'});
	
	api.userlogin(info, function(result){
		if(result.state == '0'){

			console.log('获取到登录信息',result);
			context.commit('ISLOGINSHOW', {isloginshow: false});   // 隐藏登录框
			context.commit('ISLONI', result.data[0]); // 存储用户信息，隐藏未登录时的状态，显示登录后的状态
			let info = result.data[0];
			setCookie('username',info.username,1000*60);
			// 获取用户信息之后，获取用户关注的收藏集信息
			//
			// api.getusercollectionlists(info, function(res){
			// 	context.commit('USERPLAYLISTS', res.data);
			// 	var l = state.user_playlists;
			// 	var x = [];
			// 	for(var i=0; i<l.length; i++){
			// 		x.push(l[i].collections);
			// 	}
			// 	info.collections = x.join(',');
			// 	api.getcollectionlistById(info, function(collections){   // 获取用户收藏集
			// 		context.commit('USERCOLLECTIONS', collections);
			// 	});
			// });

		}else if(result.state == '1'){ // 输入手机号有误时的操作
			console.log('帐号不存在',result);
			context.commit('ISLOGINSHOW',{isloginshow: true}); // 登录框继续显示
			context.commit('TELWARNING', true);  // 显示 ‘帐号不存在’
			context.commit('PWDWARNING', false);
		}else if(result.state == '2'){ // 密码为空或输入的密码不正确时的操作
			console.log('密码错误',result);
			context.commit('ISLOGINSHOW',{isloginshow: true});  // 登录框继续显示
			context.commit('TELWARNING', false);  // 帐号提醒 隐藏
			context.commit('PWDWARNING', true);   // 显示 ‘请输入正确的密码’
		}
	});
 },
 /* 检查session：页面一加载就向服务器发送校验session的请求，如果能从后台获取到session，自动登录；如果没有session，不进行操作 */
 checkSession(context){
	 api.checksession(function(res){
		 if(res.data.state == 'OK'){
			 context.commit('ISLONI', res.data);
		 }else{
			 context.commit('ISLOGOUT');
		 }
		// console.log(state.userinfo.username);
	 });
 },
 /* 退出登录时的操作 */
 logout(context){
 		console.log("正在退出");
 		delCookie('username');
		context.commit('ISLOGOUT');
		// this.$router.push({path: '/'});
	// api.userlogout(function(res){
	// 	delCookie('username');
	// 	context.commit('ISLOGOUT');
	// });
 },
 /* 用户注册时的操作 */
 getUsername(context,username){
 	/* 对用户输入的用户名进行验证唯一性
	*/
	console.log(context,registeInfo);
	var userN = registeInfo.username;
	 if(userN.length != 0 ){
		 api.getusername(registeInfo, function(res){
			//  console.log(res.data);
			 context.commit('ISREGIST', res.data.msg);
			 if(res.data.msg == '帐号可用'){
				 context.commit('ISTELOK', 'OK');
			 }else{
				 context.commit('ISTELOK', 'ERR');
			 }
		 });
	 }else{
		 context.commit('ISREGIST', '请输入正确的手机号');
		 context.commit('ISTELOK', 'ERR');
	 }
 },

 getRegisteinfo(context, registeInfo){
	/* 对用户输入的手机号码进行简单的逻辑判断：
	*/
	var tel = registeInfo.tel;
	// var tel_sub = tel.substring(0,2);  // 获取手机号前2位
	 if(tel.length == 11){
		 api.usertel(registeInfo, function(res){
			//  console.log(res.data);
			 context.commit('ISREGIST', res.data.msg);
			 if(res.data.msg == '帐号可用'){
				 context.commit('ISTELOK', 'OK');
			 }else{
				 context.commit('ISTELOK', 'ERR');
			 }
		 });
	 }else{
		 context.commit('ISREGIST', '请输入正确的手机号');
		 context.commit('ISTELOK', 'ERR');
	 }
 },
 getPwd(context, registeInfo){
	//  校验密码长度的操作
	 var password = registeInfo.password;
	 if(password.length<6){
		 context.commit('ISPWD', '密码不能少于6位数');
		 context.commit('ISPWDOK', 'ERR');
	 }else{
		 context.commit('ISPWDOK', 'OK');
	 }
 },
	
	// 获取当前的栏目
	changeNowColumn({commit},type){
		commit('CHANGE_NOWCOLUMN',type)
	},



	// 获取新的分栏数据
	getNewArticals(context,info){
		console.log("正在获取分栏数据",info);
		context.commit('NEWARTICALS', [{
		columnId:'0',
		img:'https://dn-mhke0kuv.qbox.me/1159f74108b3f2f00584.JPG?imageView2/1/w/100/h/100/q/85/interlace/1',
		name:'承香墨影',
		date:'10分钟前',
		title:'使用router实现的模块化，如何优雅的回到主界面',
		content:'版权声明：本账号发布文章均属于成效末影所有，版权声明：本账号发布文章均属于成效末影所有，版权声明：本账号发布文章均属于成效末影所有',
		like:'10',
	},{
		columnId:'0',
		img:'https://dn-mhke0kuv.qbox.me/1159f74108b3f2f00584.JPG?imageView2/1/w/100/h/100/q/85/interlace/1',
		name:'承香墨影',
		date:'10分钟前',
		title:'使用router实现的模块化，如何优雅的回到主界面',
		content:'版权声明：本账号发布文章均属于成效末影所有，版权声明：本账号发布文章均属于成效末影所有，版权声明：本账号发布文章均属于成效末影所有',
		like:'10',
	}]);
		// api.getnewarticals(info, function(res){
		// 	 console.log(res.data);
		// 	 context.commit('NEWARTICALS', res.message);
		// 	 if(result.state == '0'){
		// 		 context.commit('NEWARTICALS', res.data);
		// 	 }else{
		// 	 	console.log("获取新的分栏数据失败",res.message);
		// 		 // context.commit('ISTELOK', 'ERR');
		// 	 }
		//  });
	},
}