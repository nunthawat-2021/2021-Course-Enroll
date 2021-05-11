'use strict';

module.exports = (app, db) => {
  app.get('/teachers', (req, res) => {
    db.teachers.findAll({
      include: [
        {    
          model: db.courses,
        }
      ]
    }).then(teachers => {
      res.json(teachers)
    });
  });

  app.get('/courses', (req, res) => {
    db.courses.findAll({}).then(course => {
      res.json(course)
    });
  });

  app.post('/teachers', (req, res) => {
    const newTeacher = req.body.teacher;
    db.teachers.create({
      first_name: newTeacher.first_name,
      last_name: newTeacher.last_name,
      date_of_birth:newTeacher.date_of_birth
    })
    .then(teacher => {
      res.json(teacher);
    });
  });

  app.post('/courses', (req, res) => {
    const newCourse = req.body.course;
    db.courses.create({
      teacher_id: newCourse.teacher_id,
      course_name: newCourse.course_name,
      course_description: newCourse.course_description
    })
    .then(course => {
      res.json(course);
    });
  });
};