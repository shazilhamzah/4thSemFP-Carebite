const { DataTypes } = require("sequelize");
const db = require("../config/database");
const Hospital = require("./Hospital");
const User = require("./User"); // Assuming your user model is in user.model.js

const HospitalManagement = db.define(
  "HospitalManagement",
  {
    hospitalID: {
      type: DataTypes.UUID,
      primaryKey: true,
      references: {
        model: Hospital,
        key: "hospitalID",
      },
    },
    gmID: {
      type: DataTypes.UUID,
      references: {
        model: User,
        key: "id",
      },
    },
    supervisorID: {
      type: DataTypes.UUID,
      references: {
        model: User,
        key: "id",
      },
    },
    admID: {
      type: DataTypes.UUID,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    tableName: "hospital_management",
    timestamps: true,
    freezeTableName: true,
  }
);

// Setup associations
Hospital.hasOne(HospitalManagement, { foreignKey: "hospitalID" });
HospitalManagement.belongsTo(Hospital, { foreignKey: "hospitalID" });

HospitalManagement.belongsTo(User, { foreignKey: "gmID", as: "GeneralManager" });
HospitalManagement.belongsTo(User, { foreignKey: "supervisorID", as: "Supervisor" });
HospitalManagement.belongsTo(User, { foreignKey: "admID", as: "Administrator" });

User.hasMany(HospitalManagement, { foreignKey: "gmID" });
User.hasMany(HospitalManagement, { foreignKey: "supervisorID" });
User.hasMany(HospitalManagement, { foreignKey: "admID" });

module.exports = HospitalManagement;