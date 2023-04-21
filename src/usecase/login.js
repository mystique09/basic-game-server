class LoginUsecase {
  constructor(userRepository) {
    this.userRepo = userRepository;
  }

  async checkUser(username) {
    const user = this.userRepo.getOneByUsername(username);
    return user;
  }

  comparePassword(password, hash) {}

  createToken() {}

  saveSession(token) {}
}

module.exports = LoginUsecase;