const db = require('../models');

module.exports = function (app) {

  // GET route for retrieving items from database. 
  app.get('/api/teacher', function (req, res) {
    db.Teacher.find({})
      .then(function (dbTeacher) {
        res.json(dbTeacher);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  // POST route to create new entry in database.
  app.post('/api/teacher', function (req, res) {
    db.Teacher.create(req.body)
      .then(function (dbTeacher) {
        res.json(dbTeacher);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  // PUT route for updating database. 
  app.put('/api/teacher', function (req, res) {
    db.Teacher.findOneAndUpdate(
      { _id: req.body.id },
      {
        $set: {
          firstName: req.body.firstName,
          middleInitial: req.body.middleInitial,
          lastName: req.body.lastName,
          grade: req.body.grade, //array
        }
      })
      .then(function (dbTeacher) {
        res.json(dbTeacher);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  // DELETE item from database
  app.delete('/api/teacher/:teacher_id', function (req, res) {
    db.Teacher.findByIdAndRemove(req.params.teacher_id, function (err, teacher) {
      if (err) return res.status(500).send(err);
      // We'll create an object to send back with a message and id of the removed document.
      const response = {
        message: "Item successfully deleted",
        id: teacher._id
      };
      return res.status(200).send(response);
    });
  });

}