<template>
	<view>
		<!-- 添加list详情页 -->
		<view class="addBox">
			<uni-easyinput class="uni-mt-5 " prefixIcon="compose" suffixIcon="trash" v-model="value" @input="input"
				placeholder="输入待办事项..." @iconClick="iconClick"></uni-easyinput>

		</view>
		<view class="func">
			<span>类别：</span>
			<view class="example-body">
				<uni-combox :candidates="candidates" placeholder="选择" v-model="city"></uni-combox>
			</view>
			<span>日期：</span>
			<view class="date">
				<uni-datetime-picker type="date" :value="single" start="2022-10-1" @change="change" />
			</view>
			<!-- 描述 -->
		</view>
		<u--textarea v-model="value1" placeholder="描述"></u--textarea>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 添加框
				value: '',
				placeholderStyle: "color:#2979FF;font-size:14px",
				styles: {
					color: '#2979FF',
					borderColor: '#2979FF'
				},
				// 分类框:
				candidates: ['普通', '家庭', '公司', '娱乐'],
				city: '',
				// 日期
				single: "2021-04-3",
				datetimesingle: "2021-04-3",
				// range: ["2021-03-8", "2021-4-20"],
			}

		},
		methods: {
			input(e) {
				// e为输入框输入的内容
			},
			change(e) {
				this.single = e;
				// console.log("-change事件:", e);
			},
			iconClick(type) {
				if(type==='suffix'){
					this.value=''
				}
				}
		},
		mounted() {
			setTimeout(() => {
				this.datetimesingle = "2022-10-1";
				this.single = "2022-10-1";
			}, 1000);
		}
	}
</script>

<style lang="scss">
	.addBox {
		height: 60rpx;
		width: 97%;
		border-radius: 50rpx;
		margin: 20rpx 10rpx;
		display: inline-block;
	}

	.func {
		// width: 100rpx;
		height: 80rpx;
		// padding: 0 20rpx;
		display: inline-block;

		// background-color: pink;
		span {
			margin-left: 20rpx;
			float: left;
			display: inline-block;
			line-height: 80rpx;
		}

		.date {
			float: right;
			width: 300rpx;
			// height: 65rpx;
			margin-top: 8rpx;
			
			margin-left: 20rpx;
			border-radius: 10rpx;
		}
	}

	.example-body {
		display: inline-block;
		float: left;
		width: 160rpx;
		// height: 65rpx;
		margin: 10rpx;
		// margin-left: 20rpx;
		background-color: #FFFFFF;
		border-radius: 10rpx;
	}

	.result-box {
		text-align: center;
		font-size: 16px;
	}
	/deep/.uniui-clear{
		display: none;
	}
</style>
