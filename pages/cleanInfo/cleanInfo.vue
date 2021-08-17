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
			<view
				@click="openConfirm"
				style="
				float: right;
				width: 30%;
				height: 100%;
				background-color: #fa3534;
				text-align: center;
				padding-top: 50rpx
				">
				<text style="color: white;">立即购买</text>
			</view>
			<view style="
				float: right;
				width: 30%;
				height: 100%;
				background-color: orange;
				text-align: center;
				padding-top: 50rpx;
				margin-right: 5rpx;
				">
				<text style="color: white;">加入购物车</text>
			</view>
		</view>
		<view class="nav">
			<u-navbar :background="background" title-size="44" :is-back="false" title="家政清洁" title-color="white">
				<image style="
					width: 40rpx;
					height: 40rpx;
					margin-left: 35rpx;
					" 
					@click="goBack()"
					src="../../static/images/back.png"></image>
			</u-navbar>
		</view>
		<view class="content_nav">
			<view>
				<image style="width: 100%;height: 25vh;" src="../../static/images/clean.png"></image>
				<text style="color: orange;font-size: 40rpx;">￥56.00</text><br>
				<text>阿姨到家，家政服务钟点工清洁，上门日常保洁</text>
				<hr style="margin-top: 20rpx;">
				<view>
					<text style="color: gray;">已售51</text>
				</view>
				<hr style="margin-top: 20rpx;">
				<uni-list>
					<uni-list-item note="适用商户">
					</uni-list-item>
					<uni-list-item>
						<view slot="body">
							<view>
								<text>阿姨到家</text>
							</view>
							<view>
								<u-rate style="float: left;" :count="count" v-model="value"></u-rate>
								<text style="margin-left: 20rpx;">{{ this.value}}分</text>
							</view>
						</view>
						<view slot="footer">
							<image style="width: 100rpx;height: 100rpx;margin-left: 300rpx;" src="../../static/images/phone.png"></image>
						</view>
					</uni-list-item>
					<uni-list-item>
						<view slot="header" style="width: 100%;">
							<image style="width: 100rpx;height: 100rpx;float: left;" src="../../static/images/location1.png"></image>
							<view style="margin-top: 30rpx;"><text>河北石家庄雨花区181号</text></view>
						</view>
					</uni-list-item>
				</uni-list>
				<view>
					<text>用户评论</text>
					<hr style="margin-top: 20rpx;margin-bottom: 20rpx;">
					<view>
						<image style="width: 100rpx;height: 100rpx;float: left;" src="../../static/images/location1.png"></image>
						<view style="padding-top: 30rpx;"><text>气死你</text></view>
					</view>
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
				back: '<',
				value: 0,
			}
		},
		methods: {
			checked(id) {
				this.isActive = id
			},
			goBack() {
				uni.redirectTo({
					url: '../houseKeeping/index'
				})
			},
			openConfirm() {
				uni.redirectTo({
					url: '../confirmPay/confirmPay'
				})
			}
		}
	}
</script>

<style scoped>
	page {
		height: 100%;
	}
	
	.page1{
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
		margin: 0 auto;
		width: 95%;
	}

	.wrap {
		padding: 40rpx;
	}
</style>
