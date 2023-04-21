const UserRepository = require('../../../repository/user');
const SignupUsecase = require('../../../usecase/signup');
const SignupController = require('../../controller/signup.controller');

function newSignupRouter(app, dbConn, redisConn, env) {
	const userRepo = new UserRepository(dbConn, redisConn);
	const usecase = new SignupUsecase(userRepo);
	const signupController = new SignupController(usecase, env);

	app.post('/newAccount', signupController.newAccount);
}

module.exports = { newSignupRouter };