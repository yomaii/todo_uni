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
				<view class="tag">
					<uni-tag  :circle="true" text="标签" size="big" type="error" inverted="true" />
				</view class="tag">
				<view class="tag">
					<uni-tag  :circle="true" text="标签" size="big" type="error" inverted="true" />
				</view>
				<view class="tag">
					<uni-tag  :circle="true" text=" + " size="big" type="error" inverted="true" />
				</view>
				<!-- <uni-tag class="tag" :circle="true" text="标签" type="error" inverted="true" />
				<uni-tag class="tag" :circle="true" text="标签" type="error" inverted="true" />
				<uni-tag class="tag" :circle="true" text="+" type="error" inverted="true" /> -->

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				avatar: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
				user_name: 'wenxi'
			}
		},
		methods: {

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
		flex-direction: column;
	}

	.title {
		flex: 1;
	}

	.content {
		flex: 5;
	}
	.tag{
		float: left;
		margin-left: 10rpx;
	}
</style>
