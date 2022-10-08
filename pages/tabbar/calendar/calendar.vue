<template>
	<view>
		<view class="calendar-content" v-if="showCalendar">
			<view>
				<!-- 插入模式 -->
				<uni-calendar class="uni-calendar--hook" :showMonth="true" @change="change"
					@monthSwitch="monthSwitch" />
			</view>



		</view>
		<view class="list">
			<view class="title">今日待办:</view>
			<ul class="listItem">
				<li v-for="(item, index) in indexList" :key="index"
				><span  v-show="item.date==currentDate">
					<!--  -->
					<view class="checkBox" @click="checked(item)">
						<span class="circle"
							:style="{'color':item.finished==true?'#cb2d01':'#ffffff','font-size':item.finished==true?'30rpx':'10rpx'}">√</span>
					</view>
					{{item.title}}</span>
					
				</li>
			</ul>
		</view>


	</view>
</template>

<script>
	/**
	 * 获取任意时间
	 */
	function getDate(date, AddDayCount = 0) {
		if (!date) {
			date = new Date()
		}
		if (typeof date !== 'object') {
			date = date.replace(/-/g, '/')
		}
		const dd = new Date(date)

		dd.setDate(dd.getDate() + AddDayCount) // 获取AddDayCount天后的日期

		const y = dd.getFullYear()
		const m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1 // 获取当前月份的日期，不足10补0
		const d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate() // 获取当前几号，不足10补0
		return {
			fullDate: y + '-' + m + '-' + d,
			year: y,
			month: m,
			date: d,
			day: dd.getDay()
		}
	}

	export default {
		data() {
			return {
				showCalendar: false,
				info: {
					lunar: true,
					range: true,
					insert: false,
					selected: []
				},
				current: 0,
				currentCategory: "",
				// 列表
				indexList: [
				],
				// 选中日期
				currentDate:'2022-10-9'


			}
		},
		onReady() {
			this.$nextTick(() => {
				this.showCalendar = true
			})
			// TODO 模拟请求异步同步数据
			setTimeout(() => {
				this.info.date = getDate(new Date(), -30).fullDate
				this.info.startDate = getDate(new Date(), -60).fullDate
				this.info.endDate = getDate(new Date(), 30).fullDate
			}, 2000)
		},
		methods: {
			// 获取当前日期
			getCurrentDate(){
				const r=getDate()
				this.currentDate=r.fullDate;
				
			},
			change(e) {
				// console.log("===========");
				console.log(e.fulldate);
			
			},
			checked(item) {
				let ret = JSON.parse(JSON.stringify(item))
				// item变为选中状态
				item.checked = !item.checked;
			},
			formatDate(value) {
				var date = new Date();
				//date.setTime(value);
				var month = date.getMonth() + 1;
				var hours = date.getHours();
				if (hours < 10)
					hours = "0" + hours;
				var minutes = date.getMinutes();
				if (minutes < 10)
					minutes = "0" + minutes;
				var time = date.getFullYear() + "-" + month + "-" + date.getDate();
				return time;
			},
			getInfo() {
						let _this = this
						uni.getStorage({
							key: 'userInfo',
							success(res) {
								_this.indexList = res.data
							}
						});			
			},
			transformDate(){
				for(let i=0;i<this.indexList.length;i++){
					this.indexList[i]['date']=this.formatDate(this.indexList[i].date)
				}
				console.log(this.indexList);
			}
		},
		mounted() {
			this.getCurrentDate()
			this.getInfo();
			this.transformDate()
			
		},
		filters: {
			formatDate: function(value) {
				var date = new Date();
				//date.setTime(value);
				var month = date.getMonth() + 1;
				var hours = date.getHours();
				if (hours < 10)
					hours = "0" + hours;
				var minutes = date.getMinutes();
				if (minutes < 10)
					minutes = "0" + minutes;
				var time = date.getFullYear() + "-" + month + "-" + date.getDate();
				return time;
			}
		
		}
	}
</script>

<style lang="scss">
	.example-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
	}

	.calendar-button {
		flex: 1;
		font-weight: bold;
		font-size: 32rpx;
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

	/deep/.uni-calendar-item--isDay {
		background-color: pink;
	}
</style>
