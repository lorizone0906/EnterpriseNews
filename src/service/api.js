

import axios from 'axios';
import qs from 'qs'
import {encrypt} from '../assets/config/crypto'
import {baseUrl} from '../assets/config/env'

// 
export default {
	// 用户输入手机号、密码后点击登录，发送验证请求
	userlogin(info, calback){
		console.log(info);
		if(info.account == '' || info.password == '') {
			alert('请填写手机号或邮箱');
		} else {
			let pwd = encrypt(info.password);
			info.password = pwd;
			// console.log('正在发送登录请求，密码加密为',info,pwd);
			axios.post(baseUrl + 'users/login', info).then(res => {
				var result = res.data;
				calback(result);
			}).catch(err => {
				console.log(err);
			});
		}
	},
	// 页面一加载时向后台获取session
	checksession(calback){
		axios.get(baseUrl + 'users/checksession').then(res => {
			calback(res);
		}).catch(err => {
			console.log(err);
		});
	},

	// 用户退出登录接口
	userlogout(calback){
		axios.get(baseUrl + 'users/logout' ).then(res => {
			calback(res);
		}).catch(err => {
			console.log(err);
		});
	},

	// 用户注册接口
	// 帐号查询
	getusername(registeInfo, calback){
		axios.post(baseUrl+ 'users/unamesearch', registeInfo).then(res => {
			calback(res);
		}).catch(err => {
			console.log(err);
		});
	},
	usertel(registeInfo, calback){
		axios.post(baseUrl+ 'users/accountsearch', registeInfo).then(res => {
			calback(res);
		}).catch(err => {
			console.log(err);
		});
	},
	addAccount(registeInfo, calback){
		axios.post(baseUrl + 'users/addaccount', registeInfo).then(res => {
			console.log(res);
			calback(res);
		}).catch(err => {
			console.log(err);
		});
	},
	userregiste(registeInfo, calback){
		axios.post(baseUrl + 'users/register', registeInfo).then(res => {
			console.log(res);
			calback(res);
		}).catch(err => {
			console.log(err);
		});
	},

	// 
	getnewarticals(info,calback){
		axios.post(baseUrl + 'columns', info).then(res => {
			console.log(res);
			calback(res);
		}).catch(err => {
			console.log(err);
		});
	}

};
