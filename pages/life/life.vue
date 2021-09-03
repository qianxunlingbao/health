<template>
	<view>
		<view>
			<view style="background-color: #007AFF;">
				<u-row gutter="16" justify="space-around" style="height: 80rpx;">
					<u-col span="5">
						<image style="
							width: 50rpx;
							height: 50rpx;
							float: left;" src="../../static/images/posi.png">
						</image>
						<view style="display: flex;">
							<text style="color: white;margin-top: 8rpx;">顺平县</text>
						</view>
					</u-col>
					<u-col span="6">
						<u-search bg-color="white" :height="55" shape="square" :show-action="true" action-text="搜索" :animation="true"></u-search>
					</u-col>
				</u-row>
			</view>
			<view>
				<u-row gutter="16" justify="space-around">
					<!-- 轮播 -->
					<u-col span="12" style="margin-bottom: 20rpx;">
						<u-swiper :list="list"></u-swiper>
					</u-col>
					<!-- 下方3x4布局 -->
					<u-col span="4" v-for="(item,index) in listdata" :key="index">
						<view style="height: 180rpx;position: relative;" @click="click(index)">
							<view style="position: absolute;z-index: 10;">
								<text
									style="font-size: 30rpx;padding: 10rpx;float: left;">{{item.name}}</text>
								<image style="
									height: 85rpx;
									width: 70rpx;
									float: left;
									margin-top: 60rpx;
									margin-left: 10rpx;
									" :src="item.imagess"></image>
							</view>
							<image style="
								height: 160rpx;
								width: 100%;
								z-index: 0;" 
								:src="item.images">
							</image>	
						</view>
					</u-col>
				</u-row>
			</view>
		</view>
	</view>
</template>

<script>
	import request from '../../api/request.js'
	export default {
		data() {
			return {
				background: {
					backgroundColor: '#f4f4f5',
				},
				value: '',
				list: [{
					image: '../../static/images/jiankang.png'
				}],
				listdata: [{
						name: '日间照料',
						images: '../../static/images/background.png',
						imagess: '../../static/images/Bookwithbookmarkfreeicon.png'
					},
					{
						name: '度假旅游',
						images: '../../static/images/background.png',
						imagess: '../../static/images/Hotel.png'
					},
					{
						name: '家政服务',
						images: '../../static/images/background.png',
						imagess: '../../static/images/closedscroll.png'
					},
					{
						name: '健康助餐',
						images: '../../static/images/background2.png',
						imagess: '../../static/images/Dinner.png'
					},
					{
						name: '生态康养',
						images: '../../static/images/background2.png',
						imagess: '../../static/images/Leaf.png'
					},
					{
						name: '智慧服务',
						images: '../../static/images/background2.png',
						imagess: '../../static/images/House.png'
					},
					{
						name: '心理咨询',
						images: '../../static/images/background3.png',
						imagess: '../../static/images/Healthcare.png'
					},
					{
						name: '教育培训',
						images: '../../static/images/background3.png',
						imagess: '../../static/images/Books.png'
					},
					{
						name: '临终关怀',
						images: '../../static/images/background3.png',
						imagess: '../../static/images/Information.png'
					}
				]
			}
		},
		onShow() {

		},
		mounted() {},
		methods: {
			//点击事件
			click(e) {
				console.log(e)
				if (e == 0) { //日间照料
					uni.navigateTo({
						url: `/pages/life/rjzl/rjzl`
					})
				}
				if (e == 2) { //家政服务
					uni.navigateTo({
						url: `/pages/life/jzfw/jzfw`
					})
				}
				if (e == 3) { //健康助餐
					uni.navigateTo({
						url: `/pages/life/jkzc/jkzc`
					})
				}
				if (e == 4) { //生态康养
					uni.navigateTo({
						url: `/pages/life/stky/stky`
					})
				}
				if (e == 6) { //心理咨询
					uni.navigateTo({
						url: `/pages/life/xlzx/xlzx`
					})
				}
				if (e == 8) { // 临终关怀
					uni.navigateTo({ 
						url: `/pages/life/lzgh/lzgh`
					})
				}
			
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
