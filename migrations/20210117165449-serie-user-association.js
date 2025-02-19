'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Series', // Table name
      'userId', // Row name
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', // Target table name
          key: 'id', // Target row name
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Series', // name of Source model
      'userId' // key we want to remove
    );
  }
};