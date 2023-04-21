class GameUsecase {
  constructor(gameRepository) {
    this.gameRepo = gameRepository;
  }

  compareScore(score, oldScore) {}

  saveScore(user, score) {}

  chechSession(token) {}

  leaderBoard() {}
}


module.exports = GameUsecase;