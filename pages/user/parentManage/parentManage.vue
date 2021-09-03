<template>
	<view class="page">
		<view>
			<u-navbar :background="background" :is-back="false" title-size="44" title="家人管理" title-color="white">
				<image style="
					width: 40rpx;
					height: 40rpx;
					margin-left: 35rpx;
					" @click="goBack()" src="../../../static/images/back.png"></image>
				<view slot="right">

				</view>
			</u-navbar>
		</view>
		<view style="
			width: 90%;
			margin: 0 auto;
			margin-top: 10rpx;
		">
			<uni-list-item :showArrow="true" v-for="(item,index) in data" :key="index">
				<!-- 自定义 header -->
				<view slot="header">
					<u-avatar :src="item.images" mode="circle">
					</u-avatar>
				</view>
				<!-- 自定义 body -->
				<view slot="body" style="width: 50%;">
					<view style="margin-left: 30rpx;">
						<text style="float:left;">{{item.relationship}}</text>
						<u-button
							style="width: 20rpx;float: left;height: 40rpx;margin-top: 4rpx;margin-left: 13rpx;background-color: #20B2AA;"
							type="success">长辈</u-button>
						<br>
						<text style="float: left;margin-top: 10rpx;color: gray;font-size: 28rpx;">我创建的用户</text>
					</view>
				</view>
				<!-- 自定义 footer-->
				<template slot="footer">
					<!-- <image style="width: 100rpx;height: 100rpx;" src="/static/images/Publishedsuccessfully.png"
						></image> -->
				</template>
			</uni-list-item>
			<hr>
			<!-- <uni-list-item>
				<view slot="header">
				</view>
				<view slot="body" style="width: 50%;">
					<view style="margin-left: 30rpx;">
						<text style="float:left;">母亲</text>
						<u-button
							style="width: 20rpx;float: left;height: 40rpx;margin-top: 4rpx;margin-left: 13rpx;background-color: #20B2AA;"
							type="success">长辈</u-button>
						<br>
						<text style="float: left;margin-top: 10rpx;color: gray;font-size: 28rpx;">我创建的用户</text>
					</view>
				</view>
				<template slot="footer">
					<image  src="/static/images/delete.png" mode="widthFix" style="width: 35rpx;margin-top: 4%;margin-left: 40%;"
						@click="deleteParent">
					</image>
				</template>
			</uni-list-item> -->
		</view>
		<view>
			<u-toast ref="uToast" />
			<u-button shape="circle" type="primary" @click="add">添加成员</u-button>
		</view>
	</view>
</template>

<script>
	import request from '../../../api/request.js'
	export default {
		data() {
			return {
				border: true,
				background: {
					backgroundColor: '#007AFF',
				},
				data:{
					images:'',
				}
			}
		},
		mounted() {
			request({//获取老人信息
				url: `http://121.89.195.17/mall-portal/elder/list`,
				method: 'GET',
				success: (res) => {
					if (res.statusCode === 200) {
						console.log(res.data.data)
						this.data = res.data.data
						for (let i = 0; i < this.data.length; i++) {
							let imgs =
								`http://121.89.195.17/intelligence-old/file/${this.data[i].picture}/query`
							this.data.images = imgs
							console.log(this.data.images)
						}
					}
				},
				fail: err => {
					console.log(err);
				},
			})
		},
		methods: {
			goBack() {
				// this.$refs.uToast.show({
				// 	title: '进入登录界面',
				// 	type: 'success',
				// 	url: '/pages/login/login',		
				// })
				uni.switchTab({
					url: `/pages/user/index`
				})
			},
			//删除
			deleteParent() {
				this.$refs.uToast.show({
					title: '删除成功',
					type: 'success',
					// url: '/pages/login/login',		
				})
			},
			//添加成员
			add(){
				uni.navigateTo({
					url:`/pages/addParent/addParent`
				})
			}
			
		}
	}
</script>

<style scoped>
	page {
		height: 100%;
		background-color: #f3f4f6
	}

	.page-section-spacing {
		/* padding: 0 30rpx;
	        margin-top: 20rpx; */
		width: 100%;
		height: 100%;
	}

	.touxiang {}
</style>
