<template>
	<view class="ListContainer">
		<!-- 标签行（类别） -->
		  <u-tabs
		    :list="list4"
		    lineWidth="20"
		    lineHeight="7"
		    :lineColor="`url(${lineBg}) 100% 100%`"
		    :activeStyle="{
		        color: '#303133',
		        fontWeight: 'bold',
		        transform: 'scale(1.05)'
		    }"
		    :inactiveStyle="{
		        color: '#606266',
		        transform: 'scale(1)'
		    }"
		    itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;"
		    >
		    </u-tabs>
		
		<!-- 列表 -->
		<u-list
			@scrolltolower="scrolltolower"
		>
			<u-list-item
				v-for="(item, index) in indexList"
				:key="index"
			>
				<u-cell
					:title="item.title"
				>
				</u-cell>
			</u-list-item>
		</u-list>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				// tab
				 list4: [{
				                    name: '普通'
				                }, 
								{
				                    name: '学校',
				                    
				                }, 
								{
				                    name: '公司',
				                }, 
								{
				                    name: '家庭'
				                }],
				// 列表
				indexList: [
					{id:1,title:"彭厨",category:"普通"},
					{id:2,title:"牛火",category:"公司"},
					{id:3,title:"酸菜鱼",category:"普通"},
					{id:4,title:"嘉名度假村",category:"学校"},
					{id:5,title:"早茶belike",category:"普通"},
					{id:6,title:"本岛粥城",category:"家庭"},
					{id:7,title:"烤肉",category:"普通"},
									 
					
				],

			}
		},
		onLoad() {
			this.loadmore()
		},
		methods: {
			scrolltolower() {
				this.loadmore()
			},
			loadmore() {
				for (let i = 0; i < 30; i++) {
					this.indexList.push({
						url: this.urls[uni.$u.random(0, this.urls.length - 1)]
					})
				}
			}
		},
	}
</script>