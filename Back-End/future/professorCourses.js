/*
module.exports = (sequelize, DataType) => {
    const ProfessorCourses = sequelize.define("ProfessorCourses", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        course: {
            type: DataType.STRING,
            references: {
                model: "Courses",
                key: "course"
            }
        },
        professor_id: {
            type: DataType.INTEGER,
            references: {
                model: "Professors",
                key: "id"
            }
        },
    }, {
        classMethods: {
            associate: (models) => {}
        }
    });
    return ProfessorCourses;
};
*/
