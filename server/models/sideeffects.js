"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class SideEffects extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            SideEffects.belongsTo(models.Product, {
                foreignKey: "productID",
            });
        }
    }
    SideEffects.init(
        {
            productID: DataTypes.INTEGER,
            title: DataTypes.ARRAY(DataTypes.STRING),
        },
        {
            sequelize,
            modelName: "SideEffects",
        }
    );
    return SideEffects;
};
