
import api from '../service/api';

export default {
	// 登录相关
	// 获取登录框显示状态
	getIsloginShow:function(state){
		return state.isloginshow
	},
	getIsregistershow:function(state){
		return state.isregistershow
	},
	// 判断登录状态
	getIsLogin:function(state){
		return state.islogin
	},
	getIsHide:function(state){
		return state.hide
	},



	// 分栏相关
	getHome_navs:function(state){
		return state.home_navs
	},
	getShow:function(state){
		return state.show
	},
	getColumn_nav:function(state){
		return state.column_nav
	},
	getCollection_nav:function(state){
		return state.collection_nav
	},
	getColumns:function(state){
		return state.columns
	},
	getCollections:function(state){
		return state.collections
	},


	// 
	

}