const { Server } = require("boardgame.io/server");
const { TicTacToe } = require("./game");

const port = process.env.PORT || 8000;

// boardgame.io サーバー設定
const gameServer = Server({ 
  games: [TicTacToe],
  origins: ['*'],
});
gameServer.run(port);

// server.keepAliveTimeout = 120 * 1000;
// server.headersTimeout = 120 * 1000;