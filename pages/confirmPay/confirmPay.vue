<template>
	<view class="page1">
		<view style="
			width: 100%;
			height: 10vh;
			background-color: #c0c4cc;
			position: fixed;
			z-index: 10;
			margin-top: 90vh;
		">
			<view style="float: left;margin-top: 50rpx;margin-left: 180rpx;">
				<text>共一件</text>

			</view>
			<view style="float: left;margin-top: 40rpx;margin-left: 20rpx;">
				<text>合计：<span style="color: orange;font-size: 40rpx;">￥99</span></text>

			</view>
			<u-toast ref="uToast" />
			<view style="
				float: right;
				width: 30%;
				height: 100%;
				background-color: #fa3534;
				text-align: center;
				padding-top: 50rpx
				">
				<text @click="goPay" style="color: white;">立即付款</text>
			</view>

		</view>
		<view class="nav">
			<u-navbar :background="background" title-size="44" :is-back="false" title="确认订单">
				<image style="
					width: 40rpx;
					height: 40rpx;
					margin-left: 35rpx;
					" @click="goBack()" src="../../static/images/back.png"></image>
			</u-navbar>
		</view>
		<view class="content_nav">
			<view style="
				width: 100%;
				height: 12vh;
				background-color: white;
				border-bottom: 1rpx solid gray;
				">
				<image style="
					width: 100rpx;
					height: 100rpx;
					margin-top: 30rpx;
					float: left;
					margin-left: 50rpx;" src="../../static/images/location1.png">
				</image>
				<view class="uni-form-item uni-column" style="margin-top: 65rpx;float: left;">
					<picker @change="locationType" :range="locationTypeArray">
						<label class="">{{ locationTypeArrayType }}</label>
					</picker>
				</view>
			</view>
			<view>
				<uni-list>
					<uni-list-item>
						<view slot="header">
							<image style="
								width: 230rpx;
								height: 280rpx;
								" :src="srcImg">
							</image>
							<view>
								<text>售后服务：七天无理由退换</text>
								<br>
								<text>配送方式：普通配送</text>
								<br>
								<text>商家包邮</text>
								<br>
								<text>订单备注：选填</text>
							</view>
						</view>
						<view slot="body">
							<text>海尔语音电子血压测量仪老人家用全自动高精准血压计医用量血压器</text>
							<br>
							<text style="color: #F0AD4E;">
								爱心价￥99
								<span style="color: gray;">
									原价
								</span>
								<span style="color: gray;text-decoration: line-through;">
									￥170
								</span>
							</text>
						</view>
					</uni-list-item>
				</uni-list>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: {
					backgroundColor: '#c8c9cc',
				},
				srcImg: '../../static/images/zhiliao.png',
				show: false,
				locationTypeArray: [
					'石家庄裕华区', 
					'石家庄长安区', 
					'石家庄桥西区'
					],
				locationTypeIndex: 0,
				locationTypeArrayType: '请选择收货地址',
			}
		},
		methods: {
			checked(id) {
				this.isActive = id
			},
			confirm(e) {
				console.log(e);
			},
			goBack() {
				uni.navigateBack({
					delta:1
				})
			},
			pickChange(e) {
				console.log(e)
			},
			locationType(e) {
				this.locationTypeIndex = e.target.value;
				this.locationTypeArrayType = this.locationTypeArray[this.locationTypeIndex]
			},
			goPay(){
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
			}
		}
	}
</script>

<style scoped>
	page {
		height: 100%;
	}

	.page1 {
		width: 100%;
		height: 100%;
	}

	.nav {
		width: 100%;
		background-color: #c8c9cc;
	}

	.flex_between {
		float: left;
		position: fixed;
		z-index: 10;
		background-color: #c8c9cc;
		height: 70rpx;
		width: 100%;
	}

	.bottom_title {
		float: left;
		margin-left: 100rpx;
		margin-top: 6rpx;
		font-size: 36rpx;
	}

	.bottom_title:active {
		color: #F0AD4E;
	}

	.content_nav {
		z-index: 2;
		width: 100%;
	}

	.wrap {
		padding: 40rpx;
	}
</style>
