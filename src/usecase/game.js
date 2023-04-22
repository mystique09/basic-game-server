class GameUsecase {
  constructor(gameRepository) {
    this.gameRepo = gameRepository;
  }

  async saveScore(token, score) {
    const newCache = await this.gameRepo.saveScore(token, score);
    return newCache;
  }

  async getSession(token) {
    const session = await this.gameRepo.getSession(token);
    return session;
  }

  async checkSession(token) {
    const session = await this.gameRepo.getSession(token);
    console.log(session);
    return !!session;
  }

  async leaderBoard() {
    const board = await this.gameRepo.leaderBoard();
    return board;
  }
}


module.exports = GameUsecase;