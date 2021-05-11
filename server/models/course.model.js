'use strict'

module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define('course', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        teacher_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        course_name: {
            type: DataTypes.TEXT,
            required: true
        },
        course_description: {
            type: DataTypes.TEXT,
            required: true
        }
    }, {
        underscored: true
    });
    return Course;
};