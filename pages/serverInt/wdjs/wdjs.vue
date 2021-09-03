<template>
	<view>
		<view>
			<view style="background-color: #007AFF;">
				<u-row gutter="16" justify="space-around">
					<u-navbar height="50" :background="background" title-size="40" :is-back="false" title="网点介绍"
						title-color="white">
						<image style="
							width: 40rpx;
							height: 40rpx;
							margin-left: 25rpx;
							" @click="goBack()" src="../../../static/images/back.png"></image>
					</u-navbar>
				</u-row>
			</view>
			<view>
				<u-row gutter="16" justify="space-around">
					<!-- 轮播 -->

					<u-col span="12">
						<u-swiper :list="list"></u-swiper>
					</u-col>

					<u-col span="12" style="margin-top: 20rpx;">
						<view style="text-indent: 50rpx;line-height: 50rpx;">
							<text>
								日月星养是养老位于上海市中心普陀区远景路69号，占地面积5900余平方米，建筑面积13954平方米，设置床位459张。
							</text>
						</view>
						<view style="text-indent: 50rpx;line-height: 50rpx;">
							<text>
								既为自理老人提供环境优雅温馨的养老养生居所，又为因年迈或疾病困扰而不能自理老人提供精心的生活照料和医疗、康复护理服务，特别是对失能老人的照料护理具有显著特点。老人居室分为二人、三人、四人、多人间不同户型，结合老人需求及不同身体状况提供不同选择。房间内中央空调、电视、电话、冰箱、家具、独立卫生沐浴间等生活设施一应俱全。
							</text>
						</view>
					</u-col>
				</u-row>
			</view>
			<view style="
				margin: 0 auto;
				border: 0.5rpx solid white;
				box-shadow: 0 0 10rpx 0.5rpx gray;
			">
				<u-row gutter="16" justify="space-around">
					<u-col span="12">
						<location></location>	
					</u-col>
				</u-row>
			</view>
		</view>
	</view>
</template>

<script>
	import location from '../../../components/location.vue'
	import request from '../../../api/request.js'
	export default {
		components: {
			location
		},
		data() {
			return {
				background: {
					backgroundColor: '#007AFF',
				},
				value: '',
				list: [{
					image: '../../../static/images/xy.png'
				}],
				listdata: [{
						name: '日间照料',
						images: '../../../static/images/Massage.png'
					},
					{
						name: '剪甲服务',
						images: '../../../static/images/Tap.png'
					}, {
						name: '理发服务',
						images: '../../../static/images/Hairdryer.png'
					},
					{
						name: '整理床铺',
						images: '../../../static/images/Bunk.png'
					}, {
						name: '接送服务',
						images: '../../../static/images/Ambulance.png'
					},
					{
						name: '配医服务',
						images: '../../../static/images/Employees1.png'
					}, {
						name: '个人代理',
						images: '../../../static/images/Bathrobe.png'
					},
					{
						name: '代购服务',
						images: '../../../static/images/Shopping.png'
					}
				]
			}
		},
		onShow() {

		},
		mounted() {},
		methods: {
			goBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			//点击事件
			click(e) {
				console.log(e)
			},
			// },
			// 定位
			// locationType(e) {
			// 	this.locationTypeIndex = e.target.value;
			// 	this.locationTypeArrayType = this.locationTypeArray[this.locationTypeIndex]
			// },
		}
	}
</script>

<style lang="scss" scoped>
	/* 全局界面颜色,高度,宽度 */
	page {
		height: 100%;
	}

	.page1 {
		height: 100vh;
	}

	.slot-wrap {
		display: flex;
		align-items: center;
		padding: 0 30rpx;
	}

	.grid-text {
		font-size: 28rpx;
		margin-top: 4rpx;
		color: $u-type-info;
	}

	.top1 {
		width: 70%;
		height: 10vh;
	}
</style>
