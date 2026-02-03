const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Hospital = db.define(
  "Hospital",
  {
    hospitalID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "hospital",
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Hospital;