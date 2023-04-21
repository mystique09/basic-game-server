class GameUsecase {
  constructor(gameRepository) {
    this.gameRepo = gameRepository;
  }

  compareScore(score, oldScore) {}

  saveScore(user, score) {}

  checkSession(token) {}

  leaderBoard() {}
}


module.exports = GameUsecase;