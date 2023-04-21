class GameRepository {
	constructor(dbConn, redisConn) {
		this.dbConn = dbConn;
		this.redisConn = redisConn;
	}
	
	checkSession(token) {}
	
	saveScore(user, newScore) {}
	
	leaderBoard() {}
}

module.exports = GameRepository;