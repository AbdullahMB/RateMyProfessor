module.exports = (sequelize, DataType) => {
    const Professors = sequelize.define('Professors', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataType.STRING,
            unique: true
        },
        department: {
            type: DataType.STRING,
            references: {
                model: "Departments",
                key: "department"
            }
        },
        university: {
            type: DataType.STRING,
            references: {
                model: "Departments",
                key: "university"
            }
        }
    }, {
        classMethods: {
            associate: (models) => {
            }
        }
    });
    return Professors;
};
