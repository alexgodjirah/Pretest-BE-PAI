"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class NutrientDetails extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            NutrientDetails.belongsTo(models.Product, {
                foreignKey: "productID",
            });
        }
    }
    NutrientDetails.init(
        {
            productID: DataTypes.INTEGER,
            details: DataTypes.ARRAY(DataTypes.STRING),
        },
        {
            sequelize,
            modelName: "NutrientDetails",
        }
    );
    return NutrientDetails;
};
