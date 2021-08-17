<template>
	<view class="page1">
		<view>
			<u-navbar :is-back="false" :background="background" back-icon-color="white" title-size="44" title="在线问诊" title-color="white">
				<image style="
					width: 40rpx;
					height: 40rpx;
					margin-left: 35rpx;
					" 
					@click="goBack()"
					src="../../static/images/back.png"></image>
			</u-navbar>
		</view>
		<view class="healthy">
			<view style="
				width: 80%;
				height: 250rpx;
				margin: 0 auto;
				text-align: center;
				margin-top: 450rpx;
			">
				<text style="color: #007AFF;font-size: 20px;">恭喜您提交成功</text><br><br>
				<text style="color: #007AFF;font-size: 20px;">请在《我的问诊》中查看</text>
			</view>
			<navigator url="/pages/inquiry/index" open-type="navigate">
			    <view style="
					width: 70%;
					height: 60rpx;
					margin: 0 auto;
					text-align: center;
					border: 1rpx solid #007AFF;
					background-color: #007AFF;
					">
					<text style="
						font-size: 40rpx;
						color: white;
					">返回</text>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				title: '在线问诊-成功',
				background: {
					backgroundColor: '#007AFF',
				},

			}
		},
		created() {

		},
		methods: {
			goBack(){
				uni.navigateTo({
					url: '/pages/inquiry/index',
					success: res => {},
					fail: () => {},
					complete: () => {}
				})
			},
			openMyInquiry() {
				uni.navigateTo({
					url: '/pages/index/index',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			submit1() {
				uni.navigateTo({
					url: 'pages/inquiry/index',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
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

	.badge {
		background-color: red;
		color: white;
	}

	.healthy {
		margin: 0 auto;
		width: 90%;
	}
</style>
