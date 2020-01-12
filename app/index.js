import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';

require('dotenv').config();
let app = express();

// Init Server
app.server = http.createServer(app);

// Enable Cors
app.use(cors());

// Middleware
app.use(bodyParser.json({
  limit: process.env.BODY_LIMIT
}));

// API Routes
app.use(routes);

app.server.listen(process.env.PORT || 3005);
console.log(`Started on port ${app.server.address().port}`);

export default app;
