const { DataTypes } = require("sequelize");
const db = require("../config/database");

const User = db.define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "01-01-2000",
    },
    account_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Date.now(),
    },
    user_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 30000,
    },
  },
  {
    tableName: "User",
    timestamps: true,
    freezeTableName: true, // Prevent pluralization
  }
);

module.exports = User;
