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
    const sql = "INSERT INTO users(userName, firstName, email, password, role, created_at, update_at) VALUES (?)";

    //hashing the Password
    bcrypt.hash(req.body.password.toString(), salt, (err, hashPass) => {
        if(err) return res.json({Error: "ERROR While hashing the Password"});

        // get the currnt time for add to db
        const createTime = new Date();
        const updateTime = new Date();
        const defaultUser = 'user';

        //set the values
        const values = [
            req.body.username,
            req.body.fname,
            req.body.email,
            hashPass,
            defaultUser,
            createTime,
            updateTime
        ]

        // execution of the query
        
        db.query(sql, [values], (err, result) => {
            if(err) return res.json({Error: "Error While Inserting the data to database"});
            return res.json({Status: "Success"});
        })
    })


})


// server run
app.listen(8081, () => {
    console.log("Server Running on Port 8081");
})