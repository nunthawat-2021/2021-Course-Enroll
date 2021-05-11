'use strict'

module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('teacher', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING,
      required: true
    },
    last_name: {
      type: DataTypes.STRING,
      required: true
    },
    date_of_birth: {
        type:  DataTypes.DATE,
        required: true
    }
  }, {
    underscored: true
  });
  return Teacher;
};