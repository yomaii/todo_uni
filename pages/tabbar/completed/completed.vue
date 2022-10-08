<template>
	<view>
		<view class="addBox">
			<uni-easyinput class="uni-mt-5 " prefixIcon="compose" suffixIcon="trash" v-model="value" @input="input"
				placeholder="查找已完成事项..." @iconClick="iconClick"></uni-easyinput>

		</view>
		<view class="card">
			<view class="list">
				<view class="title">Done:</view>
				<ul class="listItem">
					<li v-for="(item, index) in indexList" :key="index">
						<view class="checkBox" @click="checked(item)">
							<span class="circle"
								:style="{'color':item.checked==true?'#cb2d01':'#ffffff','font-size':item.checked==true?'30rpx':'10rpx'}">√</span>
						</view>
						{{item.title}}
					</li>
				</ul>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				indexList: [{
						id: 1,
						checked: true,
						title: "彭厨",
						category: "普通"
					},
					{
						id: 2,
						checked: true,
						title: "牛火",
						category: "公司"
					},
					{
						id: 3,
						checked: true,
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
						checked: true,
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
		methods: {

		}
	}
</script>

<style lang="scss">
	.card {
		margin: auto;
		width: 95vw;
		// height: 300rpx;
		background-color: #fff;
		border-radius: 10px;
		display: flex;
		margin-top: 2.5vw;
		padding: 20rpx;
		box-sizing: border-box;
		overflow: hidden;
	}

	.addBox {
		height: 60rpx;
		width: 97%;
		border-radius: 50rpx;
		margin: 20rpx 10rpx;
		display: inline-block;
	}

	.list {
		margin-top: 20rpx;
		width: 100%;
		padding-left: 20rpx;
		background-color: #fff;

		.title {
			color: #db5347;
			font-size: 40rpx;
			font-weight: 800;
			padding-left: 10rpx;


		}

		.listItem {
			list-style-type: none;
			display: inline-block;
			width: 95%;

			li {
				width: 95%;
				padding-left: 30rpx;
				font-size: 30rpx;
				display: block;
				height: 80rpx;
				line-height: 80rpx;
				margin: 10rpx;
				border-bottom: 1px dotted #000;
				text-decoration: line-through
			}
		}
	}

	.checkBox {
		width: 25rpx;
		display: inline-block;
		// margin-left: 10rpx;
		margin-right: 20rpx;
		height: 25rpx;
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
</style>
