<template>
	<li class="item" @click='selectColumn' >
          <div class="column-entry with-thumb">
            <div class="user-info-row">
              <div class="user-popover-box">
                <!---->
                <a href="/user/57ff05970e3dd90057e3e208" target="_blank" class="user-info">
                  <div class="avatar avatar" style="background-image: url(&quot;https://user-gold-cdn.xitu.io/2016/11/30/ec9c48ade87b3e07509a37d716c7556d?imageView2/1/w/100/h/100/q/85/interlace/1&quot;);">
                    <img src="https://user-gold-cdn.xitu.io/2016/11/30/ec9c48ade87b3e07509a37d716c7556d?imageView2/1/w/100/h/100/q/85/interlace/1" class="hidden">
                  </div>
                  <span class="username">{{column.name}}</span>
                </a>
              </div>
              <span class="date">{{column.date}}</span>
            </div>
            <div class="thumb-row">
              <a href="/post/5981355d51882537b0491243" target="_blank" class="title">
                <div class="thumb" style="background-image: url(&quot;https://user-gold-cdn.xitu.io/2017/8/2/0b085d3302bdac042348b988126f0db9?imageView2/1/w/1080/h/320/q/85/interlace/1&quot;); background-size: cover;">
                  <img src="https://user-gold-cdn.xitu.io/2017/8/2/0b085d3302bdac042348b988126f0db9?imageView2/1/w/1080/h/320/q/85/interlace/1" class="hidden">
                </div>
              </a>
            </div>
            <div class="abstract-row">
              <a href="/post/5981355d51882537b0491243" target="_blank" class="title">{{column.title}}</a>
              <a href="/post/5981355d51882537b0491243" target="_blank" class="abstract with-thumb">掘梦是一款有助于Android攻城狮们巩固基础，进价提升的一个资讯阅读APP，掘梦的宗旨就是把所有Android相关所有优秀的文章和框架、控件等第一时间向大家展示，让大家紧跟Android开发的新方向。 项目介绍 黄金招聘季节的时候，找工作去复习android相关知识点的时候，发…</a>
            </div>
            <div class="action-row">
              <ul class="action-list">
                <li class="action like clickable">
                  <div class="icon icon-likes iconfont icon-xlcollection"></div>
                <!---->
                </li>
                <a href="/post/5981355d51882537b0491243#comment" target="_blank" class="title">
                  <li class="action comment clickable">
                    <div class="icon icon-comments iconfont icon-xlchatbox"></div>
                  <!---->
                  </li>
                </a>
                <li class="action collect clickable hover">
                  <img src="//gold-cdn.xitu.io/v3/static/img/collection-icon.60937ff.svg" class="icon"><span>收藏</span>
                <!---->
                </li>
              </ul>
              <div class="entry-action-box">
                <!---->
                <a href="/post/5981355d51882537b0491243" target="_blank" class="read-action">阅读全文</a>
                <!---->
                <!---->
              </div>
            </div>
          </div>
        </li>
</template>

<script type="text/javascript">
	export default{
		name:'VcolumnItem',
		data(){
			return{

			}
		},
		props:{
			column:Object
		},
		methods:{
			
			selectColumn(){
        console.log("selected column");
				// this.$store.commit('selectNote1',this.note);
			}
		}


	}
</script>

<style type="text/css" scoped>

.item {
    padding: 0.25rem;
    border-bottom: 1px solid hsla(0,0%,59%,.1);
}

li {
    list-style: none;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
.user-info-row {
    font-size: 0.12rem;
    padding: .03rem 0 0.13rem;
    color: #8b8b8b;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
a {
    color: inherit;
}

a {
    text-decoration: none;
}
.thumb-row {
    position: relative;
    padding-top: 33.4%;
    margin-bottom: 0.02rem;
}
.thumb-row .thumb {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 50%/cover;
    background-color: #f8f9fa;
    cursor: pointer;
    border-radius: 3px;
}
.user-info-row .user-info .avatar{
    width: 0.25rem;
    height: 0.25rem;
    border-radius: 50%;
    margin-right: 0.1rem;
}
.avatar {
    display: inline-block;
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
}
.avatar .hidden {
    display: none;
}
img {
    border-style: none;
    width: 50%;
    height: 50%;
}
.abstract-row .title:visited {
    color: #909090;
}
.abstract-row .title {
    width: 100%;
    margin-bottom: .08rem;
    font-size: 0.2rem;
    color: #000;
    line-height: 1.3;
    font-weight: 600;
    letter-spacing: .004rem;
}
.abstract-row .abstract {
    width: 100%;
    max-height: 0.7800000000000001rem;
    line-height: 1.5;
    letter-spacing: .002rem;
    color: #8b8b8b;
    cursor: pointer;
    overflow: hidden;
    font-size: 0.13rem;
}
.action-row .action-list .action.active {
    color: #fff;
    border-color: #83c73a;
    background-color: #83c73a;
}
.action-row .action-list .action {
    cursor: pointer;
    padding: 0 0.1rem;
    height: 25px;
    line-height: 25px;
    border: 1px solid #f1f1f1;
    border-radius: 1px;
    background-color: #fff;
    transition: color,border-color,background-color .3s;
}
.action-row .action-list .action.active .icon-likes {
    -webkit-animation: f .5s;
    animation: f .5s;
}
.action-row .action-list .action .icon {
    font-size: 0.12rem;
}
.iconfont {
    font-family: iconfont!important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.action-row .action-list .action .count {
    margin-left: .03rem;
    font-weight: 700;
}

</style>

