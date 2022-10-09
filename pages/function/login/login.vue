<template>
	<view class="login">
		<view class="title">ToDo</view>
		<view class="account input">
			<uni-easyinput prefixIcon="person" v-model="value" :inputBorder="false" placeholder="请输入账号"
				@iconClick="iconClick">
			</uni-easyinput>
		</view>
		<view class="password input">
			<uni-easyinput prefixIcon="locked-filled" :inputBorder="false" type="password" v-model="password"
				placeholder="请输入密码"></uni-easyinput>
		</view>
		<!-- <view class="sub"> -->
		<view class="sub_login"  @click="index"> 登录</view>
		<view class="registered" @click="index"> 注册</view>
		<!-- </view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
			
		},
		methods:{
			index(){
				uni.switchTab({
					url: '/pages/tabbar/index/index'
				});
			}
		}
	}
</script>

<style lang="scss">
	.login {
		text-align: center;
		margin-top: 20vh;

		.title {
			font-size: 100rpx;
			color: #db4c3f;
			font-weight: 600;

		}

		.input {
			border-radius: 15px;
			overflow: hidden;
			// margin-top: ;
			width: 70vw;
			margin: 30rpx auto;

		}

		// .sub{
		// 	width: 70vw;
		// 	margin: 30rpx auto;
		// 	display: flex;
		// 	align-items: center;
		// 	flex-direction: row;
		.sub_login {
			// flex: 3;
			width: 70vw;
			margin: 30rpx auto;
			text-align: center;
			color: #fff;
			background-color: #ff0000b8;
			font-weight: 600;
			padding: 25rpx;
			box-sizing: border-box;
			border-radius: 10px;
		}

		.registered {
			// flex: 1;
			width: 70vw;
			margin: 30rpx auto;
			text-align: center;
			color: #fff;
			background-color: #ff0000b8;
			font-weight: 600;
			padding: 25rpx;
			box-sizing: border-box;
			border-radius: 10px;
		}

		// }
	}
</style>
