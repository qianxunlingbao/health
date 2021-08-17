<template>
	<view class="page1">
		<view class="nav">
			<u-navbar :background="background" title-size="44" :is-back="false" title="活动详情" title-color="white">
				<image style="
					width: 40rpx;
					height: 40rpx;
					margin-left: 35rpx;
					" @click="goBack()" src="../../../static/images/back.png"></image>
			</u-navbar>
		</view>
		<view>
			<view class="fengmian">
				<image style="
					width: 100%;
					height: 100%;
					border-radius: 3%;
					" src="../../../static/images/volunteer1.png"></image>
			</view>
			<view style="
				width: 98%;
				margin: 0 auto;
				text-align: center;
				margin-top: 3vh;
				">
				<text>志愿者爱心助老活动</text>
			</view>
			<view style="
				width: 90%;
				margin: 0 auto;
				line-height: 50rpx;
				margin-top: 2vh;
				color: gray;
				margin-bottom: 5vh;
				">
				<text>具体招募要求如下：</text><br>
				<text>一、服务时间地点</text><br>
				<text>1.时间：8：45-17：00(含中餐)</text><br>
				<text>2.地点：杭州市党群服务中心(城市阳台)</text><br>
				<text>二、招募人数</text><br>
				<text>100名志愿者引导员</text><br>
				<text>三、招募条件</text><br>
				<text>1.身心健康、普通话标准、18-60周岁，具有一定的语言表达能力；</text><br>
				<text>2.每周能连续服务2天以上，工作日能服务者优先</text><br>
				<text>3.家庭志愿者、功勋志愿者、优秀志愿者、热心支援服务且具有讲解服务经验者优先。</text><br>
			</view>
		</view>
		<u-button type="warning" style="font-size: 40rpx;">立即报名</u-button>
	</view>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				title: '活动详情',
				background: {
					backgroundColor: '#FF4500',
				},
			}
		},
		created() {

		},
		methods: {
			goBack() {
				uni.navigateBack({
					delta: 1
				})
			},
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

	.fengmian {
		margin: 0 auto;
		width: 95%;
		height: 25vh;
		margin-top: 1vw;
	}
</style>
