<template>
	<view class="page1">
		<view>
			<u-navbar :background="background" title-size="44" :is-back="false" title="待评价" title-color="white">
				<image style="
				width: 40rpx;
				height: 40rpx;
				margin-left: 35rpx;
				" @click="goBack()" src="../../static/images/back.png"></image>
			</u-navbar>
		</view>
		<view style="
			width: 100%;
			margin: 0 auto;
			background-color: white;
			height: 48vh;
			">
			<view style="float: left;width: 41%;height: 20vh;">
				<image style="
						width: 100%;
						height: 100%;
						" :src="srcImg">
				</image>
			</view>
			<view style="float: left;width: 59%;height: 20vh;margin-top: 1vh;">
				<text>海尔语音电子血压测量仪老人家用全自动高精准血压计医用量血压器</text>
				<br>
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
			<view style="float: left;width: 50%;height: 20vh;margin-left: 10%;line-height: 80rpx;">
				<text>售后服务：七天无理由退换</text>
				<br>
				<text>配送方式：普通配送</text>
				<br>
				<text>商家包邮</text>
				<br>
				<text>订单备注：选填</text>
			</view>
			<view style="float: left;width: 20%;height: 20vh;margin-left: 10%;">
				<view style="margin-top: 220%;">
					<u-button type="primary">立即评价</u-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: {
					backgroundColor: '#007AFF',
				},
				srcImg: '../../static/images/zhiliao.png',
			}
		},
		methods: {
			goBack() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style scoped>
	page {
		height: 100%;
		background-color: #f3f4f6
	}
</style>
