const { DataTypes } = require('sequelize');
const sequelize = require('./db');
// const UserTask = require('./user_task');

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    external_id: {
        type: DataTypes.STRING,
        unique: true
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    mob_no: DataTypes.BIGINT,
    status: DataTypes.STRING,
    password: DataTypes.STRING,
    createdAt: DataTypes.TIME,
    updatedAt: DataTypes.TIME,
}, {
    tableName: 'user',
    timestamps: true
});

// User.hasMany(UserTask, {
//     foreignKey: 'user_id',
//     as: 'tasks'
// });

module.exports = User;