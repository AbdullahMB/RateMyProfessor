var jwt = require('jwt-simple');

module.exports = app => {
  const cfg = app.libs.config;
  const Users = app.db.models.Users;

  app.post("/api/login", (req, res) => {
    if (req.body.email && req.body.password) {
      const email = req.body.email;
      const password = req.body.password;
      Users.findOne({where: {email: email}})
        .then(user => {
          if (Users.isPassword(user.password, password)) {
            const payload = {id: user.id};
            const tokenv = jwt.encode(payload, cfg.jwtSecret);
            res.cookie('jwt', tokenv);

            res.redirect('http://localhost:8888/rate/home.html');
          } else {
            res.redirect('http://localhost:8888/rate/Login.html');
          }
        })
        .catch(error => res.sendStatus(401));
    } else {
      res.sendStatus(401);
    }
  });

    app.post("/api/logout", (req, res) => {
        res.clearCookie('jwt');
        res.send('Cookie deleted');
    });
};
