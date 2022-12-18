"use strict";

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
            "NutrientDetails",
            [
                {
                    productID: 1,
                    details: [
                        "calories: 6",
                        "protein: 0gr",
                        "Fat: Less than 1gr",
                        "Carbohydrates: 1gr",
                        "fiber: less than 1gr",
                        "sugar: 0gr",
                    ],
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
        await queryInterface.bulkDelete("NutrientDetails", null, {});
    },
};
