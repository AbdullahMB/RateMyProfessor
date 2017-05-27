
var https = require('https');
var fs = require('fs');

module.exports = app => {
  if (process.env.NODE_ENV !== "test") {
    app.db.sequelize.sync().done(() => {
      app.listen(app.get("port"), () => {
          console.log(`RateMyProf API - Port ${app.get("port")}`);
        });
    });
  }
};
