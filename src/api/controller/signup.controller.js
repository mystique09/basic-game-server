class SignupController {
  signupUsecase;
  env;

  constructor(signupUsecase, env) {
    this.signupUsecase = signupUsecase;
    this.env = env;
  }

  newAccount = async (req, res) => {
    try {
      const payload = req.body;

      if(!payload.userName || !payload.userPwd) {
        return res.status(400).json({code: 400, msg: "missing fields"});
      }

      let user = await this.signupUsecase.checkUser(payload.userName);
      console.log(user)
      if(user){
        return res.status(500).json({code: 500, msg: "account already exist"});
      }

      let newUser = await this.signupUsecase.create(payload);

      console.log({newUser});
      
      return res.status(200).json({code: 200, msg: "OK"});
    } catch(e) {
      return res.status(500).json({code: 500, msg: "account already exist"});
    }
  }
}

module.exports = SignupController;