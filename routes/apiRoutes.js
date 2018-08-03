var studentData = require("../data/studentData");

module.exports = function(app) {
  app.get("/api/students", function(req, res){
    res.json(studentData);

    console.log(studentData);
  });

};