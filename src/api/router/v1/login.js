const UserRepository = require('../../../repository/user');
const LoginUsecase = require('../../../usecase/login');
const LoginController = require('../../controller/login.controller');

function newLoginRouter(app, dbConn, redisConn, env) {
	const userRepo = new UserRepository(dbConn, redisConn);
	const usecase = new LoginUsecase(userRepo);
	const loginController = new LoginController(usecase, env);

	app.post('/login', loginController.login);
}

module.exports = { newLoginRouter };