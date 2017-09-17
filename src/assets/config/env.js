/**xq
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * 
 */

let baseUrl = 'http://127.0.0.1:3000/'; 
let routerMode = 'history';
let imgBaseUrl = 'http://www.baidu.com/';


if (process.env.NODE_ENV == 'development') {

}else if(process.env.NODE_ENV == 'production'){

	// baseUrl = 'http://xq.org:8989';
}

export {
	baseUrl,
	routerMode,
	imgBaseUrl,
}