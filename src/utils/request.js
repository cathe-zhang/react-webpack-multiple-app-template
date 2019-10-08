import axios from 'axios';
import config from '@/config/export.config';

class BaseRequest {
  constructor(options) {
    this.options = options
  }

  /**
   * 组装请求头信息
   */
  assembleRequestHeader = ( apiKey, params ) => {
    let requestHeader = {}

    requestHeader['Content-Type'] = 'application/json'
    requestHeader['MD5'] = getXLemonSign(params)
    return requestHeader
  }

  /**
   * 发起axios请求
   */
  fetch = ({ router, method, data }) => {
		let prefix = config[apiKey]
		return axios({
			method,
			url: `${config[this.options.apiKey]}${router}`,
			data,
			header: this.assembleRequestHeader()
		})
	}

	/**
	 * 发起post请求
	 */
	post = ({router, data}) => {
		this.fetch({
			method: 'post',
			router,
			data
		})
	}

	/**
	 * 发起post请求
	 */
	get = ({router, data}) => {
		this.fetch({
			method: 'get',
			router,
			data
		})
	}

}

export default BaseRequest
