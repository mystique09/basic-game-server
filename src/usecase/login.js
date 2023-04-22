const crypto = require('crypto');

class LoginUsecase {
  constructor(userRepository) {
    this.userRepo = userRepository;
  }

  async checkUser(username) {
    const user = await this.userRepo.getOneByUsername(username);
    return user;
  }

  comparePassword(payload, password) {
    return payload === password;
  }

  createToken() {
    const token = crypto.randomUUID().split('-')[0];
    return token;
  }

  async saveSession(token, user) { 
    const res = await this.userRepo.saveSession(token, user);
    return res;
  }
}

module.exports = LoginUsecase;