<template>
	<view class="page1">
		<u-mask :show="showMask" @click="showMask = false">
			<view class="warp">
				<u-loading mode="circle" :show="load"></u-loading>
			</view>
		</u-mask>
		<view class="nav">
			<u-navbar :background="background" :is-back="false" title="家人" title-size="44" title-color="white">
			</u-navbar>
		</view>
		<view>
			<view class="header1">
				<view class="first">
					<u-button class="second" type="primary" @click="openAddParent">
						<text class="third">+</text>
					</u-button>
					<view class="fourth">
						<view class="fifth">
							<u-swiper :current="current" bg-color="#2979FF" mode="number" :border-radius="200"
								:list="imagesData" :effect3d="false" @click="clickAvatar" @change="changeAvatar"
								:title="true" :autoplay="false" :height="270"></u-swiper>
						</view>
					</view>
				</view>
			</view>
			<view class="header2">
				<u-table>
					<u-tr class="u-tr">
						<u-th class="u-th">年龄</u-th>
						<u-th class="u-th">民族</u-th>
						<u-th class="u-th">老人类型</u-th>
						<u-th class="u-th">居住情况</u-th>
						<u-th class="u-th">更多</u-th>
					</u-tr>
					<u-tr class="u-tr">
						<u-td class="u-td">{{this.messageData.age}}</u-td>
						<u-td class="u-td">{{this.messageData.nation}}</u-td>
						<u-td class="u-td">{{this.messageData.elderType}}</u-td>
						<u-td class="u-td">{{this.messageData.livingSituation}}</u-td>
						<u-td class="u-td">
							<text @click="openInfo">...</text>
						</u-td>
					</u-tr>
				</u-table>
			</view>
			<view>
				<u-toast ref="uToast" />
				<u-cell-item @click="onClickInfo" title="平均血压" arrow-direction="down">
					<u-icon slot="icon" color="red" size="32" name="moments"></u-icon>
				</u-cell-item>
				<u-cell-item @click="onClickInfo" title="平均心率" arrow-direction="down">
					<u-icon slot="icon" color="orange" size="32" name="moments"></u-icon>
				</u-cell-item>
				<u-cell-item @click="onClickInfo" title="平均体温" arrow-direction="down">
					<u-icon slot="icon" color="yellow" size="32" name="moments"></u-icon>
				</u-cell-item>
				<u-cell-item @click="onClickInfo" title="平均睡眠" arrow-direction="down">
					<u-icon slot="icon" color="blue" size="32" name="moments"></u-icon>
				</u-cell-item>
				<!-- <uni-list class="header3">
					<uni-list-item title="列表文字" note="列表描述信息"></uni-list-item>
					<uni-list-item title="平均血压" note="120/78 mmHg" rightText="正常">
						<view slot="header" class="pj">
							<image class="pji" src="/static/images/blue.png" mode="widthFix" />
						</view>
					</uni-list-item>
					<uni-list-item title="平均心率" note="90/ms" rightText="正常">
						<view slot="header" class="pj">
							<image class="pji" src="/static/images/purple.png"
								mode="widthFix" />
						</view>
					</uni-list-item>
					<uni-list-item title="平均体温" note="37.2℃" rightText="正常">
						<view slot="header" class="pj">
							<image class="pji" src="/static/images/orange.png"
								mode="widthFix" />
						</view>
					</uni-list-item>
					<uni-list-item title="平均睡眠" note="8小时" rightText="正常">
						<view slot="header" class="pj">
							<image class="pji" src="/static/images/green.png" mode="widthFix" />
						</view>
					</uni-list-item>
				</uni-list> -->
			</view>
			<view class="header4">
				<location></location>
			</view>
		</view>
	</view>
</template>

<script>
	import location from '../../components/location.vue'
	import request from '../../api/request.js'
	import wgs84togcj02 from '../../static/js/tools.js'
	export default {
		components: {
			location
		},
		data() {
			return {
				showMask: true,
				load: true,
				form: {
					name: '', //老人姓名
					sex: '', //性别
					age: '', //年龄
					nation: '', //民族
					maritalStatus: '', //婚姻状况
					elderType: '', //老人类型
					livingSituation: '', //居住情况
					idNumber: '', //身份证
					picture: '', //图片
					birthday: '', //生日
					addressDetails: '', //具体到门牌号				
					province: '', //省
					city: '', //市
					county: '', //区县
				},
				background: {
					backgroundColor: '#007AFF',
				},
				title: '家人',
				data: [],
				messageData: [],
				imagesData: [],
				nullData: [{
					age: '无',
					name: '无',
					nation: '无',
					elderType: '无'
				}],
				current: 0,
				indexCurrent: 0,
			}
		},
		onLoad() {},
		mounted() {
			uni.setStorage({
				key: 'indexCurrent',
				data: 0,
				success: function() {
					// console.log('success');
				}
			})
			//获取老人信息
			request({
				url: `http://121.89.195.17/mall-portal/elder/list`,
				method: 'GET',
				success: (res) => {
					if (res.statusCode === 200) {
						// console.log(res.data)
						this.data = res.data.data
						// const len = this.data.length
						// for (var i = 0; i < this.data.length; i++) {
						// 	const imgs =
						// 		`http://39.100.69.246/intelligence-old/file/${this.data[i].picture}/query`
						// 	const names = this.data[i].name
						// 	this.imagesData.push({
						// 		image: imgs,
						// 		title: names
						// 	})
						// }
						this.messageData = this.data[0]
						// this.messageData = this.nullData
						// this.load = false
						// this.showMask = false
					}
				},
				fail: err => {
					console.log(err);
				},
			})
		},
		// onTabItemTap(){
		// 	//获取当前列表中的数据下标
		// 	this.indexCurrent = uni.getStorageSync('indexCurrent')
		// 	console.log(this.indexCurrent)
		// 	//获取老人信息
		// 	request({
		// 		url: `http://121.89.195.17/mall-portal/elder/list`,
		// 		method: 'GET',
		// 		success: (res) => {
		// 			if (res.statusCode === 200) {
		// 				// console.log(res.data)
		// 				this.data = res.data.data
		// 				const len = this.data.length
		// 				for (var i = 0; i < this.data.length; i++) {
		// 					var imgs =
		// 						`http://121.89.195.17/intelligence-old/file/${this.data[i].picture}/query`
		// 					var names = this.data[i].name
		// 					this.imagesData.push({
		// 						image: imgs,
		// 						title: names
		// 					})
		// 				}
		// 				this.messageData = this.data[this.indexCurrent]
		// 				this.load = false
		// 				this.showMask = false

		// 			}
		// 		},
		// 		fail: err => {
		// 			console.log(err);
		// 		},
		// 	})
		// },

		onShow() {
			//获取当前列表中的数据下标 
			this.load = false
			this.showMask = false
			this.indexCurrent = uni.getStorageSync('indexCurrent')
			console.log(this.indexCurrent)
			//获取老人信息
			request({
				url: `http://121.89.195.17/mall-portal/elder/list`,
				method: 'GET',
				success: (res) => {
					if (res.statusCode === 200) {
						// console.log(res.data)
						this.data = res.data.data
						const len = this.data.length
						for (var i = 0; i < this.data.length; i++) {
							var imgs =
								`http://121.89.195.17/intelligence-old/file/${this.data[i].picture}/query`
							var names = this.data[i].name
							this.imagesData.push({
								image: imgs,
								title: names
							})
						}
						this.messageData = this.data[this.indexCurrent]
					}
				},
				fail: err => {
					console.log(err);
				},
			})
		},
		onHide() {
			// this.data = []
			this.data.splice(this.data)
			// this.messageData.splice(this.messageData)
			this.messageData = []
			// this.imagesData = []
			this.imagesData.splice(0, this.imagesData.length)
			this.load = true
			this.showMask = true
			// uni.removeStorageSync('indexCurrent')
		},
		methods: {
			clickAvatar(e) {
				// console.log(e)
				for (var j = 0; j < this.data.length; j++) {
					if (j == e) {
						this.messageData = this.data[j]
						console.log(this.messageData)
					}
				}
			},
			changeAvatar(e) {
				// console.log(e)
				for (var j = 0; j < this.data.length; j++) {
					if (j == e) {
						this.messageData = this.data[j]
						// console.log(this.messageData)
					}
				}
				this.current = e
			},
			openAddParent() {
				uni.navigateTo({
					url: `/pages/addParent/addParent?current=` + this.current,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			openInfo() {
				let that = this;
				const elderData = JSON.stringify(that.messageData); // 这里转换成 字符串
				// console.log(elderData)
				uni.navigateTo({
					url: `/pages/editParent/editParent?olderList=` + encodeURIComponent(elderData) + `&current=` +
						this.current,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			onClickInfo() {
				this.$refs.uToast.show({
					title: '该功能需要和设备连接，还在开发当中，请耐心等待',
					type: 'warning',
				})
			},
			// getLoca() {
			// 	uni.getLocation({
			// 		type: 'wgs84',
			// 		success: function(res) {
			// 			console.log('当前位置的经度：' + res.longitude);
			// 			console.log('当前位置的纬度：' + res.latitude);
						
			// 		}
			// 	});
			// },
			
		}
	}
</script>

<style>
	.header1 {
		width: 100%;
		height: 25vh;
		border: 1rpx solid #007AFF;
		background-color: #007AFF;
		border-bottom-left-radius: 50%;
		border-bottom-right-radius: 50%;
	}

	.header2 {
		margin: 15rpx auto;
		width: 95%;
		/* height: 10%; */
		border: 0.5rpx solid white;
		box-shadow: 0 0 10rpx 0.5rpx gray;
	}

	.header3 {
		margin: 15rpx auto;
		width: 95%;
		/* height: 15%; */
		border: 0.5rpx solid white;
		box-shadow: 0 0 10rpx 0.5rpx gray;
	}

	.header4 {
		margin: 0 auto;
		/* height: 15%; */
		border: 0.5rpx solid white;
		box-shadow: 0 0 10rpx 0.5rpx gray;
	}

	page {
		height: 100%;
	}

	.page1 {
		/* padding: 0 30rpx;
	        margin-top: 20rpx; */
		width: 100%;
		height: 100%;
	}

	.u-tr {
		height: 100rpx;
	}

	.u-td {
		height: 100rpx;
	}

	.slot-content {
		width: 90%;
		margin: 0 auto;
	}

	.warp {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.rect {
		width: 120px;
		height: 120px;
		background-color: #fff;
	}

	.first {
		width: 80%;
		margin: 0 auto;
	}

	.second {
		width: 17%;
		height: 30%;
		background-color: #2979FF;
		float: right;
		margin-top: 15%;
	}

	.third {
		color: white;
		font-size: 80rpx;
	}

	.fourth {
		margin: 0 auto;
		width: 44.5%;
		float: left;
		margin-left: 26%;
		margin-top: 25rpx;
	}

	.fifth {
		width: 100%;
		text-align: center;
	}

	/* 平均血压 */
	.pj {
		margin-left: 10rpx;
		margin-right: 5%;
		margin-top: 1%;
	}

	.pji {
		width: 50rpx;
		height: 50rpx;
	}
</style>
