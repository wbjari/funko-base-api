'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Funko extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Funko.belongsTo(models.Serie,{
        foreignKey: 'serieId',
        onDelete: 'CASCADE'
      });
      Funko.belongsTo(models.User,{
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      });
      Funko.hasMany(models.Like, {
        foreignKey: 'funkoId',
        as: 'likes',
      });
    };
  };
  Funko.init({
    id: {
      allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Funko',
  });
  return Funko;
};