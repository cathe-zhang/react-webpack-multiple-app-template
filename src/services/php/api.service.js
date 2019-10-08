import BaseRequest from './../../utils/request'

class ApiService extends BaseRequest {
	constructor() {
		super({
			apiKey: 'php'
		})
	}

	/**
	 * 请求示例
	 * @param {*} data
	 */
	queryBannerList(data) {
		return this.post({
			router: '',
			data
		})
	}
}

export default ApiService
