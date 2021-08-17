<template>
	<view class="page1">
		<view class="nav">
			<u-navbar :background="background" title-size="44" :is-back="false" title="购物车" title-color="white">
			</u-navbar>
		</view>
		<view style="position: fixed;margin-top: 79vh;margin-left: 45%;">
			<u-button shape="circle" type="warning" size="medium">
				<span style="float: left">已选择{{totalNum}}</span>
				<span style="float: right;margin-left: 30%;">结算{{totalPrice}} </span>
			</u-button>
			<!-- <view class="end-left">
				<checkbox-group @change="selectedall()">
					<checkbox class="" :checked="allchecked" />全选
				</checkbox-group>
				<view>总计:<text style="color: #f00;font-weight: bold;">￥ {{totalPrice}}</text></view>
			</view> -->
			<u-toast ref="uToast" />
			<!-- <view class="end-right" @click="openPay">
				结算({{totalNum}})
			</view> -->
		</view>
		<view>
			<uni-list>
				<uni-list-item v-for="(item,index) in size" :key="index">
					<view slot="header">
						<checkbox-group @change="selected(item)">
							<checkbox class="xuanzhong" color="#E36452" :checked="checked" />
						</checkbox-group>
						<image :src="item.goodsImage" mode="widthFix" style="width: 230rpx;
							height: 280rpx;"></image>
					</view>
					<view slot="body" @click="goShop">
						<text>{{item.size}}</text>
						<br>
						<br>
						<text style="color: #F0AD4E;">
							爱心价￥{{item.price1}}
							<span style="color: gray;">
								原价
							</span>
							<span style="color: gray;text-decoration: line-through;">
								￥{{item.price2}}
							</span>
						</text>
						<br>
						<br>
						<text>{{item.number}}人付款</text>
					</view>
					<view slot="footer" style="margin-top: 120rpx;margin-left: -100rpx;">
						<image src="../../static/images/delete.png" mode="widthFix" style="width: 35rpx;"
							@click="delht(item,index)">
						</image>
						<view style="width: 100%;"><text style="font-size: 50rpx;">...</text></view>
						<!-- <u-button type="warning" style="width: 10rpx;height: 40rpx;" @click="reduce(item)">-</u-button>
						<text style="font-size: 40rpx;margin-left: 27rpx;">{{item.num}}</text>
						<u-button type="warning" style="width: 10rpx;height: 40rpx;" @click="add(item)">+</u-button> -->
					</view>
				</uni-list-item>
			</uni-list>
		</view>
	</view>

</template>

<script>
	import tabBar from '../../components/tarBar/tabBar.vue'
	export default {
		components: {
			tabBar
		},
		data() {
			return {
				background: {
					backgroundColor: '#007AFF',
				},
				show: true,
				allchecked: true,
				checked: true,
				size: [{
						size: "海尔语音电子血压测量仪老人家用全自动高精准血压计医用量血压器",
						num: 1,
						flag: true,
						price: 149,
						price1: 99,
						price2: 170,
						number: 1290,
						goodsImage: "../../static/images/zhiliao.png",
					},
					{
						size: "海尔语音电子血压测量仪老人家用全自动高精准血压计医用量血压器",
						num: 1,
						flag: true,
						price: 149,
						price1: 99,
						price2: 170,
						number: 1290,
						goodsImage: "../../static/images/zhiliao.png",
					}
				],

			}
		},
		methods: {
			goShop() {
				uni.navigateTo({
					url: '../shopInfo/shopInfo'
				})
			},
			openPay() {
				this.$refs.uToast.show({
					title: '界面还在赶工',
					type: 'warning',
					// duration: 200,
					// url: '/pages/editPass/editPass'
				})
				// uni.navigateTo({
				// 	url: '/pages/pay/pay',
				// 	success: res => {},
				// 	fail: () => {},
				// 	complete: () => {}
				// });
			},
			delht(item, index) {
				// this.size.splice(index, 1)
				uni.showModal({
					content: '是否删除此商品',
					success: (res) => {
						if (res.confirm) {
							console.log('确定');
							this.size.splice(index, 1)
							if (this.size.length == 0) {
								this.show = false
							}
						} else if (res.cancel) {
							console.log('取消')
						}
					}
				})
			},
			selected(item) {
				item.flag = !item.flag
				if (!item.flag) {
					this.allchecked = false
				} else {
					const test = this.size.every(item => {
						return item.flag === true
					})
					if (test) {
						this.allchecked = true
					} else {
						this.allchecked = false
					}
				}
				// this.checked=!this.checked
				// this.totalNum()
			},
			// selectedall() {
			// 	this.allchecked = !this.allchecked
			// 	if (this.allchecked) {
			// 		this.size.map(item => {
			// 			this.checked = true
			// 			item.flag = true
			// 		})
			// 	} else {
			// 		this.checked = false
			// 		this.size.map(item => {
			// 			item.flag = false

			// 		})
			// 	}
			// },
			// reduce(item) {
			// 	let num = item.num
			// 	// item.num = num-1
			// 	// if(num <=0){
			// 	//  return;
			// 	// }
			// 	if (num > 0) {
			// 		num -= 1
			// 	} else {
			// 		num = 0
			// 		return
			// 	}
			// 	item.num = num
			// },
			// add(item) {
			// 	console.log(item.num)
			// 	let num = item.num
			// 	item.num = num + 1
			// }
		},
		computed: {
			//计算选中商品的总价
			totalNum() {
				let totalNum = 0;
				this.size.map(item => {
					item.flag ? totalNum += item.num : totalNum += 0
				})
				return totalNum
			},
			totalPrice() {
				let totalPrice = 0;
				this.size.map(item => {
					item.flag ? totalPrice += item.num * item.price : totalPrice += 0
				})
				return totalPrice
			}
		},
	}
</script>


<style lang="scss" scoped>
	page {
		height: 100%;
	}

	.page1 {
		width: 100%;
		height: 100%;
	}

	.goods {
		line-height: 80rpx;
		background-color: #fff;

		&-top {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 30rpx;
			border-bottom: 8rpx solid #F1F1F1;

			.name {
				color: #333;
				font-size: 31rpx;
				font-weight: bold;
			}
		}

		&-detail {
			display: flex;
			padding: 30rpx 15rpx 30rpx 30rpx;
			background-color: #fff;
			justify-content: space-between;
			border-bottom: 5rpx solid #F1F1F1;
			align-items: center;

			.detail-left {
				display: flex;

				.left {
					display: flex;
					align-items: center;
				}
			}

			.size {
				display: flex;
				justify-content: space-around;
				flex-direction: column;
				margin-left: 30rpx;

				.goods-price {
					font-size: 25rpx;
					color: #F44545;

				}
			}

			.right {
				text {
					width: 50rpx;
					line-height: 50rpx;
					text-align: center;
					display: inline-block;
					background-color: #F7F7F7;
					margin-right: 10rpx;
				}

				.add {
					color: #FA4305;
					border-radius: 10rpx 30rpx 30rpx 10rpx;
					margin-right: 20rpx;
				}

				.subtract {
					border-radius: 30rpx 10rpx 10rpx 30rpx;
				}
			}
		}

	}

	.notGoods {
		position: relative;
		top: 220rpx;
		text-align: center;
		display: flex;
		align-items: center;
		flex-direction: column;

		// line-height: 1334rpx;
		&-text {
			color: #808080;
			margin-bottom: 50rpx;
		}

		&-button {
			width: 260rpx;
			height: 70rpx;
			color: #F44545;
			border: 1rpx solid #F44545;
			text-align: center;
			line-height: 70rpx;
			border-radius: 48rpx;
		}
	}
</style>
