"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class NutrionDetail extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Benefits.belongsTo(models.Product, {
                foreignKey: "productID",
            });
        }
    }
    NutrionDetail.init(
        {
            details: DataTypes.ARRAY(DataTypes.STRING),
        },
        {
            sequelize,
            modelName: "NutrionDetail",
        }
    );
    return NutrionDetail;
};
