'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Serie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Serie.hasMany(models.Funko,{
        foreignKey: 'serieId',
        as: 'funkos',
      });
      Serie.belongsTo(models.User,{
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      });
    };
  };
  Serie.init({
    name: {
      type:DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Serie',
  });
  return Serie;
};