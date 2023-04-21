class LoginUserDTO {
	username;
	password;

	constructor (username, password) {
		this.username = username;
		this.password = password;
	}
}

module.exports = { LoginUserDTO };