var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (
      dbExample
    ) {
      res.json(dbExample);
    });
  });

  //Create a Resume with data input from document body
  app.post("/api/resume", function(req, res) {
    console.log("Resume Data: ");
    console.log(req.body);

    db.Resume.create(req.body).then(function(newResume){
      res.json(newResume);
    });
  });

  //Find a Resume based on the name of the person writing it
  app.get("/api/resume/:username", function(req, res){
    db.Resume.findOne({
      where:{
        username: req.params.username
      }
    }).then(function(foundR){
      res.json(foundR);
    });
  });


app.delete("/api/resume/:username", function(req, res){
  db.Resume.destroy({ where: {username: req.params.username}}).then(function(toDelete){
    res.json(toDelete);
  });
});
};