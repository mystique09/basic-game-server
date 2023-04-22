class GameRepository {
	constructor(db, redis) {
		this.db = db;
		this.redis = redis;
	}
	
	async getSession(token) {
		const session = await this.redis.client.get(token);
		return session;
	}
	
	async saveScore(token, newScore) {
		const cache = await this.redis.client.get(token);
		const user = JSON.parse(cache);
		
		console.log({user})
		if(Number(user.score) < newScore) {
			const query = await this.db.conn.query("UPDATE users SET score = ? WHERE id = ?", [newScore, user.id]);
			//await this.redis.client.del(token);
			user.score = newScore;
			const newCache = await this.redis.client.set(token, JSON.stringify(user), {
				KEEPTTL: true
			});
			return newCache;
		}
		return user;
	}
	
	leaderBoard() {
		return new Promise((res, rej) => {
			this.db.conn.query("SELECT username, score FROM ??", ['users'], function(err, results, fields) {
				if(err) return rej(err);
				return res(results);
			});
		});
	}
}

module.exports = GameRepository;