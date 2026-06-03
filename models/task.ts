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
    due_date : DataTypes.DATE,
    notes: DataTypes.STRING,
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },

    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER,
}, {
    tableName: 'task',
    timestamps: true
});

Task.hasMany(UserTask, {
    foreignKey: 'task_id',
    as: 'tasks'
});

export default Task;