import express from 'express';
import Router from './routes/routes.js';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from './database/db.js';


const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Router)

const PORT= 8000;
app.listen(PORT, () => console.log(`server is running successfully on PORT ${PORT}`));
const USERNAME= process.env.DB_USERNAME;
const PASSWORD= process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);