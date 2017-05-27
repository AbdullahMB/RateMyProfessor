/*
module.exports = (sequelize, DataType) => {
  const Courses = sequelize.define("Courses", {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    course: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      },
      unique: true
    },
      department_id: {
          type: DataType.INTEGER,
          references: {
              model: "Departments",
              key: "department"
          }
      }
  }, {
    classMethods: {
      associate: (models) => {
      }
    }
  });
  return Courses;
};
*/
