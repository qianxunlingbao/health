<template>
	<view class="page-section-spacing">
		<!-- <u-button style="
			position: fixed; 
			margin-top: 5%;
			margin-left: 70%;
			opacity: 0.5;
			background-color: #cdcdcd;
			" type="primary" size="medium" @click="click1()">
			<text style="color: #007AFF;">跳过</text>
		</u-button> -->
		<swiper class="swiper" indicator-dots="true" autoplay="true" interval="1800" duration="500">
			<swiper-item v-for="(item , index) in list" :key="index">
				<image :src="item.image" mode="">
				</image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				height: '',
				current: 0,
				list: [{
						image: '../../static/images/guide1.png',
					},
					{
						image: '../../static/images/guide2.png',
					},
					{
						image: '../../static/images/guide3.png',
					}
				],
			}
		},
		onLoad() {
			// let _this = this;
			// uni.getSystemInfo({
			// 	success: function(res) {
			// 		_this.height = res.screenHeight
			// 		console.log(_this.height)
			// 	}
			// });
		},
		mounted() {
			setTimeout(function() {
				uni.navigateTo({
					url: `/pages/login/login`
				})
			}, 5000);
		},
		methods: {
			click1() {
				uni.navigateTo({
					url: `/pages/login/login`
				})
			}
		}
	}
</script>

<style>
	page {
		height: 100%;
	}

	/* 轮播图 */
	.page-section-spacing {
		/* padding: 0 30rpx;
	        margin-top: 20rpx; */
		width: 100%;
		height: 100%;
	}

	.swiper {
		height: 100%;
	}

	/* swiper-item 里面的图片高度 */
	swiper-item image {
		width: 100%;
		height: 100%;
	}
</style>
