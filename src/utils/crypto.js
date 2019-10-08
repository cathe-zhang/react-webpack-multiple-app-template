/**
 * @description 加密解密
 * @author cellerchan
 * @date 2019-10-15
 */

import CryptoJS from 'crypto-js';
import MD5 from 'crypto-js/md5'

/**
 * 3DES加密
 * DES加密 Pkcs7填充方式
 */
export const encryptByDES = (message, signature) => {
	const keyHex = CryptoJS.enc.Utf8.parse(signature);
	const encrypted = CryptoJS.TripleDES.encrypt(message, keyHex, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7
	});
	return encrypted.toString();
};

/**
 * 3DES解密
 * DES解密 Pkcs7填充方式
 */
export const decryptByDES = (ciphertext, signature) => {
	const keyHex = CryptoJS.enc.Utf8.parse(signature);
	// direct decrypt ciphertext
	const decrypted = CryptoJS.TripleDES.decrypt(
		{
			ciphertext: CryptoJS.enc.Base64.parse(ciphertext)
		},
		keyHex,
		{
			mode: CryptoJS.mode.ECB,
			padding: CryptoJS.pad.Pkcs7
		}
	);
	return decrypted.toString(CryptoJS.enc.Utf8);
};

export const MD5Encrypt = (data) => {
  return MD5(`${JSON.stringify(data)}${config.MD5.str}`).toString()
}