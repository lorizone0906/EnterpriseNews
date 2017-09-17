<template>
  <main class="container main-container tight">
    <div class="view user-view">
      <div class="user-info-box">
        <div class="avatar avatar" style="background-image: url(&quot;https://user-gold-cdn.xitu.io/2017/7/22/ef70bad32da718a1a6be5f7cff5c0783?imageView2/1/w/100/h/100/q/85/interlace/1&quot;);">
          <img src="https://user-gold-cdn.xitu.io/2017/7/22/ef70bad32da718a1a6be5f7cff5c0783?imageView2/1/w/100/h/100/q/85/interlace/1" class="hidden">
        </div>
        <div class="username">Lori</div>
        <div class="position">开发者</div>
        <div class="intro">coding life</div>
        <button class="setting-btn">设置</button>
        <!---->
      </div>
      <div class="user-role-box">
      <!----><!---->
        
      </div>
      <div class="user-site-box">
      <!----><!----><!---->
        
      </div>
      <div class="user-meta-box">
      <!----><!----><!---->
        
      </div>
    </div>
    <div class="user-profile-list user-profile-list shadow collection">
      <div class="list-box">
        <header class="list-header">
          <div class="type-selector type-selector">
            <div class="current">
              <div class="title">收藏集 3 个</div>
                <div class="icon ion-arrow-down-b"></div>
            </div>
            <ul class="type-list" style="display: none;">
              <li class="item"><span class="title">喜欢</span><span class="count">2 篇</span></li>
              <li class="item"><span class="title">收藏集</span><span class="count">3 个</span></li>
              <li class="item"><span class="title">关注标签</span><span class="count">8 个</span></li>
            </ul>
          </div>
          <ul class="sort-list">
            <li @click="handleCreate" class="item active" :class="{'active': isCreate}">创建的 (0)</li>
            <li @click="handleCreate" class="item" :class="{'active': !isCreate}">关注的 (3)</li>
          </ul>
        </header>
        <ul class="collection-list list collection-list"><!----><!---->
            <!-- <VcollectionItem></VcollectionItem> -->
          <div class="empty text-muted">无收藏集</div>
        </ul>
      </div>
    </div>
    <!---->
  </main>
</template>

<script>
import {setCookie,getCookie} from '../../assets/config/cookie.js'
import VcollectionItem from '../collection/VcollectionItem.vue'

export default {
  name: 'vmycollection',
  data() {
    return {
      typeSelector: false,
      isCreate: true,
      createData: []
    }
  },
  components:{ VcollectionItem },
  methods:{
    handleCreate() {
      this.isCreate = !this.isCreate;
    }
},
  mounted(){
          /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
            if(getCookie('username')){
                console.log("Vcollection mounted");
            }
        },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 960px;
}
/*头部*/
.main-container.tight>.view {
    margin-top: 0;
}

.user-info-box {
    padding: 0.4rem 0 .13rem;
    text-align: center;
}

.user-info-box .avatar {
    margin: .15rem 0;
    width: 86px;
    height: 86px;
    border-radius: 50%;
    background: 50%/cover;
    background-color: #f1f1f1;
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
}
.user-info-box .username {
    padding: 0 .24rem;
    font-size: .25rem;
    font-weight: 400;
    line-height: 1;
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
}
.user-info-box .position {
    padding: 0 .25rem;
    color: #8b8b8b;
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
}
.user-info-box .position {
    margin-top: .13rem;
    font-size: 14px;
}
.user-info-box .intro {
    margin-top: .07rem;
    max-width: 5.75rem;
    margin-left: auto;
    margin-right: auto;
    font-size: .13rem;
}
.user-info-box .setting-btn {
    margin-top: .15rem;
    padding: .07rem .3rem;
    color: #000;
    border: 1px solid #000;
    background-color: transparent;
    font-size: .11rem;
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

/*列表部分*/
.user-profile-list {
    position: relative;
    margin: .3rem auto .42rem;
    width: 7rem;
    max-width: 100%;
    background-color: #fff;
    border-radius: 2px;
    cursor: default;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.shadow {
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
}

.list-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: .03rem;
    background-color: #fff;
    position: relative;
}
.list-header {
    padding: .13rem .1rem;
    border-bottom: 1px solid hsla(0,0%,59%,.1);
}

.entry-list {
    width: 100%;
    background-color: #fff;
}
.item:not(:last-child) {
    border-bottom: 1px solid rgba(178,186,194,.15);
}
li {
    list-style: none;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}

.content-box, .info-box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.content-box {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: .15rem .2rem;
}

.info-box {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    min-width: 0;
}
.content-box, .info-box{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
/*列表行 */
.meta-row {
    font-size: .1rem;
    color: #b2bac2;
}
.meta-list .item.post {
    font-weight: 500;
    color: #b71ed7;
}
.meta-list .item.tag {
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.title-row {
    margin: .05rem 0 .1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.title {
    font-size: .12rem;
}
.title {
    font-size: .14rem;
    font-weight: 600;
    line-height: 1.2;
    color: #2e3135;
}
.action-list>.item.like.liked {
    color: #1dc400;
}
.action-list>.item.like {
    padding: 0;
}
.action-list>.item {
    height: .15rem;
    font-size: .1rem;
}
.action-list>.item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: relative;
    padding: 0 .08rem;
    height: .2rem;
    font-size: .11rem;
    line-height: 1;
    color: #b2bac2;
    border-radius: 1px;
    border: 1px solid #edeeef;
}

</style>
