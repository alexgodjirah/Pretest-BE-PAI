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
            "Products",
            [
                {
                    title: "Gingseng",
                    latinName: "Panax",
                    origins: "Shangdang, China",
                    family: [
                        "Korean Gingseng",
                        "China Gingseng",
                        "American Gingseng",
                    ],
                    pictures: [
                        "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/ginseng-root-on-cutting-board-1296x728.jpg?w=1155&h=989",
                        "https://cdn.britannica.com/06/198806-050-4099B24F/roots-ginseng-market-Asian-Korean.jpg",
                    ],
                    description:
                        "Gingseng is an herb that is rich in antioxidants. Research suggests that it may offer benefits for brain health, immune function, blood sugar control, and more",
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
        await queryInterface.bulkDelete("Products", null, {});
    },
};
