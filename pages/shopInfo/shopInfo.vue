<template>
	<view class="page1">
		<view style="
			width: 100%;
			height: 10vh;
			background-color: #f3f4f6;
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
				"
				@click="goShop"
				>
				<text style="color: white;">加入购物车</text>
			</view>
		</view>
		<view class="nav">
			<u-navbar :background="background"  :is-back="false">
				<image style="
					width: 40rpx;
					height: 40rpx;
					margin-left: 35rpx;
					" 
					@click="goBack()"
					src="../../static/images/back.png"></image>
				<view class="bottom_title">
					<view :class="{'active':isActive == 1}" @click="checked(1)">
						商品
					</view>
				</view>
				<view class="bottom_title">
					<view :class="{'active':isActive == 2}" @click="checked(2)">
						评价
					</view>
				</view>
				<view class="bottom_title">
					<view :class="{'active':isActive == 3}" @click="checked(3)">
						详情
					</view>
				</view>
			</u-navbar>
		</view>
		<view class="content_nav" v-if="isActive == 1">
			<view>
				<view style="width: 100%;height: 50vh;">
					<image style="width: 100%;height: 100%;" src="../../static/images/shopInfo1.png"></image>
				</view>
				<view>
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
				<view>
					<text>
						海尔语音电子血压测量仪老人家用全自动高精准血压计医用量血压器
					</text>
				</view>
				<view>
					<text style="color: #fa3534;">
						智能记忆，语音播报，小乔便捷
					</text>
				</view>
				<view>
					<text style="color: gray;">1290人付款</text>
				</view>
				<view>
					<text style="color: gray;">包邮 苏州</text>
				</view>
				<view>
					<text>保障 假一赔四 急速忒快 七天无理由退换</text>
				</view>
			</view>
		</view>
		<view class="content_nav" v-if="isActive == 2">
			<view class="uni-padding-wrap">
			    <!-- 评论区 start -->
			    <view class="uni-comment">
			        <view class="uni-comment-list">
			            <view class="uni-comment-face">
			                <image src="../../static/images/touxiang1.png" mode="widthFix"></image>
			            </view>
			            <view class="uni-comment-body">
			                <view class="uni-comment-top">
			                    <text>网友</text>
			                </view>
			                <view class="uni-comment-date">
			                    <text>08/10 08:12</text>
			                </view>
			                <view class="uni-comment-content">家里有老人，自从家里有了这个鱼跃电子血压计之后，每天早上都测一次也能够判断药吃多少。这款血压计使用非常简单只需轻轻一按，没一会血压就有语音播报出来了，还会给你播报现在的血压是偏高还是偏低还是正常，两个字：买它！</view>
			            </view>
			        </view>
			        <view class="uni-comment-list">
			            <view class="uni-comment-face">
			                <image src="../../static/images/touxiang2.png" mode="widthFix"></image>
			            </view>
			            <view class="uni-comment-body">
			                <view class="uni-comment-top">
			                    <text>马克一天</text>
			                </view>
			                <view class="uni-comment-content">比实体店便宜很多。拿回来立马给孩子试了一下，还挺准的。样式也好看。</view>
			            </view>
			        </view>
			        <view class="uni-comment-list">
			            <view class="uni-comment-face">
			                <image src="../../static/images/touxiang3.png" mode="widthFix"></image>
			            </view>
			            <view class="uni-comment-body">
			                <view class="uni-comment-top">
			                    <text>今生缘</text>
			                </view>
			                <view class="uni-comment-content">qaq专门买给老人使用☔的,做工质量不⚡错哦,血☁压计不错,妈妈⚡很喜欢,性价比很高！值得购买！测☔量的也挺准确的,包🌀装也很好,老哥说质🌂量不错叫我可以买,功能强8大语☔音播报挺好的</view>
			                <view class="uni-comment-date">
			                    <text>08/10 07:55</text>
			                </view>
			            </view>
			        </view>
			        <view class="uni-comment-list">
			            <view class="uni-comment-face">
			                <image src="../../static/images/touxiang4.png" mode="widthFix"></image>
			            </view>
			            <view class="uni-comment-body">
			                <view class="uni-comment-top">
			                    <text>小猫咪</text>
			                </view>
			                <view class="uni-comment-content">很喜欢这个语音播报模式🌂,外包装完好☔,外观简单哦🌀,ya迫不及待拆开看了☁,还有物流超级快🌂,而且价格优惠🌁,内装充电电池非常完美！跟专卖店一样☔,主要有语音提示老人使用很方便🌀</view>
			                <view class="uni-comment-date">
			                    <view>2天前</view>
			                    <view class="uni-comment-replay-btn">5回复</view>
			                </view>
			            </view>
			        </view>
			    </view>
			</view>
		</view>
		<view class="content_nav" v-if="isActive == 3">
			<!-- <u-empty style="margin-top: 20vh;" mode="history"></u-empty> -->
			<view style="width: 100%;margin: 0 auto;height: 83vh;">
				<swiper class="swiper" indicator-dots="true" autoplay="true" interval="1800" duration="500">
					<swiper-item v-for="(item , index) in list" :key="index">
						<image :src="item.image" mode="">
						</image>
					</swiper-item>
				</swiper>
				<!-- <u-swiper 
					interval="1800" 
					duration="500"
					:list="list"
					mode="dot" 
					indicator-pos="topRight"
					:circular="true"
					:height="1500"
					></u-swiper> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isActive: 1,
				background: {
					backgroundColor: '#f3f4f6'
				},
				list: [{
						image: '../../static/images/shopping4.png',
					},
					{
						image: '../../static/images/shopInfo1.png',
					},
					{
						image: '../../static/images/shopping5.png',
					}
				],
			}
		},
		methods: {
			checked(id) {
				this.isActive = id
			},
			goBack() {
				uni.navigateBack({
					delta:1
				})
			},
			openConfirm() {
				uni.navigateTo({
					url: '../confirmPay/confirmPay'
				})
			},
			goShop(){
				uni.switchTab({
					url: '/pages/shop/index',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style scoped>
	
	.swiper {
		height: 100%;
	}
	
	/* swiper-item 里面的图片高度 */
	swiper-item image {
		width: 100%;
		height: 100%;
	}
	page {
		height: 100%;
	}
	
	.page1{
		width: 100%;
		height: 100vh;
	}
	.nav {
		width: 100%;
		background-color: #f3f4f6;
	}

	.flex_between {
		float: left;
		position: fixed;
		z-index: 10;
		background-color: #f3f4f6;
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
		z-index: 2;
		width: 100%;
	}

	.wrap {
		padding: 40rpx;
	}
	.uni-padding-wrap {
	    padding: 30upx;
	}
	.uni-comment {
	    padding: 5rpx 0;
	    display: flex;
	    flex-grow: 1;
	    flex-direction: column;
	}
	
	.uni-comment-list {
	    flex-wrap: nowrap;
	    padding: 10rpx 0;
	    margin: 10rpx 0;
	    width: 100%;
	    display: flex;
	}
	
	.uni-comment-face {
	    width: 70upx;
	    height: 70upx;
	    border-radius: 100%;
	    margin-right: 20upx;
	    flex-shrink: 0;
	    overflow: hidden;
	}
	
	.uni-comment-face image {
	    width: 100%;
	    border-radius: 100%;
	}
	
	.uni-comment-body {
	    width: 100%;
	}
	
	.uni-comment-top {
	    line-height: 1.5em;
	    justify-content: space-between;
	}
	
	.uni-comment-top text {
	    color: #0A98D5;
	    font-size: 24upx;
	}
	
	.uni-comment-date {
	    line-height: 38upx;
	    flex-direction: row;
	    justify-content: space-between;
	    display: flex !important;
	    flex-grow: 1;
	}
	
	.uni-comment-date view {
	    color: #666666;
	    font-size: 24upx;
	    line-height: 38upx;
	}
	
	.uni-comment-content {
	    line-height: 1.6em;
	    font-size: 28upx;
	    padding: 8rpx 0;
	}
	
	.uni-comment-replay-btn {
	    background: #FFF;
	    font-size: 24upx;
	    line-height: 28upx;
	    padding: 5rpx 20upx;
	    border-radius: 30upx;
	    color: #333 !important;
	    margin: 0 10upx;
	}
</style>
