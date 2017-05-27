module.exports = app => {
    const Profesors = app.db.models.Professors;

    app.route("/api/professors")

        .get((req, res) => {
            Profesors.findAll()
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        });

    app.route("/api/professor/:id")
        .get((req, res) => {
            Profesors.findOne({ where: {
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