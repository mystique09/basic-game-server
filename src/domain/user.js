class User {
	username;
	password;
	score = 0;
	rank = 0;

	constructor (username, password) {
		this.username = username;
		this.password = password;
	}
}

class CreateUserDTO {
	username;
	password;

	constructor (username, password) {
		this.username = username;
		this.password = password;
	}
}

class UpdateUserDTO {
	username;
	score;
	rank;

	constructor(username, score, rank) {
		this.username = username;
		this.score = score;
		this.rank = rank;
	}
}

class UserError {
	code;
	msg;

	constructor(code, message) {
		this.code = code;
		this.msg = message;
	}
}

module.exports = {
	User, CreateUserDTO, UpdateUserDTO, UserError
};