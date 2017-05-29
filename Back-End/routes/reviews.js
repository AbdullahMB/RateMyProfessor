module.exports = app => {
    const Reviews = app.db.models.Reviews;

    app.route("/api/user/review/professor/:id")
        .all(app.auth.authenticate())

        // POST a review
        .post((req, res) => {
            req.body.user_id = req.user.id;
            req.body.professor_id = req.params.id;
            Reviews.create(req.body)
                .then(result => res.redirect('http://localhost:8888/rate/professorRating.html?id='+req.body.professor_id))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        });

    app.route("/api/user/review/:id")
        .all(app.auth.authenticate())

        // GET a review
        .get((req, res) => {
            Reviews.findById(req.params.id)
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        })

        // DELETE a review
        .delete((req, res) => {
            Reviews.destroy({where: {id: req.params.id} })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        })

        // PUT a review
        .put((req, res) => {
            Reviews.update(req.body, {where: {id: req.params.id} })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        });

    app.route("/api/user/reviews")
        .all(app.auth.authenticate())

        // GET all user reviews
        .get((req, res) => {
            Reviews.findAll({where: {user_id: req.user.id}})
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        });


    app.route("/api/reviews")
        // GET all reviews
        .get((req, res) => {
            Reviews.findAll()
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        });

    app.route("/api/reviews/user/:id")
    // GET all reviews of a user
        .get((req, res) => {
            Reviews.findAll({where: {user_id: req.params.id}})
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        });

    app.route("/api/reviews/professor/:id")
    // GET all reviews of a professor
        .get((req, res) => {
            Reviews.findAll({where: {professor_id: req.params.id}})
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        });

    app.route("/api/reviews/professor/:pid/user/:uid")
    // GET all reviews of a professor of a user
        .get((req, res) => {
            Reviews.findAll({where: {
                professor_id: req.params.pid,
                user_id: req.params.uid
            }})
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        });

};
