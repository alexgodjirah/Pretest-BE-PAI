"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Product.belongsTo(models.Benefits, {
                foreignKey: "productID",
            });
            Product.belongsTo(models.SideEffects, {
                foreignKey: "productID",
            });
            Product.belongsTo(models.NutrionDetails, {
                foreignKey: "productID",
            });
        }
    }
    Product.init(
        {
            title: DataTypes.STRING,
            latinName: DataTypes.STRING,
            origins: DataTypes.STRING,
            family: DataTypes.ARRAY,
            pictures: DataTypes.ARRAY,
            description: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Product",
        }
    );
    return Product;
};
