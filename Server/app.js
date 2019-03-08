import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import db from './config/database';
import router from './routes/gig';

const app = express();

const port = process.env.PORT || 4000;

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.use('/gigs', router);
app.listen(port, () => console.log(`app started on port ${port}`));



