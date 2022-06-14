import crypto from "crypto";

export function encrypt(password){
	const cipher = crypto.createCipher(process.env.CRYPTO_ALG, process.env.CRYPTO_SECRET)
	cipher.update(password);
	return cipher.final('hex');
}

export function decrypt(password) {
	const decipher = crypto.createDecipher(process.env.CRYPTO_ALG, process.env.CRYPTO_SECRET);
	decipher.update(password, 'hex');
	return decipher.final();
}