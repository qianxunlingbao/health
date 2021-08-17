<template>
	<view class="page-section-spacing">
		<u-navbar :background="background" :is-back="false" title-size="44" back-icon-color="white" title="编辑"
			title-color="white">
			<image style="
				width: 40rpx;
				height: 40rpx;
				margin-left: 35rpx;
				" @click="goBack()" src="../../static/images/back.png"></image>
		</u-navbar>
		<view class="healthy">
			<u-form :model="form" ref="uForm">
				<u-form-item label="老人姓名" label-width="150rpx" prop="name">
					<u-input v-model="form.name" placeholder="请输入老人姓名" />
				</u-form-item>
				<u-form-item label="性别" label-width="150rpx" prop="sex">
					<u-radio-group v-model="form.sex" @change="radioGroupChange">
						<u-radio @change="radioChange(item)" v-for="(item, index) in sexList" :key="index"
							:name="item.label">
							{{item.label}}
						</u-radio>
					</u-radio-group>
				</u-form-item>
				<u-form-item label="年龄" label-width="150rpx" prop="age">
					<u-input v-model="form.age" placeholder="请输入年龄" />
				</u-form-item>
				<u-select v-model="showNat" mode="single-column" :list="natlist" @confirm="natConfirm">
				</u-select>
				<u-form-item label="民族" label-width="150rpx" prop="nation">
					<u-input type="select" v-model="form.nation" @click="showNat = true" placeholder="请选择民族">
					</u-input>
				</u-form-item>
				<u-form-item label="身份证" label-width="150rpx" prop="idNumber">
					<u-input @blur="birthBlur" v-model="form.idNumber" placeholder="请输入身份证号码" />
				</u-form-item>
				<u-form-item label="出生日期" label-width="150rpx" prop="birthday">
					<u-input v-model="form.birthday" placeholder="出生日期" />
				</u-form-item>
				<u-select v-model="showMarry" mode="single-column" :list="marrylist" @confirm="marryConfirm">
				</u-select>
				<u-form-item label="婚姻状况" label-width="150rpx" prop="maritalStatus">
					<u-input type="select" v-model="form.maritalStatus" @click="showMarry = true" placeholder="请选择婚姻状况">
					</u-input>
				</u-form-item>
				<u-select v-model="showReal" mode="single-column" :list="reallist" @confirm="realConfirm">
				</u-select>
				<u-form-item label="关系" label-width="150rpx" prop="relationship">
					<u-input type="select" v-model="form.relationship" @click="showReal = true" placeholder="请选择关系">
					</u-input>
				</u-form-item>
				<u-select v-model="showLife" mode="single-column" :list="lifelist" @confirm="lifeConfirm">
				</u-select>
				<u-form-item label="居住情况" label-width="150rpx" prop="livingSituation">
					<u-input type="select" v-model="form.livingSituation" @click="showLife = true"
						placeholder="请选择居住情况">
					</u-input>
				</u-form-item>
				<u-select v-model="showOlder" mode="single-column" :list="olderlist" @confirm="olderConfirm">
				</u-select>
				<u-form-item label="老人类型" label-width="150rpx" prop="elderType">
					<u-input type="select" v-model="form.elderType" @click="showOlder = true" placeholder="请选择老人类型">
					</u-input>
				</u-form-item>
				<u-select v-model="show" mode="mutil-column-auto" :list="countryList" @confirm="confirm"></u-select>
				<u-form-item label="家庭住址" label-width="150rpx" prop="ssq">
					<u-input type="select" v-model="form.ssq" @click="show = true" placeholder="请选择省市区">
					</u-input>
				</u-form-item>
				<u-form-item label="具体门牌号" label-width="150rpx" prop="addressDetails">
					<u-input type="textarea" :border="true" :height="100" :auto-height="true"
						v-model="form.addressDetails" :placeholder="select" />
				</u-form-item>
			</u-form>
			<view style="width: 100%;float: left;">
				<u-upload @on-remove="onRemove" @on-change="onChange" :show-progress="true" max-count="1"
					style="float: right;" ref="uUpload" :action="action" :auto-upload="true"></u-upload>
				<image style="
						width: 200rpx;
						height: 200rpx;
						float: right;
						margin-top: 1.5%;
						" 
						:src="src"></image>
			</view>
			<view>
				<u-toast ref="uToast" />
				<u-button v-if="isUpload == false" style="margin-top: 10rpx;" type="primary" @click="submitForm">提交
				</u-button>
				<u-button v-if="isUpload == true" style="margin-top: 10rpx;" type="warning" @click="submitUpload">提交
				</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	import request from '../../api/request.js'
	export default {
		components: {

		},
		props: [
			'messageData'
		],
		data() {
			return {
				showMask: true,
				load: true,
				src: '',
				messageList: [],
				mode: 'date',
				formList: { //字典值
					name: '', //老人姓名
					sex: '', //性别
					age: '', //年龄
					nation: '', //民族
					maritalStatus: '', //婚姻状况
					elderType: '', //老人类型
					livingSituation: '', //居住情况
					idNumber: '', //身份证
					picture: '', //图片
					birthday: '', //生日
					addressDetails: '', //具体到门牌号				
					province: '', //省
					city: '', //市
					county: '', //区县
					relationship: '', //关系
					id: ''
				},
				form: {},
				rules: {
					name: [{
						required: true,
						message: '请输入老人姓名',
						trigger: ['blur', 'change'],
					}],
					sex: [{
						required: true,
						message: '请选择性别',
						trigger: ['blur', 'change'],
					}],
					nation: [{
						required: true,
						message: '请选择民族',
						trigger: ['blur', 'change'],
					}],
					relationshipTwo: [{
						required: true,
						message: '请选择关系',
						trigger: ['blur', 'change'],
					}],
					birthday: [{
						required: true,
						message: '请选择出生日期',
						trigger: ['blur', 'change'],
					}],
					maritalStatus: [{
						required: true,
						message: '请选择婚姻状况',
						trigger: ['blur', 'change'],
					}],
					livingSituation: [{
						required: true,
						message: '请选择居住情况',
						trigger: ['blur', 'change'],
					}],
					elderType: [{
						required: true,
						message: '请选择老人类型',
						trigger: ['blur', 'change'],
					}],
					addressDetails: [{
						required: true,
						message: '请输入具体的地址',
						trigger: ['blur', 'change'],
					}],
					ssq: [{
						required: true,
						message: '请选择省市区',
						trigger: ['blur', 'change'],
					}],
					idNumber: [{
							required: true,
							message: '请输入身份证号',
							trigger: ['blur', 'change'],
						},
						{
							pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/g,
							transform(value) {
								return String(value);
							},
							message: '请输入正确的身份证号',
							trigger: ['change', 'blur'],
						},
					]
				},
				// 关系
				showReal: false,
				reallist: [],
				// 性别
				sexList: [],
				//婚姻状况
				showMarry: false,
				marrylist: [],
				//居住情况
				showLife: false,
				lifelist: [],
				showNat: false,
				natlist: [],
				// 老人类型
				showOlder: false,
				olderlist: [],
				//选择省市区
				select: '',
				show: false,
				countryList: [],
				background: {
					backgroundColor: '#007AFF',
				},
				action: `http://121.89.195.17/intelligence-old/file/upload`,
				filesArr: [],
				showBirth: false,
				elderId: '',
				data: [],
				formList1: [],
				anum: 0,
				adata: [],
				bnum: 0,
				bdata: [],
				current: 0,
				isUpload: false
			}
		},
		onLoad(e) {
			this.data = JSON.parse(decodeURIComponent(e.olderList))
			this.current = e.current
			console.log(this.current)
			console.log(this.data)
			this.src = `http://121.89.195.17/intelligence-old/file/${this.data.picture}/query`
			this.form = this.data
			this.form.ssq = this.data.province + " " + this.data.city + " " + this.data.county
			this.formList.id = this.data.id
			this.formList.name = this.form.name //赋值姓名
			this.formList.idNumber = this.form.idNumber //赋值身份证
			this.formList.addressDetails = this.form.addressDetails //赋值具体门牌号
			this.formList.age = this.form.age //赋值年龄
			this.formList.birthday = this.form.birthday //赋值生日
			//请求关系接口
			request({
				url: `http://121.89.195.17/intelligence-old/dictDetails/relationship/get`,
				method: 'GET',
				success: (res) => {
					if (res.statusCode === 200) {
						this.reallist = res.data.data
						// console.log(this.reallist)
						for (var i = 0; i < this.reallist.length; i++) {
							if (this.form.relationship === this.reallist[i].label) {
								this.formList.relationship = this.reallist[i].value //赋值关系
							}
						}
					}
				},
				fail: err => {
					console.log(err);
				},
			})
			//请求性别接口
			request({
				url: `http://121.89.195.17/intelligence-old/dictDetails/sex/get`,
				method: 'GET',
				success: (res) => {
					if (res.statusCode === 200) {
						this.sexList = res.data.data
						for (var i = 0; i < this.sexList.length; i++) {
							if (this.form.sex === this.sexList[i].label) {
								this.formList.sex = this.sexList[i].value //赋值性别
							}
						}
					}
				},
				fail: err => {
					console.log(err);
				},
			})
			//请求民族接口
			request({
				url: `http://121.89.195.17/intelligence-old/dictDetails/nation/get`,
				method: 'GET',
				success: (res) => {
					if (res.statusCode === 200) {
						this.natlist = res.data.data
						for (var i = 0; i < this.natlist.length; i++) {
							if (this.form.nation === this.natlist[i].label) {
								this.formList.nation = this.natlist[i].value //赋值民族
							}
						}
					}
				},
				fail: err => {
					console.log(err);
				},
			})
			//请求婚姻状况接口
			request({
				url: `http://121.89.195.17/intelligence-old/dictDetails/marital_status/get`,
				method: 'GET',
				success: (res) => {
					if (res.statusCode === 200) {
						this.marrylist = res.data.data
						for (var i = 0; i < this.marrylist.length; i++) {
							if (this.form.maritalStatus === this.marrylist[i].label) {
								this.formList.maritalStatus = this.marrylist[i].value //赋值婚姻状况
							}
						}
					}
				},
				fail: err => {
					console.log(err);
				},
			})
			//请求老人类型接口
			request({
				url: `http://121.89.195.17/intelligence-old/dictDetails/elder_type/get`,
				method: 'GET',
				success: (res) => {
					if (res.statusCode === 200) {
						this.olderlist = res.data.data
						for (var i = 0; i < this.olderlist.length; i++) {
							if (this.form.elderType === this.olderlist[i].label) {
								this.formList.elderType = this.olderlist[i].value //赋值老人类型
							}
						}
					}
				},
				fail: err => {
					console.log(err);
				},
			})
			//请求省市区接口
			request({
				url: `http://121.89.195.17/intelligence-old/elderInfo/json/district`,
				method: 'GET',
				success: (res) => {
					if (res.statusCode === 200) {
						// console.log(res.data.data)
						this.countryList = res.data.data
						for (var i = 0; i < this.countryList.length; i++) {
							if (this.form.province === this.countryList[i].label) {
								this.formList.province = this.countryList[i].value
								this.anum = this.countryList[i].children.length
								this.adata = this.countryList[i].children
								for (var j = 0; i < this.anum; j++) {
									if (this.form.city === this.adata[j].label) {
										this.formList.city = this.adata[j].value
										this.bnum = this.adata[j].children.length
										this.bdata = this.adata[j].children
										for (var n = 0; n < this.bnum; n++) {
											if (this.form.county === this.bdata[n].label) {
												this.formList.county = this.bdata[n].value
											}
										}
									}
								}
							}
						}
					}
				},
				fail: err => {
					console.log(err);
				},
			})
			//请求居住情况接口
			request({
				url: `http://121.89.195.17/intelligence-old/dictDetails/living_situation/get`,
				method: 'GET',
				success: (res) => {
					if (res.statusCode === 200) {
						this.lifelist = res.data.data
						for (var i = 0; i < this.lifelist.length; i++) {
							if (this.form.livingSituation === this.lifelist[i].label) {
								this.formList.livingSituation = this.lifelist[i].value //赋值居住情况
							}
						}
					}
				},
				fail: err => {
					console.log(err);
				},
			})
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		methods: {
			//关系情况
			//下拉框
			realConfirm(e) {
				this.form.relationship = e[0].label
				this.formList.relationship = e[0].value
			},
			birthBlur() {
				const idCard = this.form.idNumber
				this.form.birthday = idCard.substring(6, 10) + "-" + idCard.substring(10, 12) + "-" + idCard.substring(12,
					14)
				this.formList.birthday = this.form.birthday
			},
			//生日
			changeBirth(e) {
				this.form.birthday = e.result
			},
			//居住情况
			//下拉框
			lifeConfirm(e) {
				this.form.livingSituation = e[0].label
				this.formList.livingSituation = e[0].value
			},
			//婚姻状况
			//下拉框
			marryConfirm(e) {
				this.form.maritalStatus = e[0].label
				this.formList.maritalStatus = e[0].value
			},
			//民族
			//下拉框
			natConfirm(e) {
				this.form.nation = e[0].label
				this.formList.nation = e[0].value
			},
			//老人类型
			//下拉框
			olderConfirm(e) {
				this.form.elderType = e[0].label
				this.formList.elderType = e[0].value
			},
			// 判断省市区是否出现
			showDel() {
				this.show = !this.show
			},
			// 省市区点击确认的事件
			confirm(e) {
				// console.log(e);
				this.select =
					`${e[0].label}--${e[1].label}--${e[2].label}`
				this.form.province = e[0].label
				this.formList.province = e[0].value
				this.form.city = e[1].label
				this.formList.city = e[1].value
				this.form.county = e[2].label
				this.formList.county = e[2].value
				this.form.ssq = e[0].label + " " + e[1].label + " " + e[2].label
			},
			onChange(res, index, lists, name) {
				console.log(res.data)
				this.isUpload = !this.isUpload
				console.log(this.isUpload)
			},
			onRemove() {
				this.isUpload = !this.isUpload
			},
			submitForm() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						this.formList.name = this.form.name
						this.formList.idNumber = this.form.idNumber
						this.formList.addressDetails = this.form.addressDetails
						this.formList.age = this.form.age
						this.formList.picture = this.form.picture
						request({
							url: `http://121.89.195.17/mall-portal/elder/update`,
							method: 'POST',
							data: this.formList,
							success: (res) => {
								if (res.statusCode === 200) {
									uni.setStorage({
										key: 'indexCurrent',
										data: this.current,
										success: function() {}
									})
									// this.$refs.uToast.show({
									// 	title: '更新成功',
									// 	type: 'success',
									// 	isTab: true,
									// 	duration: 200,
									// 	url: '/pages/parent/index',
									// })
									uni.switchTab({
										url:'/pages/parent/index',
									})
								}
							},
							fail: err => {
								console.log(err);
							},
						})
					} else {
						console.log('验证失败');
					}
				});
			},
			submitUpload() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						this.formList.name = this.form.name
						this.formList.idNumber = this.form.idNumber
						this.formList.addressDetails = this.form.addressDetails
						this.formList.age = this.form.age
						this.formList.picture = this.$refs.uUpload.lists[0].response.data
						request({
							url: `http://121.89.195.17/mall-portal/elder/update`,
							method: 'POST',
							data: this.formList,
							success: (res) => {
								if (res.statusCode === 200) {
									uni.setStorage({
										key: 'indexCurrent',
										data: this.current,
										success: function() {}
									})
									// this.$refs.uToast.show({
									// 	title: '更新成功',
									// 	type: 'success',
									// 	isTab: true,
									// 	duration: 200,
									// 	url: '/pages/parent/index',
									// })
									uni.switchTab({
										url:'/pages/parent/index',
									})
								}
							},
							fail: err => {
								console.log(err);
							},
						})
					} else {
						console.log('验证失败');
					}
				});
			},
			//性别
			radioChange(e) {
				this.formList.sex = e.value
			},
			radioGroupChange(e) {},
			goBack() {
				uni.setStorage({
					key: 'indexCurrent',
					data: this.current,
					success: function() {}
				})
				uni.switchTab({
					url: `/pages/parent/index`,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>
<style scoped>
	.badge {
		background-color: red;
		color: white;
	}

	.healthy {
		margin: 0 auto;
		width: 90%;
	}

	page {
		height: 100%;
	}

	.page-section-spacing {
		width: 100%;
		height: 100%;
	}
</style>
