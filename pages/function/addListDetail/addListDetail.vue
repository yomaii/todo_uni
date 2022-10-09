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
				<view class="city" ><input v-model="city" type="text"  /></view>
				<!-- <uni-combox :candidates="candidates" placeholder="选择" v-model="city"></uni-combox> -->
			</view>
			<span>日期：</span>
			<view class="date">
				<uni-datetime-picker type="date" :value="single"  @change="change" />
			</view>
			<!-- 描述 -->
		</view>
		<u--textarea v-model="value1" placeholder="描述"></u--textarea>
<button class="CompleteBtn" type="warn" @click="addSuccess">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indexList: [],
				// 添加框
				value: '',
				value1:'',
				placeholderStyle: "color:#2979FF;font-size:14px",
				styles: {
					color: '#2979FF',
					borderColor: '#2979FF'
				},
				// 分类框:
				candidates: [],
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
				// 获取类别
				// getType() {
				// 	let ret = JSON.parse(JSON.stringify(this.indexList))
				// 	// let arr=[]
				// 	// console.log(ret[1].type);
				// 	for (let i = 0; i < ret.length; i++) {
				// 		let obj = ''
				// 		// obj.id=ret[i].id
				// 		obj= ret[i].type
				// 		this.candidates[i] = obj
				
				// 	}
				// 	let len = this.candidates.length
				// 	for (let i = 0; i < len; i++) {
				// 		for (let j = i + 1; j < len; j++) {
				// 			if (this.candidates[i].name == this.candidates[j].name) {
				// 				this.candidates.splice(j, 1)
				// 				len-- // 减少循环次数提高性能
				// 	   j-- // 保证j的值自加后不变
				// 			}
				// 		}
				// 	}
				// 	this.candidates = JSON.parse(JSON.stringify(this.candidates))
				// 	// console.log(this.candidates);
				// },
				
				addSuccess(){

					let obj={}
					obj.id=this.indexList.length;
					obj.title=this.value;
					obj.finished=false;
					obj.date=this.single;
					obj.repeate=false;
					obj.type=this.city;
					obj.describe=this.value1;
					console.log(obj);
					this.indexList.push(obj)
					this.indexList=JSON.parse(this.insexList)
					uni.setStorageSync('userInfo',this.indexList)
					this.returnLast()
					console.log(this.indexList);
				},
				returnLast(){
					
					uni.navigateBack({ 
						//uni.navigateTo跳转的返回，默认1为返回上一级
						delta:1
});
				}
				
		},
		created(){
			this.getInfo();
			
		},
		mounted() {
			setTimeout(() => {
				this.datetimesingle = "2022-10-1";
				this.single = "2022-10-1";
			}, 1000);
			
		},
		
		
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
.city {
	float: right;
	width: 100rpx;
	height: 65rpx;
	margin-top: 8rpx;
	
	margin-left: 20rpx;
	border-radius: 10rpx;
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
	.CompleteBtn{
			margin-top: 40rpx;
		}
</style>
