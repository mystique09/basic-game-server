const { LoginUserDTO } = require('../../domain/login');

class LoginController {
  loginUsecase;
  env;

  constructor(loginUsecase, env) {
    this.loginUsecase = loginUsecase;
    this.env = env;
  }

  login = async (req, res) => {
    try {
      const payload = req.body;

      if(!payload.userName || !payload.userPwd) {
        return res.status(400).json({code: 400, error: 'missing fields'});
      }
    
      const user = new LoginUserDTO(payload.userName, payload.userPwd);
      const checkUser = await this.loginUsecase.checkUser(user.username);
      if(checkUser.length === 0) {
        return res.status(500).json({code: 500, msg: "login failed"});
      }

      const validPassword = this.loginUsecase.comparePassword(user.password, checkUser[0].password);

      if(!validPassword) {
        return res.status(500).json({code: 500, error: "login failed"});
      }

      const randomToken = this.loginUsecase.createToken();
      const session = {
        username: checkUser[0].username,
        rank: checkUser[0].rank,
        score: checkUser[0].score
      };
      const saveSession = await this.loginUsecase.saveSession(randomToken, session);
         
      return res.status(200).json({code: 200, randomToken});
    } catch(e) {
      return res.status(500).json({code: 500, error: "login failed"});
    }
  }
}

module.exports = LoginController;