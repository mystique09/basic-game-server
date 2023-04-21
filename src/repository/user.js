class UserRepository {
  constructor(dbConn, redisConn) {
    this.dbConn = dbConn;
    this.redisConn = redisConn;
  }

  create(payload) {}

  getAll() {}

  getOneById(id) {}

  getOneByUsername(username) {}
}

module.exports = UserRepository;