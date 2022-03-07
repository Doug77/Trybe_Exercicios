'use strict';

module.exports = {
  async up (queryInterface, DataTypes) {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    author: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    pageQuantity: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    }
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('Books');
  }
};
