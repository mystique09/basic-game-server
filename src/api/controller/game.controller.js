class GameController {
  gameUsecase;
  env;

  constructor(gameUsecase, env) {
    this.gameUsecase = gameUsecase;
    this.env = env;
  }

  async saveScore(req, res) {
    return res.send('save score');
  }

  async leaderBoard(req, res) {
    return res.send('leader board');
  }
}

module.exports = GameController;