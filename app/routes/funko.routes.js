module.exports = app => {
    const funkos = require("../controllers/funko.controller.js");

    var router = require("express").Router();

    // Create a new Funko
    router.post("/", funkos.create);

    // Retrieve all Funkos
    router.get("/", funkos.findAll);

    // Retrieve all published Funkos
    router.get("/published", funkos.findAllPublished);

    // Retrieve a single Funko with id
    router.get("/:id", funkos.findOne);

    // Update a Funko with id
    router.put("/:id", funkos.update);

    // Delete a Funko with id
    router.delete("/:id", funkos.delete);

    // Delete all Funkos
    router.delete("/", funkos.deleteAll);

    app.use('/api/funkos', router);
};