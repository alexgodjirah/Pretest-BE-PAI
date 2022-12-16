"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("SideEffects", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            productID: {
                type: Sequelize.INTEGER,
                references: {
                    model: { tableName: "Products", key: "id" },
                },
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            },
            title: {
                type: Sequelize.ARRAY,
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
        await queryInterface.dropTable("SideEffects");
    },
};
