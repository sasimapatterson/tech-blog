const { Model, DataTypes } = require('sequelize');
const sequelize = require = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment_text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
    )
    
    module.exports = Comment;

    // timestamps: false, 
    // By default, Sequelize automatically adds the fields createdAt and updatedAt to every model, using the data type DataTypes.DATE. Those fields are automatically managed as well - whenever you use Sequelize to create or update something, those fields will be set correctly. The createdAt field will contain the timestamp representing the moment of creation, and the updatedAt will contain the timestamp of the latest update. (sequelize.org)