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
            "Benefits",
            [
                {
                    productID: 1,
                    title: [
                        "Increased Energy",
                        "Sharper Cognitive Function",
                        "Anti-Inflammatory Effects",
                        "Treatment of Erectile Dyscfunction",
                        "Lowering Blood Sugar",
                    ],
                    description: [
                        "Gingseng may help stimulate physical and mental activity in prople who feel weak and tired...",
                        "Gingseng may improve thingking processes and cognition...",
                        "Gingseng may reduce inflammation",
                        "Men may take gingseng to treat erectile dysfunction...",
                        "Gingseng may help lower blood sugar and help treat diabeter...",
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
        await queryInterface.bulkDelete("Benefits", null, {});
    },
};
