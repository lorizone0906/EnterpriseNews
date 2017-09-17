const crypto = require('crypto');

export function encrypt(encryptString) {
	var hasher = crypto.createHash("sha256");
	hasher.update(encryptString);
	encryptString = hasher.digest('hex');
	return encryptString;
}

// module.exports = encrypt;