"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class NutrientDetail extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            NutrientDetail.belongsTo(models.Product, {
                foreignKey: "productID",
            });
        }
    }
    NutrientDetail.init(
        {
            productID: DataTypes.INTEGER,
            details: DataTypes.ARRAY(DataTypes.STRING),
        },
        {
            sequelize,
            modelName: "NutrionDetail",
        }
    );
    return NutrientDetail;
};
