const sequelize = require('../config/db');
const User = require('./user');
const Task = require('./task');

const syncDB = async () => {
  try {
    await sequelize.sync({ alter: true }); // { force: true } if you want to drop & recreate
    console.log("Database synced successfully");
  } catch (error) {
    console.error("Database sync failed:", error);
  }
};

module.exports = {
  sequelize,
  User,
  Task,
  syncDB,
};
