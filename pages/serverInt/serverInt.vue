<template>
	<view>
		<view>
			<view style="background-color: #007AFF;">
				<u-row gutter="16" justify="space-around" style="height: 80rpx;">
					<u-col span="4">
						<image style="
							width: 50rpx;
							height: 50rpx;
							float: left;" src="../../static/images/posi.png">
						</image>
						<view style="display: flex;">
							<text style="color: white;margin-top: 8rpx;">顺平县</text>
						</view>
					</u-col>
					<u-col span="8">
						<text style="color: white;font-size: 35rpx;">服务网点列表</text>
					</u-col>
				</u-row>
			</view>
			<view class="content">
				<u-row gutter="16" justify="space-around">
					<u-col span="3">
						<u-input type="select" v-model="provinceLabel" @click="showProvince = true" placeholder="请选择省">
						</u-input>
						<u-select v-model="showProvince" mode="single-column" :list="province" @confirm="provinceClick">
						</u-select>
					</u-col>
					<u-col span="3">
						<u-input type="select" v-model="cityLabel" @click="showCity = true" placeholder="请选择市">
						</u-input>
						<u-select v-model="showCity" mode="single-column" :list="city" @confirm="cityClick">
						</u-select>
					</u-col>
					<u-col span="3">
						<u-input type="select" v-model="countyLabel" @click="showCounty = true" placeholder="请选择区县">
						</u-input>
						<u-select v-model="showCounty" mode="single-column" :list="county" @confirm="countyClick">
						</u-select>
					</u-col>
				</u-row>
				<u-row gutter="16" justify="space-around">
					<u-col span="12" style="margin-bottom: 20rpx;">
						<uni-list>
							<uni-list-item link @click="click(index)" v-for="(item,index) in list" :key="index">
								<view slot="header" style="margin-left: 0rpx;margin-right: 2%;margin-top: 1%;">
									<image style="width: 260rpx;height: 210rpx;" :src="item.img" />
								</view>
								<view slot="body">
									<text>{{item.name}}</text><br><br>
									<text>{{item.xiangqing}}</text><br>

								</view>
							</uni-list-item>
						</uni-list>
					</u-col>
				</u-row>
				<!-- <u-row gutter="16" justify="space-around">
					<u-col span="11">
						<u-cell-item 
							v-for="(item,index) in Data" 
							:key='index'
							:title="item.name" 
							:arrow="true" arrow-direction="down"
							hover-class="cell-hover-class"></u-cell-item>
					</u-col>
				</u-row> -->
			</view>
		</view>
	</view>
</template>

<script>
	import request from '../../api/request.js'
	export default {
		data() {
			return {
				background: {
					backgroundColor: '#f4f4f5',
				},
				border: true,
				type: 'select',
				// 省
				provinceLabel: '',
				provinceValue: 0,
				showProvince: false,
				province: [],
				// 市
				cityLabel: '',
				cityValue: 0,
				cityLabel: '',
				showCity: false,
				city: [],
				// 区县
				countyLabel: '',
				countyValue: 0,
				showCounty: false,
				county: [],


				list: [{
						name: '顺平县大洋养老中心',
						xiangqing: '顺平县大洋养老中心位于顺平县，优质的服务以老人为中心......',
						time: '2021年1月1日',
						img: '/static/images/volunteer1.png'
					},
					{
						name: '顺平县大洋养老中心',
						xiangqing: '顺平县大洋养老中心位于顺平县，优质的服务以老人为中心......',
						time: '2021年1月1日',
						img: '/static/images/volunteer1.png'
					},
					{
						name: '顺平县大洋养老中心',
						xiangqing: '顺平县大洋养老中心位于顺平县，优质的服务以老人为中心......',
						time: '2021年1月1日',
						img: '/static/images/volunteer1.png'
					}

				],

				Data: [{
						name: '顺平县大洋养老中心'
					},
					{
						name: '顺平县洋河康养'
					},
				]

			}
		},
		onShow() {

		},
		mounted() {
			//请求省市区接口
			request({
				url: `http://121.89.195.17/intelligence-old/elderInfo/json/district`,
				method: 'GET',
				success: (res) => {
					if (res.statusCode === 200) {
						console.log(res.data.data)
						this.province = res.data.data
					}
				},
				fail: err => {
					console.log(err);
				},
			})
		},
		methods: {
			//点击事件
			click(e) {
				console.log(e)
				// if(e == 1){
				uni.navigateTo({
					url: `/pages/serverInt/wdjs/wdjs`
				})
				// }
			},

			// 点击province回调
			provinceClick(index) {
				this.provinceLabel = index[0].label;
				this.provinceValue = index[0].value
				for (let i = 0; i < this.province.length; i++) {
					if (this.provinceValue == this.province[i].value) {
						this.city = this.province[i].children
						this.cityLabel = '',
							this.countyLabel = ''
					}
				}
			},
			//点击city回调
			cityClick(index) {
				console.log(index)
				this.cityLabel = index[0].label
				this.cityValue = index[0].value
				for (let i = 0; i < this.city.length; i++) {
					if (this.cityValue == this.city[i].value) {
						this.county = this.city[i].children
						this.countyLabel = ''
					}
				}
			},
			//点击county回调
			countyClick(index) {
				console.log(index)
				this.countyLabel = index[0].label
				this.countyValue = index[0].value
			}
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

	.cell-hover-class {
		opacity: 0.5;
	}
</style>
