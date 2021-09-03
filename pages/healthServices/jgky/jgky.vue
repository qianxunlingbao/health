<template>
	<view>
		<view>
			<view style="background-color: #007AFF;">
				<u-row gutter="16" justify="space-around">
					<u-navbar height="50" :background="background" title-size="40" :is-back="false" title="商品分类"
						title-color="white">
						<image style="
							width: 40rpx;
							height: 40rpx;
							margin-left: 25rpx;
							" @click="goBack()" src="../../../static/images/back.png"></image>
						<view slot="right">
							<image style="width: 50rpx;height: 50rpx;margin-right: 10rpx;"
								src="../../../static/images/BigShoppingCart.png"></image>
						</view>
					</u-navbar>
				</u-row>
			</view>
			<view>
				<u-row gutter="16" justify="space-around">
					<u-col span="12">
						<view style="width: 40%;position: fixed;">
							<view style="
								float: left;
								width: 100%;
								height: 100rpx;
								background-color: #f3f4f6;
								border-bottom: gray solid 1rpx;
								text-align: center;
								line-height: 100rpx;
								" v-for="(item,index) in leftData" :key="index" @click="">
								<text>{{item.name}}</text>
							</view>
						</view>
						<view style="width: 59%;margin-left: 41%;">
							<view style="
								width: 80%;
								height: 200rpx;
								margin: 0 auto;
								padding: 10rpx 10rpx;
								">
								<image style="
									width: 100%;
									height: 100%;
									border-radius: 5%;
									" src="../../../static/images/lifelife.png"></image>
							</view>
							<u-grid :col="3" :border="false">
								<u-grid-item v-for="(item,index) in listdata" :key="index">
									<view @click="click(index)">
										<view style="
											border-radius: 15%;
											width: 110rpx;
											height: 110rpx;
											background-color: #f3f4f6;">
											<image style="width: 80rpx;height: 70rpx;left: 15%;top: 18%;" :src="item.images"></image>
										</view>
										<text style="margin-left: 10rpx;">{{item.name}}</text>
									</view>
								</u-grid-item>
							</u-grid>
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
				leftData: [{
						name: '医疗保健'
					},
					{
						name: '汽摩生活'
					},
					{
						name: '生鲜'
					},
					{
						name: '箱包'
					},
					{
						name: '玩具乐器'
					},
					{
						name: '钟表珠宝'
					},
					{
						name: '美妆护肤'
					},
					{
						name: '奢侈品'
					},
					{
						name: '计生情趣'
					}
				],
				listdata: [{
						name: '男科用药',
						images: '../../../static/images/Heartratemonitorfreeicon.png'
					},
					{
						name: '补益类',
						images: '../../../static/images/Heartwithlifelinevariant.png'
					},{
						name: '消化系统',
						images: '../../../static/images/Mansittinginhisjobdeskeatinglunch.png'
					},
					{
						name: '风湿骨外',
						images: '../../../static/images/Surveillancemonitorsscreensgroup.png'
					},{
						name: '维钙营养',
						images: '../../../static/images/Heartratemonitorfreeicon.png'
					},
					{
						name: '皮肤用药',
						images: '../../../static/images/Heartwithlifelinevariant.png'
					},{
						name: '泌尿系统',
						images: '../../../static/images/Mansittinginhisjobdeskeatinglunch.png'
					},
					{
						name: '妇科用药',
						images: '../../../static/images/Surveillancemonitorsscreensgroup.png'
					},
					{
						name: '儿科用药',
						images: '../../../static/images/Surveillancemonitorsscreensgroup.png'
					}
				]
			}
		},
		onShow() {
			request({
				url: `http://121.89.195.17/mall-portal/product/categoryTreeList`, //以树形结构获取所有商品分类
				method: 'GET',
				success: (res) => {
					if (res.statusCode === 200) {
						console.log(res.data)
						this.leftData = res.data.data
					}
				},
				fail: err => {
					console.log(err);
				},
			});
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
