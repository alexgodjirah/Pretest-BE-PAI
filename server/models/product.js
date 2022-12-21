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
            Product.hasOne(models.Benefits, {
                foreignKey: "productID",
            });
            Product.hasOne(models.SideEffects, {
                foreignKey: "productID",
            });
            Product.hasOne(models.NutrientDetails, {
                foreignKey: "productID",
            });
        }
    }
    Product.init(
        {
            title: DataTypes.STRING,
            latinName: DataTypes.STRING,
            origins: DataTypes.STRING,
            family: DataTypes.ARRAY(DataTypes.STRING),
            pictures: DataTypes.ARRAY(DataTypes.STRING),
            description: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Product",
        }
    );
    return Product;
};
