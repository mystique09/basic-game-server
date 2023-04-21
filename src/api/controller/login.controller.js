class LoginController {
  loginUsecase;
  env;

  constructor(loginUsecase, env) {
    this.loginUsecase = loginUsecase;
    this.env = env;
  }

  async login(req, res) {
    return res.send('login');
  }
}

module.exports = LoginController;