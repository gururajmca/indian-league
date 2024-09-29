// represents the data from db
import {Player} from "../database/model/player.js";

// UUID
import { v4 as uuidv4 } from 'uuid';

const getAllPlayers = async (req, res) => {
  const players = await Player.findAndCountAll();
  res.json({
    players: players.rows,
    total: players.count
  });
};
 
const getPlayer = async (req, res) => {
  const id = req.params.id;
  await Player.findOne({ where: { id: id } }).then((item) => {
    if (item != null) {
      res.json(item);
    } else {
      res.status(404).json({status: 'error', 'msg': `Error while geting record for player ${id}`});
    }
  });
};
 
const savePlayer = async (req, res) => {
  const uuID = uuidv4();
  const player = {
    uuid: uuID,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    position: req.body.position,
    level: req.body.level,
  };
  await Player.create(player).then()
  await Player.findOne({ where: { uuid: uuID } }).then((item) => {
    if (item != null) {
      res.json(item);
    } else {
      res.status(404).json({status: 'error', 'msg': `Error while retriving the newly added record for player ${uuID}`});
    }
  });
};

const updatePlayer = async (req, res) => {
  const id = req.params.id;
  await Player.findByPk(id).then((item) => {
    if (item != null) {
      item
        .update({
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          position: req.body.position,
          level: req.body.level,
        })
        .then(async() => {
          await Player.findOne({ where: { id: id } }).then((item) => {
            if (item != null) {
              res.json(item);
            } else {
              res.status(404).json({status: 'error', 'msg': `Error while geting record for player ${id}`});
            }
          });
        });
    } else {
      res.status(404).json({status: 'error', 'msg': `Error while updating the record for player ${id}`});;
    }
  });
};
 
const deletePlayer = async (req, res) => {
  const id = req.params.id;
  await Player.findByPk(id).then((item) => {
    if (item != null) {
      item.destroy();
      res.status(200).json({status: 'success', 'msg': `Deleted the record for player ${id}`});
    } else {
      res.status(404).json({status: 'error', 'msg': `Error while deleting the record for player ${id}`});
    }
  });
};
 
export {
  getAllPlayers,
  getPlayer,
  savePlayer,
  deletePlayer,
  updatePlayer
};