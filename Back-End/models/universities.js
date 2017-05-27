module.exports = (sequelize, DataType) => {
    const Universities = sequelize.define("Universities", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        university: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            },
            unique: true
        }
    }, {
        classMethods: {
            associate: (models) => {
            }
        }
    });
    return Universities;
};
