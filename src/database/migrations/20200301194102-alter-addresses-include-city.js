'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('addresses', 'city', { type: Sequelize.STRING });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropColumn('addresses', 'city');
  }
};
