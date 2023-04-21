class LoginUsecase {
  constructor(userRepository) {
    this.userRepo = userRepository;
  }

  checkUser(username) {}

  comparePassword(password, hash) {}

  createToken() {}

  saveSession(token) {}
}

module.exports = LoginUsecase;