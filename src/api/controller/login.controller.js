const { LoginUserDTO } = require('../../domain/login');

class LoginController {
  loginUsecase;
  env;

  constructor(loginUsecase, env) {
    this.loginUsecase = loginUsecase;
    this.env = env;
  }

  login = async (req, res) => {
    const payload = req.body;

    if(!payload.username || !payload.password) {
      return res.status(400).json({error: 'missing fields'});
    }
    
    const user = new LoginUserDTO(payload.username, payload.password);
    const query = await this.loginUsecase.checkUser(user.username);

    if(query.length === 0) {
      // TODO: save user to db
      return res.status(404).json({ error: 'user not found'});
    }
    
    return res.json({data: { token: 'randomtoken' }, message: 'logged in'});
  }
}

module.exports = LoginController;