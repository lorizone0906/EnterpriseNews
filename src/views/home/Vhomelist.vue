<template>
	<div>
		<header class="list-header">
			<nav role="navigation" class="list-nav">
				<ul class="nav-list left">
					<li class="nav-item active"><a href="/timeline?sort=popular">热门</a></li>
					<li class="nav-item"><a href="/timeline?sort=newest">最新</a></li>
					<li class="nav-item"><a href="/timeline?sort=comment">评论</a></li>
				</ul>
				<ul class="nav-list right">
					<li class="nav-item"><a href="/timeline?sort=weeklyHottest">本周最热</a></li>
					<li class="nav-item"><a href="/timeline?sort=monthlyHottest">本月最热</a></li>
					<li class="nav-item"><a href="/timeline?sort=hottest">历史最热</a></li>
				</ul>
			</nav>
		</header>
	</div>
	<ul class="column-entry-list">
	  	<!--  -->
	    <VcolumnItem v-for='(column,index) in getColumns' :column='column'></VcolumnItem>
	  </ul>

</template>

<script type="text/javascript">
	import VcolumnItem from '../column/VcolumnItem'

	export default {
		components:{
			VcolumnItem,
		}
	}
</script>

<style type="text/css" scoped>
.column-entry-list {
    width: 100%;
    background-color: #fff;
    border-radius: 2px;
}

ul, menu, dir {
    display: block;
    list-style-type: disc;
}

.list-header{
	display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 1.3rem 2rem;
    border-bottom: 1px solid hsla(0,0%,59%,.1);
}
</style>