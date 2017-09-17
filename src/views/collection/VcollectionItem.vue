<template>
	<li class="item" @click='selectCollection'>
		<div class="one-collection">
			<a href="/collection/596af231f265da28c0784159" target="_blank">
				<div class="thumb thumb">
					<img :src="collection.bgimg">
				</div>
				<div class="mask"></div>
				<div class="content">
					<div class="title">{{collection.title}}</div>
					<ul class="meta-list">
						<li class="meta username">{{collection.username}}</li>
						<li class="meta entry">{{collection.articalNum}} 篇文章</li>
						<li class="meta follower">{{collection.likeNum}} 人关注</li>
					</ul>
					<button class="follow-btn"><span>{{collection.islike}}</span></button>
				</div>
			</a>
		</div>
	</li>

</template>
<script type="text/javascript">
	export default {
		data(){
			return{

			}
		},
		props:{
			collection:Object,
		},
        methods:{
            selectCollection(){
                
            }
        }
	}
</script>
<style type="text/css" scoped>

.item {
    width: 100%;
}
.item {
    margin: 0 0 .14rem;
    width: 100%;
    height: 1.33rem;
    box-sizing: border-box;
}
.one-collection {
    position: relative;
    height: 100%;
}
.one-collection .thumb {
    width: 100%;
    height: 100%;
    border-radius: 2px;
}
.thumb {
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
}
a {
    text-decoration: none;
    cursor: pointer;
    color: #909090;
}
.one-collection .thumb {
    width: 100%;
    height: 100%;
    border-radius: 2px;
    background-position: 50%;
    background-repeat: no-repeat;
}
.thumb {
    background-position: 50%;
    background-repeat: no-repeat;
}
.thumb .hidden {
    display: none;
}
img {
    border-style: none;
    width: 100%;
    height: 100%;
}

.one-collection .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 2px;
    transition: all .2s;
    background-color: hsla(0,0%,43%,0);
    background-image: linear-gradient(hsla(0,0%,56%,.3),rgba(70,70,70,.6));
}
.one-collection .content {
    position: absolute;
    top: .11rem;
    left: .11rem;
    right: .11rem;
    bottom: .11rem;
    overflow: hidden;
    z-index: 1;
}

.one-collection .content .title {
    position: absolute;
    left: 0;
    right: .4rem;
    bottom: .3rem;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.4;
    color: #fff;
    cursor: pointer;
}

.one-collection .content .meta-list {
    position: absolute;
    left: 0;
    right: .5em;
    bottom: 0;
    height: 28px;
    font-size: 12px;
    line-height: 28px;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
}

.one-collection .content .meta-list .meta:not(:first-child):before {
    content: "\B7";
    margin: 0 .04rem;
}
.one-collection .content .meta-list .meta:first-child {
    max-width: .7rem;
}
.one-collection .content .meta-list .meta{
    display: inline-block;
    max-width: .8rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.one-collection .content .follow-btn {
    position: absolute;
    right: 0;
    bottom: 0;
    width: .48rem;
    height: 25px;
    font-size: 12px;
    line-height: 1;
    color: #fff;
    background: transparent;
    border: 1px solid #fff;
    border-radius: 2px;
    padding: 0;
}

.button, button {
    -webkit-appearance: none;
    background-color: #007fff;
    color: #fff;
    border-radius: 2px;
    border: none;
    padding: .05rem .13rem;
    outline: none;
    transition: background-color .3s,color .3s;
    cursor: pointer;
}
</style>