const GameRepository = require('../../../repository/game');
const GameUsecase = require('../../../usecase/game');
const GameController = require('../../controller/game.controller');

function newGameRouter(app, dbConn, redisConn, env) {
	const gameRepo = new GameRepository(dbConn, redisConn);
	const gameUsecase = new GameUsecase(gameRepo);
	const gameController = new GameController(gameUsecase, env);

	app.post('/saveScore', gameController.saveScore);
	app.post('/leaderBoard', gameController.leaderBoard);
}

module.exports = { newGameRouter };