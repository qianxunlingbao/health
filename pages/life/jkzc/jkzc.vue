<template>
	<view>
		<view>
			<view style="background-color: #007AFF;">
				<u-row gutter="16" justify="space-around">
						<u-navbar 
							height="50" 
							:background="background" 
							title-size="40" 
							:is-back="false" 
							title="健康助餐" 
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
					<u-col span="12" style="margin-bottom: 20rpx;">
						<u-swiper :list="list"></u-swiper>
					</u-col>
					<!-- 下方3x4布局 九宫格布局 -->
					<u-grid :col="4" :border="false">
						<u-grid-item v-for="(item,index) in listdata" :key="index">
							<view @click="click(index)">
								<view style="
									border-radius: 15%;
									width: 110rpx;
									height: 110rpx;
									background-color: #F4A460;">
									<image style="width: 80rpx;height: 70rpx;left: 15%;top: 18%;" :src="item.images"></image>
								</view>
								<text style="margin-left: 10rpx;">{{item.name}}</text>
							</view>
						</u-grid-item>
					</u-grid>
				</u-row>
			</view>
		</view>
	</view>
</template>

<script>
	import request from '../../../api/request.js'
	export default {
		data() {
			return {
				background: {
					backgroundColor: '#007AFF',
				},
				value: '',
				list: [{
					image: '../../../static/images/lifelife.png'
				}],
				listdata: [{
						name: '餐饮制作',
						images: '../../../static/images/Meal.png'
					},
					{
						name: '无糖水果',
						images: '../../../static/images/Pineapple.png'
					},{
						name: '半成品果蔬',
						images: '../../../static/images/Pistachio.png'
					},
					{
						name: '订餐服务',
						images: '../../../static/images/Table.png'
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
