export function setInfo() {
const listData =require('./list.json')
	let getInfo = uni.getStorage({
		key: 'userInfo',
		success(res) {
			return res.data;
		}
	})

	if (getInfo) {
		return true
	} else {
		uni.setStorage({ //存入Storage
			key: 'userInfo', //自己取个名字
			data: listData,
			success() {
				console.log('userInfo储存成功');
			}
		})
	}

}