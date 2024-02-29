import express from 'express';
import mysql from 'mysql'
import cors from 'cors'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
const salt = 10;


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

app.post('/register', (req, res) => {
    const sql = "INSERT INTO login(`userName`,`firstName`,`email`,`password`,`created_at`,`update_at`) VALUES (?)";
    const createTime = new Date();
    const updateTime = new Date();

    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if(err) return res.json({Error: "ERROR While hashing the Password"});
    })

    const values = [
        req.body.username,
        req.body.fname,
        req.body.email,
        req.body.password,
        createTime,
        updateTime
    ]
})


// server run
app.listen(8081, () => {
    console.log("Server Running on Port 8081");
})