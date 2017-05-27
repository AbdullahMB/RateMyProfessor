module.exports = app => {
  const Users = app.db.models.Users;

  app.route("/api/user")
    .all(app.auth.authenticate())

    .get((req, res) => {
      Users.findById(req.user.id)
      .then(result => res.json(result))
      .catch(error => {
        res.status(412).json({msg: error.message});
      });
    })

    .delete((req, res) => {
      Users.destroy({where: {id: req.user.id} })
        .then(result => res.sendStatus(204))
        .catch(error => {
          res.status(412).json({msg: error.message});
        });
    })

    .put((req, res) => {
        Users.update(req.body, {where: {id: req.user.id} })
            .then(result => res.sendStatus(204))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
    });

  app.post("/api/register", (req, res) => {
    Users.create(req.body)
      .then(result => res.json(result))
      .catch(error => {
        res.status(412).json({msg: error.message});
      });
  });


  app.route("/api/users")

    .get((req, res) => {
        Users.findAll()
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
    });

    app.route("/api/user/:id")
        .get((req, res) => {
            Users.findOne({ where: {
                id: req.params.id
            }})
                .then(result => {
                    if (result) {
                        res.json(result);
                    } else {
                        res.sendStatus(404);
                    }
                })
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        });

};
