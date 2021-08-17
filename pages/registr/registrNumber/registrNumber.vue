<template>
	<view class="page1">
		<view>
			<u-navbar :is-back="false" :background="background" title-size="44" back-icon-color="white" title="预约挂号" title-color="white">
				<image style="
					width: 40rpx;
					height: 40rpx;
					margin-left: 35rpx;
					" @click="goBack()" src="../../../static/images/back.png"></image>
			</u-navbar>
		</view>
		<view class="doctorHeader">
			<uni-list>
				<uni-list-item>
					<view slot="header"></view>
					<view slot="body" @click="openDoctor">
						<text>
							谢汉兴
						</text>
						<text class="doctorone">主任医师</text>
						<br>
						<view class="doctortwo">
							<text class="doctorthree">
								全科
							</text>
						</view>
						<view class="doctorsix">
							<u-avatar :src="src"></u-avatar>
						</view>
					</view>
					<view slot="footer"></view>
				</uni-list-item>
			</uni-list>
		</view>
		<view class="doctorContent">
			<uni-list>
				<uni-list-item>
					<view slot="header">
						<text>急诊时间</text>
					</view>
					<view slot="footer" @click="show = true">
						<u-calendar v-model="show" :mode="mode"></u-calendar>
						<text>></text>
					</view>
				</uni-list-item>
				<uni-list-item>
					<view slot="header">
						<text>预约服务费</text>
					</view>
					<view slot="footer">
						<text>></text>
					</view>
				</uni-list-item>
			</uni-list>
		</view>
		<view class="doctorContentx">
			<uni-list>
				<uni-list-item>
					<view slot="header">
						<text>选择服务对象</text>
					</view>
					<view slot="footer">
						<text style="color: gray;font-size: 25rpx;">添加></text>
					</view>
				</uni-list-item>
			</uni-list>
		</view>
		<u-modal 
			v-model="show1" 
			:content="content"
			@confirm="del"
			></u-modal>
			<view style="
				width: 80%;
				height: 60rpx;
				margin: 0 auto;
				text-align: center;
				border: 1rpx solid #007AFF;
				background-color: #007AFF;
				margin-top: 50rpx;
				border-radius: 5%;
			 "
			 v-if="this.show2"
			 >
				<text style="
					font-size: 40rpx;
					color: white;
					"
					@click="open"
				>立即预约</text>
			</view>
			<navigator v-if="this.show3" url="/pages/registr/registr" open-type="navigate">
			     <view style="
			     	width: 80%;
			     	height: 60rpx;
			     	margin: 0 auto;
			     	text-align: center;
			     	border: 1rpx solid #007AFF;
			     	background-color: #007AFF;
			     	margin-top: 50rpx;
			     	border-radius: 5%;
			      "
			      >
			     	<text style="
			     		font-size: 40rpx;
			     		color: white;
			     		"
			     	>
					返回首页</text>
					</view>
			</navigator>
	</view>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				title: '科室医护',
				background: {
					backgroundColor: '#007AFF',
				},
				src: '../../../static/images/doct.png',
				data: [{
						title: '急诊时间',
						foot: '>'
					},
					{
						title: '预约服务费',
						foot: '>'
					},
				],
				show: false,
				mode: 'range',
				show1: false,
				show2: true,
				show3: false,
				content: '预约成功'
			}
		},
		created() {

		},
		methods: {
			goBack() {
				uni.navigateTo({
					url: '/pages/registr/docotor/docotor',
					success: res => {},
					fail: () => {},
					complete: () => {}
				})
			},
			openDoctor() {
				// uni.navigateTo({
				// 	url: '/pages/registr/docotor/docotor',
				// 	success: res => {},
				// 	fail: () => {},
				// 	complete: () => {}
				// });
			},
			change(e) {
				console.log(e);
			},
			open() {
				this.show1 = true;
			},
			del(){
				this.show2 = false
				this.show3 = true
			}
		}
	}
</script>

<style scoped>
	.doctorone {
		color: gray;
		font-size: 25rpx;
		margin-left: 10rpx;
	}

	.doctortwo {
		width: 70rpx;
		height: 45rpx;
		border: 1px solid green;
		border-radius: 5%;
		text-align: center;
		margin-top: 10rpx;
		float: left;
	}

	.doctorthree {
		font-size: 25rpx;
		color: gray;
	}

	.doctorsix {
		float: left;
		margin-left: 600rpx;
		margin-top: -100rpx;
	}

	.doctorseven {
		color: gray;
		font-size: 25rpx;
	}

	.doctoreight {
		margin-top: 50rpx;
		width: 80%;
	}

	.doctorContentx {
		margin-top: 20rpx;
	}

	page {
		height: 100%;
	}

	.page1 {
		width: 100%;
		height: 100%;
	}
</style>
