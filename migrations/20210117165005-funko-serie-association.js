'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Funkos', // Table name
      'serieId', // Row name
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Series', // Target table name
          key: 'id', // Target row name
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Funkos', // name of Source model
      'serieId' // key we want to remove
    );
  }
};