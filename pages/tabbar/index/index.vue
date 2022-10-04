<template>
	<view class="ListContainer">

		<u-sticky bgColor="#f8f8f8">

			<!-- 添加待办 -->
			<view class="addBox">
				<uni-easyinput class="uni-mt-5 " prefixIcon="plusempty" suffixIcon="arrow-right" v-model="value"
					placeholder="输入待办事项..." @iconClick="iconClick"></uni-easyinput>
				<!-- <view class="iconBtn"></view> -->
			</view>
			<!-- 标签行（类别） -->
			<!-- current="0":设置当前选中的选项 -->
			<u-tabs :list="list4" lineWidth="20" lineHeight="7" :current="current" :activeStyle="{
		        color: '#303133',
		        fontWeight: 'bold',
		        transform: 'scale(1.05)'
		    }" :inactiveStyle="{
		        color: '#606266',
		        transform: 'scale(1)'
		    }" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px; opacity:1" @change="change">
			</u-tabs>
		</u-sticky>
		<!-- 列表 -->
		<u-list @scrolltolower="scrolltolower">
			<u-list-item v-for="(item, index) in indexList" :key="index">
				<view class="itemCell" v-if="item.category==currentCategory">
					<view class="checkBox" @click="checked(item)">
						<span class="circle"
							:style="{'color':item.checked==true?'#cb2d01':'#ffffff','font-size':item.checked==true?'30rpx':'10rpx'}">√</span>
					</view>
					{{item.title}}
				</view>
			</u-list-item>
		</u-list>


	</view>
</template>

<script>
	
	export default {

		data() {
			return {

				// 添加框
				value: '',
				password: '',
				placeholderStyle: "color:#2979FF;font-size:14px",
				styles: {
					color: '#2979FF',
					borderColor: '#2979FF'
				},
				// tab
				list4: [{
						name: '普通'
					},
					{
						name: "公司"
					},
					{
						name: "学校"
					},
					{
						name: "家庭"
					},
				],
				current: 0,
				currentCategory: "",
				// 列表
				indexList: [{
						id: 1,
						checked: true,
						title: "彭厨",
						category: "普通"
					},
					{
						id: 2,
						checked: false,
						title: "牛火",
						category: "公司"
					},
					{
						id: 3,
						checked: false,
						title: "酸菜鱼",
						category: "普通"
					},
					{
						id: 4,
						checked: true,
						title: "京明度假村",
						category: "学校"
					},
					{
						id: 5,
						checked: false,
						title: "早茶belike",
						category: "普通"
					},
					{
						id: 6,
						checked: true,
						title: "本岛粥城",
						category: "家庭"
					},
					{
						id: 7,
						checked: true,
						title: "烤肉",
						category: "普通"
					},
					{
						id: 1,
						checked: true,
						title: "彭厨",
						category: "普通"
					},
					{
						id: 2,
						checked: false,
						title: "牛火",
						category: "公司"
					},
					{
						id: 3,
						checked: false,
						title: "酸菜鱼",
						category: "普通"
					},
					{
						id: 4,
						checked: true,
						title: "京明度假村",
						category: "学校"
					},
					{
						id: 5,
						checked: false,
						title: "早茶belike",
						category: "普通"
					},
					{
						id: 6,
						checked: true,
						title: "本岛粥城",
						category: "家庭"
					},
					{
						id: 7,
						checked: true,
						title: "烤肉",
						category: "普通"
					},
					{
						id: 1,
						checked: true,
						title: "彭厨",
						category: "普通"
					},
					{
						id: 2,
						checked: false,
						title: "牛火",
						category: "公司"
					},
					{
						id: 3,
						checked: false,
						title: "酸菜鱼",
						category: "普通"
					},
					{
						id: 4,
						checked: true,
						title: "京明度假村",
						category: "学校"
					},
					{
						id: 5,
						checked: false,
						title: "早茶belike",
						category: "普通"
					},
					{
						id: 6,
						checked: true,
						title: "本岛粥城",
						category: "家庭"
					},
					{
						id: 7,
						checked: true,
						title: "烤肉",
						category: "普通"
					},
					{
						id: 1,
						checked: true,
						title: "彭厨",
						category: "普通"
					},
					{
						id: 2,
						checked: false,
						title: "牛火",
						category: "公司"
					},
					{
						id: 3,
						checked: false,
						title: "酸菜鱼",
						category: "普通"
					},
					{
						id: 4,
						checked: true,
						title: "京明度假村",
						category: "学校"
					},
					{
						id: 5,
						checked: false,
						title: "早茶belike",
						category: "普通"
					},
					{
						id: 6,
						checked: true,
						title: "本岛粥城",
						category: "家庭"
					},
					{
						id: 7,
						checked: true,
						title: "烤肉",
						category: "普通"
					},


				],

			}
		},
		onLoad() {
			this.loadmore()
		},
		methods: {

			// 添加框事件
			input(e) {
				console.log('输入内容：', e);
			},
			iconClick(type) {
				uni.showToast({
					title: `点击了${type==='prefix'?'左侧':'右侧'}的图标`,
					icon: 'none'
				})
			},

			scrolltolower() {
				this.loadmore()
			},
			loadmore() {
				for (let i = 0; i < 30; i++) {
					this.indexList.push({
						url: this.urls[uni.$u.random(0, this.urls.length - 1)]
					})
				}
			},
			change(index) {
				this.current = index.index
				this.currentCategory = this.list4[this.current].name;
			},
			checked(item) {
				let ret = JSON.parse(JSON.stringify(item))
				// item变为选中状态
				item.checked = !item.checked;
			}

		},
		mounted() {
			this.currentCategory = this.list4[0].name
		}
	}
</script>

<style lang="scss">
	.itemCell {
		height: 65rpx;
		line-height: 65rpx;
		width: 97%;
		background-color: #ffffff;
		margin: 7rpx 10rpx;

		// padding-left: 30rpx;

		.checkBox {
			width: 20rpx;
			display: inline-block;
			margin-left: 20rpx;
			margin-right: 20rpx;
			height: 20rpx;
			border: 1px solid black;

			.circle {
				width: 13rpx;
				height: 13rpx;
				line-height: 13rpx;
				margin: 4rpx;
				border-radius: 10rpx;
				font-weight: 900;
				display: block;
			}
		}
	}

	/deep/.uni-easyinput__content .is-input-border {
		height: 60rpx;
		width: 100rpx;
	}

	.addBox {
		height: 60rpx;
		width: 97%;
		border-radius: 50rpx;
		margin: 20rpx 10rpx;
		// margin-right: 40rpx;
		// background-color:#ffffff; 
		display: inline-block;
		// color:#fff;   

	}

	.iconBtn {
		height: 50rpx;
		width: 50rpx;
		line-height: 60rpx;
		// background-color: red;
		background-image: url(@/static/index/addBtn.png);
		background-repeat: repeat;
		background-position: center;
		background-size: contain;
		margin-left: 20rpx;
		margin-top: 6rpx;
		// background: url(@/static/index/addBtn.png) no-repeat fixed center;	
	}
</style>

