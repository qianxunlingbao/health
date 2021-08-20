<template>
	<view class="page">
		<view>
			<u-navbar :background="background" :is-back="false" title-size="44" title="消息列表" title-color="white">
				<image style="
					width: 40rpx;
					height: 40rpx;
					margin-left: 35rpx;
					" @click="goBack()" src="../../../static/images/back.png"></image>
				<view slot="right">

				</view>
			</u-navbar>
		</view>
		<view style="
			width: 100%;
			margin: 0 auto;
			
		">
			<uni-list-item>
				<!-- 自定义 header -->
				<view slot="header">
					<u-avatar src="/static/images/tip.png" mode="circle">
					</u-avatar>
				</view>
				<!-- 自定义 body -->
				<view slot="body" style="width: 47%;">
					<view style="margin-left: 15rpx;">
						<text style="float:left;">系统消息</text>
						<br>
						<text style="float: left;margin-top: 10rpx;color: gray;font-size: 28rpx;">恭喜您注册成功</text>
					</view>
				</view>
				<!-- 自定义 footer-->
				<template slot="footer">
					<!-- <image style="width: 100rpx;height: 100rpx;" src="/static/images/Publishedsuccessfully.png"
						></image> -->
					<text style="font-size: 20rpx;color: gray;">2020-01-01 18：00</text>
				</template>
			</uni-list-item>
			<hr>
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

	.touxiang {}
</style>
