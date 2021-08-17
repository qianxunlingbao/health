<template>
	<view class="page1">
		<view class="nav">
			<u-navbar :background="background" title-size="44" :is-back="false" title="我的" title-color="white">
			</u-navbar>
		</view>
		<view class="header">
			<view style="padding-top: 10%;" v-if="this.showInfo == false">
				<u-button type="success" @click="login" class="anniu">立即登录</u-button>
			</view>
			<u-avatar 
				class="touxiang"
				:src="src" mode="circle" v-if="this.showInfo == true">
			</u-avatar>
			<text class="user" v-if="this.showInfo == true">
				{{this.infoData.username}}
			</text>
		</view>
		<view class="top">
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
		</view>
		<u-toast ref="uToast1" />
		<view style="margin: 15rpx auto;
		width: 95%;
		border: 0.5rpx solid white;
		box-shadow: 0 0 10rpx 0.5rpx gray;">
			<u-cell-item @click="openParent" title="家人管理" arrow-direction="down">
				<u-icon slot="icon" color="red" size="32" name="moments"></u-icon>
			</u-cell-item>
			<u-cell-item @click="openMyinqury" title="我的问诊" arrow-direction="down">
				<u-icon slot="icon" color="orange" size="32" name="moments"></u-icon>
			</u-cell-item>
			<u-cell-item @click="openEquipMent" title="设备管理" arrow-direction="down">
				<u-icon slot="icon" color="yellow" size="32" name="moments"></u-icon>
			</u-cell-item>
			<u-cell-item @click="openEditPass" title="修改密码" arrow-direction="down">
				<u-icon slot="icon" color="blue" size="32" name="moments"></u-icon>
			</u-cell-item>
			<!-- <uni-list>
				<uni-list-item title="家人管理" note="Family management" showArrow>
					<view slot="header" class="center1">
						<image class="imgCenter" src="/static/images/Employees.png" mode="widthFix" />
					</view>
				</uni-list-item>
				<uni-list-item title="我的问诊" note="My consultation" showArrow>
					<view slot="header" class="center1">
						<image class="imgCenter" src="/static/images/Surgeo.png" mode="widthFix" />
					</view>
				</uni-list-item>
				<uni-list-item @click="openEquipMent" link title="设备管理" note="device management" showArrow>
					<view slot="header" class="center2">
						<image class="imgCenter1" src="/static/images/car4.png" mode="widthFix" />
					</view>
				</uni-list-item>
				<uni-list-item @click="openEditPass" link title="修改密码" note="Change Password" showArrow>
					<view slot="header" class="center1">
						<image class="imgCenter" src="/static/images/Locked.png" mode="widthFix" />
					</view>
				</uni-list-item>
			</uni-list> -->
		</view>
		<view class="foot">
			<u-toast ref="uToast" />
			<u-modal v-model="show" :content="content"></u-modal>
			<!-- <u-button @click="login" v-if="this.showInfo" class="anniu">登录</u-button> -->
			<u-button @click="open" v-if="this.showInfo" class="anniu">退出登录</u-button>
			<!-- <u-button @click="open" v-if="this.showInfo" class="anniu">退出登录</u-button>
			<u-button @click="login" v-if="this.showLogin" class="anniu">登录</u-button> -->
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
				infoData:[],
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
			if(this.info == 1){
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
		mounted() {
		},
		methods: {
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
					url:'/pages/login/login',
				})
				// uni.removeStorage('storage_key')
				// this.show = false
				// this.showInfo = true
				// this.showLogin = false
			},
			//修改密码
			openEditPass(){
				// this.$refs.uToast1.show({
				// 	title: '修改密码',
				// 	type: 'warning',
				// 	duration: 200,
				// 	url: '/pages/editPass/editPass'
				// })
				uni.redirectTo({
					url:'/pages/editPass/editPass'
				})
			},
			//设备管理
			openEquipMent(){
				// this.$refs.uToast1.show({
				// 	title: '设备管理',
				// 	type: 'warning',
				// 	duration: 200,
				// 	url: '/pages/equipMent/equipMent'
				// })
				uni.redirectTo({
					url:'/pages/equipMent/equipMent'
				})
			},
			//待发货
			firstClick() {
				uni.navigateTo({
					url:'/pages/toBeShipped/toBeShipped'
				})
			},
			//待收货
			secondClick() {
				uni.navigateTo({
					url:'/pages/receivedGoods/receivedGoods'
				})
			},
			//待评价
			thirdClick() {
				uni.navigateTo({
					url:'/pages/evaluatedTo/evaluatedTo'
				})
			},
			//全部订单
			fourthClick() {
				uni.navigateTo({
					url:'/pages/allOrders/allOrders'
				})
			},
			//我的问诊
			openMyinqury(){
				uni.navigateTo({
					url:'/pages/myInquiry/index'
				})
			},
			//家人管理
			openParent(){
				this.$refs.uToast1.show({
					title: '界面还在赶工',
					type: 'warning',
					// duration: 200,
					// url: '/pages/editPass/editPass'
				})
			}
		}
	}
</script>

<style scoped>
	/* 头部蓝色背景 */
	.header {
		width: 100%;
		height: 280rpx;
		background-color: #007AFF;
		border-bottom-left-radius: 50%;
		border-bottom-right-radius: 50%;
	}
	.top{
		margin: 15rpx auto;
		width: 95%;
		height: 15%;
		border: 0.5rpx solid white;
		box-shadow: 0 0 10rpx 0.5rpx gray;
	}
	/* 登录或者退出登录按钮的位置 */
	.foot{
		margin-top: 5vh;
	}
	/* 全局界面颜色,高度,宽度 */
	page {
		height: 100%;
	}
	.page1 {
		width: 100%;
		height: 100%;
	}
	/* 用户头像 */
	.touxiang{
		width: 18%;
		height: 49%;
		margin-left: 15%;
		margin-top: 10%;
	}
	/* 用户名称 */
	.user{
		color: white;
		font-size: 45rpx;
		position: absolute;
		margin-top: 12%;
		margin-left: 1%;
	}
	
	/* 待发货列表横向 */
	.top1{
		width: 70%;
		height: 7vh;
	}
	
	/* 家人管理列表 */
	.center1{
		margin-left: 10rpx;
		margin-right: 5%;
		margin-top: 1%;
	}
	.center2{
		margin-left: -8rpx;
		margin-right: 2.5%;
		margin-top: 1%;
	}
	
	/* 家人管理列表中的图片大小 */
	.imgCenter{
		width: 50rpx;
		height: 50rpx;
	}
	.imgCenter1{
		width: 80rpx;
		height: 50rpx;
	}
	.anniu{
		font-size: 40rpx;
		width: 50%;
	}
</style>
