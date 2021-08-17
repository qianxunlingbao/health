<template>
	<view class="page1">
		<view>
			<u-navbar :background="background" :is-back="false" title-size="44" title="在线问诊" title-color="white">
				<image style="
					width: 40rpx;
					height: 40rpx;
					margin-left: 35rpx;
					" 
					@click="goBack()"
					src="../../static/images/back.png"></image>
				<view slot="right" @click="openMyInquiry">
					<text style="font-size: 20rpx;color: white;">我的问诊</text>
					<u-badge is-dot="true" v-if="false" type="success" class="badge"></u-badge>
				</view>
			</u-navbar>
		</view>
		<view class="healthy">
			<u-form :model="form" ref="uForm">
				<u-form-item label="称呼" label-width="150rpx">
					<u-input v-model="form.name" placeholder="请输入称呼" />
				</u-form-item>
				<u-form-item label="性别" label-width="150rpx">
					<u-radio-group>
						<u-radio v-for="(item, index) in listSex" :key="index" :name="item.name"
							:disabled="item.disabled">
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</u-form-item>
				<u-form-item label="出生日期" label-width="150rpx">
					<u-input v-model="form.date" placeholder="请输入生日日期" />
				</u-form-item>
			</u-form>
			<view>
				<textarea style="border: 1px solid gray;width: 100%;border-radius: 2%;height: 30vh;"
					placeholder-style="color:gray;line-height:50rpx"
					placeholder="请详细描述您的症状,疾病和身体状况,便于医生更准确的分析(10-300字),为了保护您的隐私,请勿在咨询中透露您的真实姓名,手机号,微信号等信息"></textarea>
			</view>
			<!-- <view>
				<u-upload ref="uUpload" :action="action" :auto-upload="true"></u-upload>
				<u-button style="margin-top: 100rpx;" type="primary" @click="submit">提交</u-button>
			</view> -->
			<u-button style="margin-top: 100rpx;" type="primary" @click="openSuccess">提交成功</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				title: '在线问诊',
				border: true,
				width: '',
				height: '',
				background: {
					backgroundColor: '#007AFF',
				},
				form: {
					name: '',
					date: '',
				},
				listSex: [{
						name: '男',
						disabled: false
					},
					{
						name: '女',
						disabled: false
					}
				],
				action: 'http://www.example.com/upload',
				filesArr: [],
			}
		},
		created() {

		},
		methods: {
			submit() {
				let files = [];
				// 通过filter，筛选出上传进度为100的文件(因为某些上传失败的文件，进度值不为100，这个是可选的操作)
				files = this.$refs.uUpload.lists.filter(val => {
					return val.progress == 100;
				})
				// 如果您不需要进行太多的处理，直接如下即可
				// files = this.$refs.uUpload.lists;
				console.log(files)
			},
			openMyInquiry(){
				uni.navigateTo({
					url: '/pages/myInquiry/index',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			openSuccess(){
				uni.navigateTo({
					url: '/pages/inquirySuccess/inquirySuccess',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			goBack(){
				uni.switchTab({
					url: '/pages/life/index',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>
<style scoped>
	page {
		height: 100%;
	}
	
	.page1{
		width: 100%;
		height: 100%;
	}
	.badge {
		background-color: red;
		color: white;
	}

	.healthy {
		margin: 0 auto;
		width: 90%;
	}
</style>
