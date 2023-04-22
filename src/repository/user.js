const { User } = require('../domain/user');

class UserRepository {
  constructor(db, redis) {
    this.db = db;
    this.redis = redis;
  }

  /**
   * Creates new user
   * @param {User} payload 
   * @returns User
   */
  create(payload) {
    return new Promise((res, rej) => {
      this.db.conn.query('INSERT INTO users SET ?', payload, function(err, results, fields) {
        if (err) return rej(err);
        return res(results);
      });
    });
  }

  async saveSession(token, user) {
    const query = await this.redis.client.set(token, JSON.stringify(user), {EX: 60 * 5});
    console.log(query)
    return query;
  }

  /**
   * Query all users in database
   * @returns User[]
   */
  getAll() {
    return new Promise((res, rej) => {
      this.db.conn.query('SELECT id, username, rank, score FROM users', function(err, results, fields) {
        if (err) return rej(err);
        return res(results);
      });
    });
  }

  getOneByUsername(username) {
    return new Promise((res, rej) => {
      const query = this.db.conn.query('SELECT * FROM users WHERE username = ?', username, function(err, results, fields) {
        if (err) return rej(err);
        return res(results);
      });
    });
  }
}

module.exports = UserRepository;