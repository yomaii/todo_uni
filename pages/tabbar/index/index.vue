<template>
  <view class="ListContainer">
    <u-sticky bgColor="#f8f8f8">
      <!-- 添加待办 -->
      <view class="addBox">
        <uni-easyinput
          class="uni-mt-5"
          prefixIcon="plusempty"
          suffixIcon="arrow-right"
          v-model="value"
          placeholder="输入待办事项..."
          @iconClick="iconClick"
        ></uni-easyinput>
        <!-- <view class="iconBtn"></view> -->
      </view>
      <!-- 标签行（类别） -->
      <!-- current="0":设置当前选中的选项 -->
      <u-tabs
        :list="list4"
        lineWidth="20"
        lineHeight="7"
        :current="current"
        :activeStyle="{
          color: '#303133',
          fontWeight: 'bold',
          transform: 'scale(1.05)',
        }"
        :inactiveStyle="{
          color: '#606266',
          transform: 'scale(1)',
        }"
        itemStyle="padding-left: 15px; padding-right: 15px; height: 34px; opacity:1"
        @change="change"
      >
      </u-tabs>
    </u-sticky>
    <!-- 列表 -->
    <u-list @scrolltolower="scrolltolower">
      <!-- 判断是否没有list，没有显示图片-->
      <u-empty
        v-if="indexList.length == 0"
        mode="list"
        icon="http://cdn.uviewui.com/uview/empty/list.png"
      >
      </u-empty>
      <u-list-item v-else v-for="(item, index) in indexList" :key="index">
        <view class="itemCell" v-if="item.type == currentCategory">
          <view class="checkBox" @click="checked(item)">
            <span
              class="circle"
              :style="{
                color: item.finished == true ? '#cb2d01' : '#ffffff',
                'font-size': item.finished == true ? '30rpx' : '10rpx',
              }"
              >√</span
            >
          </view>
          {{ item.title }}

          <!-- 时间 -->
          <view class="time">{{ item.date | formatDate }}</view>
          <!-- 删除 -->
          <view class="delete" @click="deleted(index)"
            ><uni-icons type="trash-filled" size="20"></uni-icons>
          </view>
        </view>
      </u-list-item>
    </u-list>
  </view>
</template>

<script>
const listData = require("../../../data/list.json");
export default {
  data() {
    return {
      // 添加框
      value: "",
      placeholderStyle: "color:#2979FF;font-size:14px",
      styles: {
        color: "#2979FF",
        borderColor: "#2979FF",
      },
      // tab
      list4: [
        // {type:"测试"}
      ],
      current: 0,
      currentCategory: "",
      // 列表
      indexList: listData,
    };
  },



  onLoad() {
    // this.loadmore()
    uni.navigateTo({
      // url: '/pages/function/fun-order/order?id='+id,
      url: "/pages/function/login/login",
    });
  },

 

  methods: {
    //从Storage取数据
    getInfo() {
      uni.getStorage({
        key: "userInfo",
        success(res) {
          return res.data;
        },
      });
    },
    setInfo() {
      if (this.getInfo()) {
        return true;
      } else {
        uni.setStorage({
          //存入Storage
          key: "userInfo", //自己取个名字
          data: listData,
          success() {
            console.log("userInfo储存成功");
          },
        });
      }
    },

    updateList() {
      uni.setStorageSync("userInfo", this.indexList);
    },
    // 添加框事件
    input(e) {
      console.log("输入内容：", e);
    },
    iconClick(type) {
      if (type === "suffix") {
        // 跳转到添加示例详情页面
        uni.navigateTo({
          // url: '/pages/function/fun-order/order?id='+id,
          url: "/pages/function/addListDetail/addListDetail",
        });
      }
    },
    change(index) {
      // console.log(index);
      this.current = index.index;
      this.currentCategory = this.list4[this.current].name;
    },
    checked(item) {
      // let ret = JSON.parse(JSON.stringify(item))
      // item变为选中状态
      item.finished = !item.finished;
    },

    // 获取类别
    getType() {
      let ret = JSON.parse(JSON.stringify(this.indexList));
      // let arr=[]
      // console.log(ret[1].type);
      for (let i = 0; i < ret.length; i++) {
        let obj = {};
        // obj.id=ret[i].id
        obj.name = ret[i].type;
        this.list4[i] = obj;
      }
      let len = this.list4.length;
      for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
          if (this.list4[i].name === this.list4[j].name) {
            this.list4.splice(j, 1);
            len--; // 减少循环次数提高性能
            j--; // 保证j的值自加后不变
          }
        }
      }
      this.list4 = JSON.parse(JSON.stringify(this.list4));
      console.log(this.list4);
    },
    // 删除
    deleted(index) {
      this.indexList.splice(index, 1);
      this.updateList();
    },
  },
  mounted() {
    // console.log("第一个type"+this.list4[0].type)
  },
  onLoad() {
	uni.navigateTo({
	  // url: '/pages/function/fun-order/order?id='+id,
	  url: "/pages/function/login/login",
	});  
    this.getType();
    this.currentCategory = this.list4[0].name;
  },
  created() {
    this.setInfo();
  },
  filters: {
    formatDate: function (value) {
      var date = new Date();
      //date.setTime(value);
      var month = date.getMonth() + 1;
      var hours = date.getHours();
      if (hours < 10) hours = "0" + hours;
      var minutes = date.getMinutes();
      if (minutes < 10) minutes = "0" + minutes;
      var time = date.getFullYear() + "-" + month + "-" + date.getDate();
      return time;
    },
  },
};
</script>

<style lang="scss">
.itemCell {
  height: 65rpx;
  line-height: 65rpx;
  width: 97%;
  background-color: #ffffff;
  margin: 7rpx 10rpx;
  .delete {
    display: inline-block;
    float: right;
    margin-right: 20rpx;
  }
  .time {
    display: inline-block;
    margin-right: 20rpx;
    float: right;
  }

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
</style>
