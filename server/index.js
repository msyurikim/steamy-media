const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();
//const db = require('../database/config.js');
const db = require('../database/writeCassandra.js');

app.use(parser.json());
app.use(express.static(path.join(__dirname, '../public')));

// POST NEW GAME
app.post('/game', (req, res) => {
  const game = req.body;
  const callback = (err, data) => {
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(200).json(data);
    }
  };
  db.createEntry(game, callback);
});

// GET ONE
app.get('/media/:id', (req, res) => {
  //console.log('get()');
  const gameID = req.params.id;
  const callback = (err, data) => {
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(200).json(data);
    }
  };
  db.getEntry(gameID, callback);
});

// GET ALL
app.get('/media', (req, res) => {
  const game = req.query;
  const callback = (err, data) => {
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(200).json(data);
    }
  };
  // db.getGame(game, callback);
});

// UPDATE GAME PUT
app.put('/game/:id', (req, res) => {
  const gameID = req.params.id;
  const game = req.body;
  const callback = (err, data) => {
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(200).json(data);
    }
  };
  // db.updateGame(gameID, game, callback);
});

// DELETE SINGLE GAME
app.post('/delete/:id', (req, res) => {
  console.log(req);
  const game = req.params.id;
  const callback = (err, data) => {
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(200).json(data);
    }
  };
  // db.deleteSingle(game, callback);
});

// DELETE ALL GAMES
app.post('/delete/all', (req, res) => {
  const callback = (err, data) => {
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(200).json(data);
    }
  };
  // db.deleteAll();
});

module.exports = app;

/*
  addNewGame,
  getGame,
  updateGame,
  deleteSingle,
  deleteAll,
*/