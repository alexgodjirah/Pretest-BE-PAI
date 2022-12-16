"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Products", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            latinName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            origins: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            family: {
                type: Sequelize.ARRAY,
                allowNull: true,
            },
            pictures: {
                type: Sequelize.ARRAY,
                allowNull: true,
            },
            description: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Products");
    },
};
