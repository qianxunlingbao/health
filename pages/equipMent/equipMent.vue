<template>
	<view class="page">
		<view>
			<u-navbar :background="background" :is-back="false" title-size="44" title="设备管理" title-color="white">
				<image style="
					width: 40rpx;
					height: 40rpx;
					margin-left: 35rpx;
					" @click="goBack()" src="../../static/images/back.png"></image>
				<view slot="right">

				</view>
			</u-navbar>
		</view>
		<view style="width: 90%;margin: 0 auto;line-height: 50rpx;margin-top: 20rpx;">
			<text>在线登录设备(1)</text>
			<br>
			<text style="color: gray;font-size: 20rpx;">下线后该设备账号会被退出，再次登录需要身份验证</text>
		</view>
		<view style="width: 100%;background-color: white;">
			<view style="width: 90%;margin: 0 auto;background-color: white;">
				<image style="width: 50rpx;height: 70rpx;float: left;" src="../../static/images/tel.png"></image>
				<text style="margin-left: 20rpx;float: left;margin-top: 15rpx;">
					HWJEF
					<span style="color: #1296db;margin-left: 10rpx;">(当前设备)</span>
				</text>
			</view>
			<br>
			<br>
			<view style="width: 90%;margin: 0 auto;background-color: white;margin-top: 2%;">
				<text style="color: gray;">设备类型：JEF-AN00</text><br>
				<text style="color: gray;">最近登录：2021-07-28 01：03</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				border: true,
				background: {
					backgroundColor: '#007AFF',
				},
			}
		},
		methods: {
			goBack() {
				// this.$refs.uToast.show({
				// 	title: '进入登录界面',
				// 	type: 'success',
				// 	url: '/pages/login/login',		
				// })
				uni.switchTab({
					url: `/pages/user/index`
				})
			},
		}
	}
</script>

<style scoped>
	page {
		height: 100%;
		background-color: #f3f4f6
	}

	.page-section-spacing {
		/* padding: 0 30rpx;
	        margin-top: 20rpx; */
		width: 100%;
		height: 100%;
	}
</style>
