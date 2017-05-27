module.exports = (sequelize, DataType) => {
    const Reviews = sequelize.define("Reviews", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataType.INTEGER,
            references: {
                model: "Users",
                key: "id"
            }
        },
        professor_id: {
            type: DataType.INTEGER,
            references: {
                model: "Professors",
                key: "id"
            }
        },
        comments: {
            type: DataType.TEXT
        },
        rating: {
            type: DataType.INTEGER,
            validate: { min: 0, max: 5 }
        },
        difficulty: {
            type: DataType.INTEGER,
            validate: { min: 0, max: 5 }
        }
    }, {
        classMethods: {
            associate: (models) => {

            }
        }
    });
    return Reviews;
};
