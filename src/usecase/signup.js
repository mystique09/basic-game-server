class SignupUsecase {
  constructor(userRepository) {
    this.userRepo = userRepository;
  }

  create(payload) {}

  checkUser(username) {}
}

module.exports = SignupUsecase;