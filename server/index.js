import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import artroutes from './routes/arts.js';
import commentroutes from './routes/comments.js';

dotenv.config();

const app = express()

// middlewares

app.use(cors({ origin: '*' }));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT;

Connection();

// routes

app.use('/api/arts', artroutes);
app.use('/api/comments', commentroutes);

app.listen(PORT, () => {
    console.log(`Server is running at http://loclahost:${PORT}`);
})