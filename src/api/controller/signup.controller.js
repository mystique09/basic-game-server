class SignupController {
  signupUsecase;
  env;

  constructor(signupUsecase, env) {
    this.signupUsecase = signupUsecase;
    this.env = env;
  }

  newAccount = (req, res) => {
    return res.send('new account');
  }
}

module.exports = SignupController;