<template>
	<view>

		<view class="card">
			<view class="user">
				<image class="avatar" :src="avatar" mode="aspectFit"></image>
				<text class="name">{{user_name}}</text>
			</view>
		</view>
		<!-- <uni-card title="基础卡片" extra="额外信息" is-shadow="false">
			<text class="uni-body">这是一个基础卡片示例，此示例展示了一个标题加标题额外信息的标准卡片。</text>
		</uni-card> -->
		<view class="card classification">
			<view class="title">分类</view>
			<view class="content">
				<view class="tag" v-for="item in group">
					<text>{{item}}</text>
				</view>
				<view class="tag" @click="inputDialogToggle">+</view>
			</view>
		</view>
		<view>
			<!-- 输入框示例 -->
			<uni-popup ref="inputDialog" type="dialog">
				<uni-popup-dialog ref="inputClose" mode="input" title="新建分类" placeholder="请输入分类名称"
					@confirm="dialogInputConfirm"></uni-popup-dialog>
			</uni-popup>
		</view>
	<!-- 	<view class="card classification">
			<view class="title">计划</view>
			<view class="content">
				<view class="tag">单词</view>
				<view class="tag">+</view>
			</view>
		</view> -->
        <view class="card logout" @click="logout"><text >退出登录</text></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				avatar: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
				user_name: 'wenxi',
				group: ['测试类别', '公司'],
			}
		},
		methods: {
			logout(){
				uni.navigateTo({
				  // url: '/pages/function/fun-order/order?id='+id,
				  url: "/pages/function/login/login",
				});
				
			},
			inputDialogToggle() {
				this.$refs.inputDialog.open();
				// let a = request('C:\Users\dwxstc\Desktop\终端\todo_uni\data')
				// let b = JSON.stringify(a)
				// console.log(b)
			},
			dialogInputConfirm(val) {
				if(val == ''){
					uni.showLoading({
						title: '分类名不能为空'
					})
					setTimeout(() => {
						uni.hideLoading()
						
						this.$refs.inputDialog.close()
					}, 500)
					return
				}
				uni.showLoading({
					title: '添加成功',
					icon : 'success'
				})

				setTimeout(() => {
					uni.hideLoading()
					console.log(val)
					this.group.push(val)
					// 关闭窗口后，恢复默认内容
					this.$refs.inputDialog.close()
				}, 500)
			},
		}
	}
</script>

<style>
	* {
		font-size: 40rpx;
		color: #7e5f61
	}

	.card {
		margin: auto;
		width: 95vw;
		height: 300rpx;
		background-color: #fff;
		border-radius: 10px;
		display: flex;
		margin-top: 2.5vw;
		padding: 20rpx;
		box-sizing: border-box;
	}

	.user {
		margin: auto;
		width: 150rpx;
		height: 150rpx;
		/* overflow: hidden; */
		border-radius: 50%;
		text-align: center;
	}

	.avatar {
		width: 150rpx;
		height: 150rpx;
	}

	.name {}

	.classification {
		height: auto;
		display: flex;
		flex-direction: column;
	}

	.title {
		flex: 1;
	}

	.content {
		flex: 5;

	}

	.tag {
		margin-top: 10rpx;
		text-align: center;
		float: left;
		margin-left: 15rpx;
		min-width: 20rpx;
		border: 1px solid red;
		color: red;
		border-radius: 15px;
		padding: 5rpx 15rpx;
		font-weight: 500;
	}
	.logout{
	    height: auto;
		text-align: center;
		color: #fff;
		background-color: #ff0000b8;
		font-weight: 600;
		padding: 30rpx;
		box-sizing: border-box;
	}
	.logout text{
		margin: auto;
	}
</style>
