<template>
	<view>
		<view>
			<u-navbar :is-back="false" :background="background" title-size="44" back-icon-color="white" title="我的"
				title-color="white">
				<view slot="right">
					<image @click="openMessage" style="width: 80rpx;height: 70rpx;"
						src="../../static/images/xiaoxi.png"></image>
				</view>
			</u-navbar>
		</view>
		<view class="page1">
			<view class="header">
				<view style="padding-top: 10%;" v-if="this.showInfo == false">
					<u-button type="success" @click="login" class="anniu">立即登录</u-button>
				</view>
				<view style="width: 70%;margin: 0 auto;padding-top: 4%;">
					<u-avatar :src="src" mode="circle" v-if="this.showInfo == true">
					</u-avatar>
					<view style="
						width: 10%;
						position: absolute;
						margin-top: -13%;
						margin-left: 15%;
						">
						<text style="float: left;font-size: 45rpx;color: white;" v-if="this.showInfo == true">
							{{this.infoData.username}}
						</text>
						<u-button style="float: left;width: 150rpx;height: 35rpx;background-color: #20B2AA"
							type="success" v-if="this.showInfo == true">实名认证</u-button>
					</view>
				</view>
				<!-- <view style="color: white;margin-top: 10%;margin: 0 auto;width: 78.8%;height: 30%;">
					<view style="text-align: center;width: 25%;float: left;margin-left: 7%;">
						<text>15</text><br>
						<text>我的参与</text>
					</view>
					<view style="text-align: center;width: 25%;float: left;margin-left: 7%;">
						<text>72h</text><br>
						<text>公益时长</text>
					</view>
					<view style="text-align: center;width: 25%;float: left;margin-left: 6.5%;">
						<text>320</text><br>
						<text>我的积分</text>
					</view>
				</view> -->
			</view>
			<!-- <view class="top">
				<u-grid :col="4">
					<u-grid-item>
						<image @click="firstClick" class="top1" src="../../static/images/car.png"></image>
						<view class="grid-text">待发货</view>
					</u-grid-item>
					<u-grid-item>
						<image @click="secondClick" class="top1" src="../../static/images/car1.png"></image>
						<view class="grid-text">待收货</view>
					</u-grid-item>
					<u-grid-item>
						<image @click="thirdClick" class="top1" src="../../static/images/car2.png"></image>
						<view class="grid-text">待评价</view>
					</u-grid-item>
					<u-grid-item>
						<image @click="fourthClick" class="top1" src="../../static/images/car3.png"></image>
						<view class="grid-text">全部订单</view>
					</u-grid-item>
				</u-grid>
			</view> -->
			<u-toast ref="uToast1" />
			<u-row gutter="16" justify="space-around">
				<u-col span="12" style="margin-bottom: 20rpx;">
					<uni-list>
						<uni-list-item style="height: 100rpx;" link @click="click(index)" v-for="(item,index) in data" :key="index">
							<view slot="header" style="margin-left: 0rpx;margin-right: 5%;margin-top: 4%;">
								<image style="width: 50rpx;height: 50rpx;" :src="item.image" />
							</view>
							<view slot="body" style="margin-top: 5%">
								<text >{{item.name}}</text><br><br>
							</view>
						</uni-list-item>
					</uni-list>
				</u-col>
			</u-row>
			<view class="foot">
				<u-toast ref="uToast" />
				<u-modal v-model="show" :content="content"></u-modal>
				<!-- <u-button @click="login" v-if="this.showInfo" class="anniu">登录</u-button> -->
				<u-button size="default" @click="open" v-if="this.showInfo" class="anniu">退出登录</u-button>
				<!-- <u-button @click="open" v-if="this.showInfo" class="anniu">退出登录</u-button>
				<u-button @click="login" v-if="this.showLogin" class="anniu">登录</u-button> -->
			</view>
		</view>
	</view>
</template>

<script>
	import tabBar from '../../components/tarBar/tabBar.vue'
	import request from '../../api/request.js'
	export default {
		components: {
			tabBar
		},
		data() {
			return {
				data: [{
						name: '基本信息',
						image: '../../static/images/my.png'
					},
					{
						name: '家人管理',
						image: '../../static/images/Employees.png'
					},
					{
						name: '问诊记录',
						image: '../../static/images/Surgeo.png'
					},
					{
						name: '设备管理',
						image: '../../static/images/sbgl.png'
					},
					{
						name: '我的购买',
						image: '../../static/images/shop.png'
					},
					{
						name: '我的参与',
						image: '../../static/images/Myparticipation.png'
					},
					{
						name: '修改密码',
						image: '../../static/images/Locked.png'
					},
				],
				infoData: [],
				title: '我的',
				background: {
					backgroundColor: '#007AFF',
				},
				message: '',
				show: false,
				showInfo: false,
				showLogin: false,
				content: '欢迎下次登录',
				info: 0,
				src: 'https://img1.baidu.com/it/u=1675999867,1545632604&fm=26&fmt=auto&gp=0.jpg',
			}
		},
		onShow() {
			this.info = uni.getStorageSync('info')
			console.log(this.info)
			if (this.info == 1) {
				this.showInfo = true
				request({
					url: `http://121.89.195.17/mall-portal/sso/info`, //获取会员信息
					method: 'GET',
					// dataType: 'json',
					success: (res) => {
						if (res.statusCode === 200) {
							console.log(res.data)
							this.infoData = res.data.data
							console.log(this.infoData.username)
						}
					},
					fail: err => {
						console.log(err);
					},
				});
			}
		},
		mounted() {},
		methods: {
			click(e){
				console.log(e)
				if(e == 0){ //基本信息
					uni.navigateTo({
						url: '/pages/user/userMessage/userMessage'
					})
				}
				if(e == 1){ //家人管理
					uni.navigateTo({
						url: '/pages/user/parentManage/parentManage'
					})
				}
				if(e == 2){//问诊记录
					uni.navigateTo({
						url: '/pages/myInquiry/index'
					})
				}
				if(e == 3){//设备管理
					uni.navigateTo({
						url: '/pages/equipMent/equipMent'
					})
				}
				if(e == 4){//我的购买
					
				}
				if(e == 5){//我的参与
					uni.navigateTo({
						url: '/pages/user/activitis/activitis'
					})
				}
				if(e == 6){//修改密码
					uni.navigateTo({
						url: '/pages/editPass/editPass'
					})
				}
			},
			open() {
				this.show = true
				this.showInfo = false
				this.showLogin = true
				uni.removeStorageSync('storage_key')
				uni.removeStorageSync('info')
			},
			//进入登录界面
			login() {
				// this.$refs.uToast.show({
				// 	title: '进入登录界面',
				// 	type: 'success',
				// 	duration: 200,
				// 	url: '/pages/login/login',		
				// })
				uni.redirectTo({
					url: '/pages/login/login',
				})
				// uni.removeStorage('storage_key')
				// this.show = false
				// this.showInfo = true
				// this.showLogin = false
			},
			//待发货
			firstClick() {
				uni.navigateTo({
					url: '/pages/toBeShipped/toBeShipped'
				})
			},
			//待收货
			secondClick() {
				uni.navigateTo({
					url: '/pages/receivedGoods/receivedGoods'
				})
			},
			//待评价
			thirdClick() {
				uni.navigateTo({
					url: '/pages/evaluatedTo/evaluatedTo'
				})
			},
			//全部订单
			fourthClick() {
				uni.navigateTo({
					url: '/pages/allOrders/allOrders'
				})
			},
			//打开消息
			openMessage() {
				uni.navigateTo({
					url: '/pages/user/message/message'
				})
			},
		}
	}
</script>

<style scoped>
	/* 头部蓝色背景 */
	.header {
		width: 100%;
		height: 15%;
		background-color: #007AFF;
		border-bottom-left-radius: 50%;
		border-bottom-right-radius: 50%;
	}

	.top {
		margin: 15rpx auto;
		width: 95%;
		height: 15vh;
		border: 0.5rpx solid white;
		box-shadow: 0 0 10rpx 0.5rpx gray;
	}

	/* 登录或者退出登录按钮的位置 */
	.foot {
		margin-top: 5vh;
	}

	/* 全局界面颜色,高度,宽度 */
	page {
		height: 100%;
	}

	.page1 {
		height: 100vh;
	}

	/* 用户头像
	.touxiang{ */
	/* 		width: 20%;
		height: 55%; */
	/* 	margin-left: 15%;
		margin-top: 5%;
	} */
	/* 用户名称 */
	/* .user{
		color: white;
		font-size: 40rpx;
		position: absolute;
		margin-top: 5%;
		margin-left: 3%;
	}
	 */
	/* 待发货列表横向 */
	.top1 {
		width: 70%;
		height: 7vh;
	}

	/* 家人管理列表 */
	.center1 {
		margin-left: 10rpx;
		margin-right: 5%;
		margin-top: 1%;
	}

	.center2 {
		margin-left: -8rpx;
		margin-right: 2.5%;
		margin-top: 1%;
	}

	/* 家人管理列表中的图片大小 */
	.imgCenter {
		width: 50rpx;
		height: 50rpx;
	}

	.imgCenter1 {
		width: 80rpx;
		height: 50rpx;
	}

	.anniu {
		font-size: 40rpx;
		/* width: 100%; */
	}
</style>
