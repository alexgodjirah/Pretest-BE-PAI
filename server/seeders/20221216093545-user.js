"use strict";

const { hashPassword } = require("../helpers/passwordHandler");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert(
            "Users",
            [
                {
                    username: "admin",
                    email: "admin@pai.com",
                    password: hashPassword("admin pai"),
                    role: "admin",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    username: "alex",
                    email: "alex@pai.com",
                    password: hashPassword("hello world"),
                    role: "user",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete("Users", null, {});
    },
};
