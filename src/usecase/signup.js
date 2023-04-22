const { User } = require('../domain/user');

class SignupUsecase {
  constructor(userRepository) {
    this.userRepo = userRepository;
  }

  async create(payload) {
    const newUser = new User(payload.userName, payload.userPwd);
    const user = await this.userRepo.create(newUser);
    return user; 
  }

  async checkUser(username) {
    const user = await this.userRepo.getOneByUsername(username);
    console.log(user);
    return user.length === 1;
  }
}

module.exports = SignupUsecase;