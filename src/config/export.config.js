import { defaultConfig } from './default.config';
import { uatConfig } from './uat.config'
import { prodConfig } from './prod.config'

if (process.env.NODE_ENV === 'development' ) {
	config = defaultConfig;
} else if (process.env.NODE_ENV === 'uat') {
	// 如果是UAT 则合并默认和uat，重复用uat的替换默认的配置
	config = { ...defaultConfig, ...uatConfig };
} else {
	// 如果是生产则合并默认和生产，重复用生产的替换默认的配置
	config = { ...defaultConfig, ...prodConfig };
}

export { config };
