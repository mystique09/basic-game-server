const { User } = require('../domain/user');

class UserRepository {
  constructor(db, redis) {
    this.db = db;
    this.redis = redis;
  }

  create(payload) {
    const newUser = new User(payload.username, payload.password);
    this.db.conn.query('INSERT INTO users SET ?', newUser, function(err, results, fields) {
      if (err) throw err;
      console.log({results, fields});
    });
    return newUser;
  }

  getAll() {
    const users = this.db.conn.query('SELECT id, username, rank, score FROM users', function(err, results, fields) {
      if (err) throw err;
      console.log({results, fields});
      return results;
    });

    return users;
  }

  getOneById(id) {}

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