'use strict'

const Sequelize = require('sequelize');
const env = require('./env');
const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  dialect: env.DATABASE_DIALECT,
  define: {
    underscored: true
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.teachers = require('../models/teacher.model')(sequelize, Sequelize);
db.courses = require('../models/course.model')(sequelize, Sequelize);

db.courses.belongsTo(db.teachers);
db.teachers.hasMany(db.courses);


module.exports = db;