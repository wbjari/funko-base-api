'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Likes', // Table name
      'funkoId', // Row name
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Funkos', // Target table name
          key: 'id', // Target row name
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Likes', // name of Source model
      'funkoId' // key we want to remove
    );
  }
};