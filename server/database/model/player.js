// represents the  model
import { Model, DataTypes, UUIDV4 } from "sequelize";
import { sequelize } from "../config/dbconfig.js";
 
class Player extends Model {}
 
Player.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    position: {
      type: DataTypes.STRING
    },
    level: {
      type: DataTypes.INTEGER
    }
  },
  {
    sequelize,
    modelName: "players",
    timestamps: false
  }
);

// module.exports = Player;
export {Player}