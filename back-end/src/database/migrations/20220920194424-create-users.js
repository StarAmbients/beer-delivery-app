'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(255),
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      externalid: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      externaltype: {
        allowNull: true,
        type: Sequelize.STRING(255),
      }, 
      role: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('users');
  }
};
