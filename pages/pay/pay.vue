<template>
	<view class="page1">
		<view>
			<u-navbar :background="background" title-size="44" back-icon-color="white" title="支付结果" title-color="white">	
			</u-navbar>
		</view>
		<view class="healthy">
			<view style="
				width: 80%;
				height: 250rpx;
				margin: 0 auto;
				text-align: center;
				margin-top: 25vh;
			">
				<image style="width: 100%;height: 30vh;" src="../../static/images/Paymentsuccessful.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				title: '支付结果',
				border: true,
				width: '',
				height: '',
				background: {
					backgroundColor: '#c8c9cc'
				},
			}
		},
		methods: {
			openMyInquiry(){
				uni.navigateTo({
					url: '/pages/myInquiry/index',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
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
	.badge {
		background-color: red;
		color: white;
	}

	.healthy {
		margin: 0 auto;
		width: 90%;
	}
</style>
