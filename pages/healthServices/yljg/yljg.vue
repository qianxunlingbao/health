<template>
	<view>
		<view>
			<view style="background-color: #007AFF;">
				<u-row gutter="16" justify="space-around">
						<u-navbar 
							height="50" 
							:background="background" 
							title-size="40" 
							:is-back="false" 
							title="医疗机构" 
							title-color="white">
							<image style="
							width: 40rpx;
							height: 40rpx;
							margin-left: 25rpx;
							" @click="goBack()" src="../../../static/images/back.png"></image>
						</u-navbar>
				</u-row>
			</view>
			<view>
				<u-row gutter="16" justify="space-around">
					<!-- 轮播 -->
					<u-col span="12" style="margin-bottom: 20rpx;background-color: #007AFF;height: 20vh;">
						<u-col span="12">
							<u-swiper style="border-radius: 8%;" :list="list"></u-swiper>
						</u-col>
					</u-col>
					<u-col span="12" style="margin-top: 20rpx;">
						<view style="text-align: center;">
							<text >
								让我们"有备而老"
							</text>
						</view>
						<view style="text-indent: 50rpx;">
							<text >据统计，我国目前人均预期寿命是75岁，健康的预期寿命是68岁，其中有7年时间老年人是与疾病相伴的。据世界银行预测，到2030年，人口老龄化将使我们国家的慢病负担增长40%。专家认为，相对庞大的老年医疗服务需求，我们目前能够提供的医疗卫生服务能力明显不足，居家养老是全世界公认的理想养老模式，但也需要医疗服务的无缝对接。为此，学者专家提出了未来四种医养结合的模式，寄望医养结合成为我国积极应对人口老龄化的一个长久之计。
								《中国老龄产业发展报告(2014)》显示，2013年，中国老年人口数量已经达到2.02亿，其中65岁以上老人已经达到了10%，半失能、失能、失智老人近4000万，完全失能老人达到100万左右。据统计，我国目前人均预期寿命是75岁，健康的预期寿命是68岁，其中有7年时间老年人是与疾病相伴的。据世界银行预测，到2030年，人口老龄化将使我们国家的慢病负担增长40%。专家认为，相对庞大的老年医疗服务需求，我们目前能够提供的医疗卫生服务能力明显不足，居家养老是全世界公认的理想养老模式，但也需要医疗服务的无缝对接。为此，学者专家提出了未来四种医养结合的模式，寄望医养结合成为我国积极应对人口老龄化的一个长久之计。
							</text>
						</view>
					</u-col>
				</u-row>
			</view>
		</view>
	</view>
</template>

<script>
	import request from '../../../api/request.js'
	export default {
		data() {
			return {
				background: {
					backgroundColor: '#007AFF',
				},
				value: '',
				list: [{
					image: '../../../static/images/lifelife.png'
				}],
				listdata: [{
						name: '日间照料',
						images: '../../../static/images/Massage.png'
					},
					{
						name: '剪甲服务',
						images: '../../../static/images/Tap.png'
					},{
						name: '理发服务',
						images: '../../../static/images/Hairdryer.png'
					},
					{
						name: '整理床铺',
						images: '../../../static/images/Bunk.png'
					},{
						name: '接送服务',
						images: '../../../static/images/Ambulance.png'
					},
					{
						name: '配医服务',
						images: '../../../static/images/Employees1.png'
					},{
						name: '个人代理',
						images: '../../../static/images/Bathrobe.png'
					},
					{
						name: '代购服务',
						images: '../../../static/images/Shopping.png'
					}
				]
			}
		},
		onShow() {

		},
		mounted() {},
		methods: {
			goBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			//点击事件
			click(e) {
				console.log(e)
			},
			// },
			// 定位
			// locationType(e) {
			// 	this.locationTypeIndex = e.target.value;
			// 	this.locationTypeArrayType = this.locationTypeArray[this.locationTypeIndex]
			// },
		}
	}
</script>

<style lang="scss" scoped>
	/* 全局界面颜色,高度,宽度 */
	page {
		height: 100%;
	}

	.page1 {
		height: 100vh;
	}

	.slot-wrap {
		display: flex;
		align-items: center;
		padding: 0 30rpx;
	}

	.grid-text {
		font-size: 28rpx;
		margin-top: 4rpx;
		color: $u-type-info;
	}

	.top1 {
		width: 70%;
		height: 10vh;
	}
</style>
