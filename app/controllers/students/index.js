import { Router } from 'express';

import Student from '../../models/student';


export default({ db }) => {
  const router = Router();

  // Get all students
  router.get('/', (req, res) => {
    Student.find()
      .then(students => {
        return res.jsonp(students);
      })
      .catch(error => {
        return res.status(400).jsonp({ error });
      })
  });

  // Get student by id
  router.get('/:id', (req, res) => {
    Student.findById(req.params.id)
      .then(student => {
        return res.jsonp(student);
      })
      .catch(error => {
        return res.status(400).jsonp({ error });
      })
  });

  // Update a student
  router.put('/:id', (req, res) => {
    try {
      Student.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { safe: true, upsert: true },
        (firstParam, student) => {
          res.jsonp(Object.assign({}, student.toObject(), req.body));
        }
      );
    } catch(error) {
      console.log('error', error);
      return res.status(400).jsonp({ error });
    }
  });

  // Bulk Import Students
  router.post('/bulk', (req, res) => {
    Student.insertMany(req.body)
      .then(students => {
        return res.jsonp({ students });
      })
      .catch(error => {
        return res.status(400).jsonp({ error });
      })
  });

  return router;
}
