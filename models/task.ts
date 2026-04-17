import {sequelize} from "./db";

import {DataTypes}  from "sequelize";
import {UserTask} from "./user_task";

export const Task = sequelize.define('task', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    external_id: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING,
    createdAt: DataTypes.TIME,
    updatedAt: DataTypes.TIME,
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER,
}, {
    tableName: 'task',
    timestamps: true
});

// Task.hasMany(UserTask, {
//     foreignKey: 'task_id',
//     as: 'tasks'
// });

export default Task;