module.exports = (sequelize, DataType) => {
    const Departments = sequelize.define("Departments", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        department: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            },
            unique: true
        },
        university: {
            type: DataType.STRING,
            references: {
                model: "Universities",
                key: "university"
            }
        }
    }, {
        classMethods: {
            associate: (models) => {
            }
        }
    });
    return Departments;
};
