<template>
	<view class="page1">
		<view>
			<u-navbar :background="background" title-size="44" :is-back="false" title="待收货" title-color="white">
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
						<view>
							<text>售后服务：七天无理由退换</text>
							<br>
							<text>配送方式：普通配送</text>
							<br>
							<text>商家包邮</text>
							<br>
							<text>订单备注：选填</text>
						</view>
					</view>
					<view slot="body">
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
					</view>
					<view slot="footer">
						<view style="margin-top: 200%;">
							<u-button type="warning">确认收货</u-button>
						</view>
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
