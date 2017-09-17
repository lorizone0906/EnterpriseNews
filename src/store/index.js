import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
	// 登录相关
	isloginshow: false,  // 是否显示登录框
	isregistershow: false,  // 是否显示注册框
	islogin: false,		// 控制登录状态，初始值false
	hide: false,         // 控制登录状态，初始值true，和 islogin 配套使用，两者相反，当 islogin:true 时，hide: false
	userinfo: {},       // 用户信息
	telwarning: false,  // 控制 帐号 的警告信息是否显示
	pwdwarning: false,   // 控制 密码 的警告信息是否显示
	telinfo: '',        // 输入手机号，失去焦点后的警示信息
	pwdinfo: '',        // 输入密码，失去焦点后的警示信息
	istelok: '',        // 注册的手机号可用时，istelok == 'OK'
	ispwdok: '',        // 注册的密码长度 >= 6, ispwdok == 'OK'

	//分栏相关
	nowColumn:[],
	nowCollection:[],
	nowHome:[],
	show:'',
	navItem: [
		{
			title: '首页',
			url: '/'
		},
		{
			title: '专栏',
			url: '/column'
		},
		{
			title: '收藏集',
			url: '/collection'
		},
	],
	collections:[
		{
			collectionId:'0',
			bgimg:'https://dn-mhke0kuv.qbox.me/518fb4274f9d61dbc2c1.jpeg?imageView2/1/w/800/h/400/q/85/format/jpg/interlace/1',
			title:'收藏集名称0',
			username:'收藏集用户名0',
			articalNum:'6',
			likeNum:'11',
			islike:'0',
		},
		{
			collectionId:'1',
			bgimg:'https://dn-mhke0kuv.qbox.me/518fb4274f9d61dbc2c1.jpeg?imageView2/1/w/800/h/400/q/85/format/jpg/interlace/1',
			title:'收藏集名称',
			username:'收藏集用户名1',
			articalNum:'6',
			likeNum:'11',
			islike:'0',
		},
		{
			collectionId:'2',
			bgimg:'https://dn-mhke0kuv.qbox.me/518fb4274f9d61dbc2c1.jpeg?imageView2/1/w/800/h/400/q/85/format/jpg/interlace/1',
			title:'收藏集名称2',
			username:'收藏集用户名',
			articalNum:'6',
			likeNum:'11',
			islike:'0',
		},
		{
			collectionId:'3',
			bgimg:'https://dn-mhke0kuv.qbox.me/518fb4274f9d61dbc2c1.jpeg?imageView2/1/w/800/h/400/q/85/format/jpg/interlace/1',
			title:'收藏集名称',
			username:'收藏集用户名3',
			articalNum:'6',
			likeNum:'11',
			islike:'0',
		},
	],
	columns:[{
		columnId:'0',
		img:'https://dn-mhke0kuv.qbox.me/1159f74108b3f2f00584.JPG?imageView2/1/w/100/h/100/q/85/interlace/1',
		name:'承香墨影',
		date:'10分钟前',
		title:'使用router实现的模块化，如何优雅的回到主界面',
		content:'版权声明：本账号发布文章均属于成效末影所有，版权声明：本账号发布文章均属于成效末影所有，版权声明：本账号发布文章均属于成效末影所有',
		like:'10',
	},
	{
		img:'https://dn-mhke0kuv.qbox.me/1159f74108b3f2f00584.JPG?imageView2/1/w/100/h/100/q/85/interlace/1',
		name:'承香墨影',
		date:'10分钟前',
		title:'使用router实现的模块化，如何优雅的回到主界面',
		content:'版权声明：本账号发布文章均属于成效末影所有，版权声明：本账号发布文章均属于成效末影所有，版权声明：本账号发布文章均属于成效末影所有',
		like:'10',
	},
	{
		img:'https://dn-mhke0kuv.qbox.me/1159f74108b3f2f00584.JPG?imageView2/1/w/100/h/100/q/85/interlace/1',
		name:'承香墨影',
		date:'10分钟前',
		title:'使用router实现的模块化，如何优雅的回到主界面',
		content:'版权声明：本账号发布文章均属于成效末影所有，版权声明：本账号发布文章均属于成效末影所有，版权声明：本账号发布文章均属于成效末影所有',
		like:'10',
	},{
		img:'https://dn-mhke0kuv.qbox.me/1159f74108b3f2f00584.JPG?imageView2/1/w/100/h/100/q/85/interlace/1',
		name:'承香墨影',
		date:'10分钟前',
		title:'使用router实现的模块化，如何优雅的回到主界面',
		content:'版权声明：本账号发布文章均属于成效末影所有，版权声明：本账号发布文章均属于成效末影所有，版权声明：本账号发布文章均属于成效末影所有',
		like:'10',
	}
	],
	home_navs:[{
		title:'我关注的',
		url:'/all',
		},
		{
		title:'大前端',
		url:'/app',
		},
		{
		title:'后端',
		url:'/server',
		},
		{
		title:'大数据',
		url:'/bigdata',
		}],
	column_nav:[{
		title:'全部',
		url:'/all',
		},
		{
		title:'大前端',
		url:'/app',
		},
		{
		title:'后端',
		url:'/server',
		},
		{
		title:'大数据',
		url:'/bigdata',
		},
		{
		title:'移动端',
		url:'/mobile',
		},
		{
		title:'数据库',
		url:'/database',
		},
		{
		title:'人工智能',
		url:'/ai',
		}],
	collection_nav:[
		{
		title:'编辑推荐',
		url:'/recommend',
		},
		{
		title:'全部',
		url:'/all',
		},
	],
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})