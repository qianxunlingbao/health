<template>
	<view class="page1">
		<view>
			<u-navbar :background="background" title-size="44" :is-back="false" title="全部订单" title-color="white">
			<image style="
				width: 40rpx;
				height: 40rpx;
				margin-left: 35rpx;
				" 
				@click="goBack()"
				src="../../static/images/back.png"></image>
			</u-navbar>
		</view>
		<view>
			<uni-list>
				<uni-list-item>
					<view slot="header">
						<image style="
							width: 230rpx;
							height: 280rpx;
							" :src="srcImg">
						</image>
					</view>
					<view slot="body" @click="openShopInfo" >
						<text>海尔语音电子血压测量仪老人家用全自动高精准血压计医用量血压器</text>
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
						<br>
						<br>
						<br>
						<text>1290人付款</text>
					</view>
					<view slot="footer" style="margin-top: 200rpx;">
						<text style="font-size: 50rpx;">...</text>
					</view>
				</uni-list-item>
			</uni-list>
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
			goBack(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style>

</style>
