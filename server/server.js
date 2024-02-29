import express from 'express';
import mysql from 'mysql'
import cors from 'cors'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());


// mysql DB connect

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "db_ums"
})

// server run
app.listen(8081, () => {
    console.log("Server Running on Port 8081");
})