import express from 'express';
import middleware from '../middleware';
import initializeDb from '../utils/db';

import students from '../controllers/students';

let router = express();

//Connect to database
initializeDb(db => {
  // Init middleware
  router.use(middleware({ db }));

  // Routes
  router.use('/students', students({ db }));
});

export default router;
