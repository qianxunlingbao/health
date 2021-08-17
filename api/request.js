const request = function(options) {
	options.url = options.url;
	try {
		const tokenLogin = uni.getStorageSync('storage_key')
		const tokenHeadLogin = tokenLogin.tokenHead
		const tokenInfo = tokenLogin.token
		const message = tokenHeadLogin + tokenInfo
		// debugger // 设置断点
		if (message) {
			options.header = {
				'Authorization': message
			}
		} else {
			uni.showToast({
				title: '请登录！！！',
				icon: 'none',
				duration: 1000,
			});

			return
		}

	} catch (err) {
		console.log(err)
	}
	return uni.request(options)
}

export default request;
