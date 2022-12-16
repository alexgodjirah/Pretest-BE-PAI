"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Benefits extends Model {
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
    Benefits.init(
        {
            productID: DataTypes.INTEGER,
            title: DataTypes.ARRAY(DataTypes.STRING),
            description: DataTypes.ARRAY(DataTypes.STRING),
        },
        {
            sequelize,
            modelName: "Benefits",
        }
    );
    return Benefits;
};
