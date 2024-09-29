import express from 'express';

import {
    getAllPlayers,
    getPlayer,
    savePlayer,
    deletePlayer,
    updatePlayer
  } from "../controller/players.js";
   
  const router = express.Router();
   
  // http://localhost:3005/api/player
  router.get("/player", getAllPlayers);
   
  // http://localhost:3005/api/player/id
  router.get("/player/:id", getPlayer);
   
  // http://localhost:3005/api/player
  router.post("/player", savePlayer);
   
  // http://localhost:5000/api/player/id
  router.patch("/player/:id", updatePlayer);
   
  // http://localhost:5000/api/player/id
  router.delete("/player/:id", deletePlayer);
   
export {router}