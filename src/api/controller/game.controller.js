class GameController {
  gameUsecase;
  env;

  constructor(gameUsecase, env) {
    this.gameUsecase = gameUsecase;
    this.env = env;
  }

  saveScore = (req, res) => {
    return res.send('save score');
  }

  leaderBoard = (req, res) => {
    return res.send('leader board');
  }
}

module.exports = GameController;