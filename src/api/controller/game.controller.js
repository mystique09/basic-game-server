class GameController {
  gameUsecase;
  env;

  constructor(gameUsecase, env) {
    this.gameUsecase = gameUsecase;
    this.env = env;
  }

  saveScore = async (req, res) => {
    try {
      const payload = req.body;

      if(!payload.token || !payload.myScore) {
        return res.status(400).json({code: 400, msg: 'missing fields'});
      }
      
      if(isNaN(Number(payload.myScore))) {
        return res.status(500).json({code: 500, msg: "bad score"});
      }
      
      const validSession = await this.gameUsecase.checkSession(payload.token);
      
      if(!validSession) {
        return res.status(500).json({code: 500, msg: "bad token"});
      }
      
      const saveScore = await this.gameUsecase.saveScore(payload.token, payload.myScore);
      console.log({saveScore});
      return res.status(200).json({code: 200, msg: "OK"});
    } catch(err) {
      console.log({err})
      return res.status(500).json({code: 500, msg: "something went wrong"});
    }
  }

  leaderBoard = async (req, res) => {
    try {
      const payload = req.body;

      if(!payload.token) {
        return res.status(400).json({code: 400, msg: 'missing fields'});
      }

      const validSession = await this.gameUsecase.checkSession(payload.token);
      if(!validSession) {
        return res.status(500).json({code: 500, msg: "bad token"});
      }

      const userData = await this.gameUsecase.getSession(payload.token);
      const board = await this.gameUsecase.leaderBoard();
    
      return res.status(200).json({
        data: {
          mine: JSON.parse(userData),
          rank: board
        }
      });
    } catch(e) {
      console.log(e)
      return res.status(500).json({code: 500, msg: "something went wrong"});
    }
  }
}

module.exports = GameController;