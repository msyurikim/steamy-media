/* eslint-disable no-console */
const mongoose = require('mongoose');

const db = mongoose.connection;

mongoose.connect('mongodb://localhost/mediaDb', { useNewUrlParser: true });

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to db');
});

const gameSchema = new mongoose.Schema({
  proxyId: Number,
  summary: {
    title: String,
    splash: String,
    description: String,
    reviews: { general: String, total: Number },
    releaseDate: String,
    developer: String,
    publisher: String,
    tags: [String],
    percentage: Number,
  },
  media: {
    video: [{ video: String, thumbnail: String }],
    images: [String],
  },
});

const Game = mongoose.model('Game', gameSchema);

// CREATE

const addNewGame = (game, cb) => {
  const newGame = new Game(game);
  // eslint-disable-next-line no-shadow
  newGame.save((err, newGame) => {
    if (err) {
      cb(err);
    } else {
      cb(null, newGame);
    }
  });
};

// READ

const getGame = (game, cb) => {
  console.log('getGame() ' + game.proxyId);
  Game.find({ proxyId: game.proxyId }, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(null, data);
    }
  });
};

// UPDATE

const updateGame = (game, updateInfo, cb) => {
  console.log('updateGame()');
  Game.updateOne({ proxyId: game.proxyId }, updateInfo, { upsert: true }, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(null, data);
    }
  });
};

/*
db.collection.updateOne(
   <filter>,
   <update>,
   {
     upsert: <boolean>,
     writeConcern: <document>,
     collation: <document>,
     arrayFilters: [ <filterdocument1>, ... ],
   }
)
*/


// DELETE ONE

const deleteSingle = (gameID, cb) => {
  console.log('deleteSingle() ' + gameID);
  Game.findOneAndDelete({ proxyId: gameID }, (error, query) => {
    if (error) {
      return cb(error, null);
    } else {
      return cb(null, query);
    }
    
  });
};

// DELETE ALL

const deleteAll = () => {
  console.log('deleteAll()');
  Game.deleteMany({}, (error) => {
    if (error) {
       console.log(error);
    }
  });
}

module.exports = {
  addNewGame,
  getGame,
  updateGame,
  deleteSingle,
  deleteAll,
};