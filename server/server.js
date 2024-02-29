import express, { response } from 'express';
import mysql from 'mysql'
import cors from 'cors'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
const salt = 10;


const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(cookieParser());


// mysql DB connect

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "db_ums"
})

db.connect((error) => {
    if(error) throw error
    else
    console.log("Database Connection is Success");
});

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if(!token){
        return res.json({Error: "You not Auth"});
    }
    else{
        jwt.verify(token, "secret-msg-jwt", (err, decoded) => {
            if(err){
                res.json({Error: "Token X"});
            }
            else{
                req.name = decoded.name;
                next();
            }
        })
    }
}

app.get('/admin', verifyUser, (req, res) => {
    return res.json({Status: "Success", name: req.name});
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
            if(err){
                console.log(err)
            }
            else{
                return res.json({Status: "Success"})
            }
        });
    })
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [req.body.email], (err, data) =>{
        if(err) return res.json({Error: "Error in Server"});
        if(data.length > 0){
            bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
                if(err) return res.json({Error: "Error while comparing the Password"})
                if(response){

                    //assign jsonwebtoken
                    const name = data[0].username;
                    const token = jwt.sign({name} , "secret-msg-jwt", {expiresIn: '1d'});
                    res.cookie('token', token);
                    return res.json({Status: "Success", Result: data});
                }
                else{
                    return res.json({Error: "Password not Match"});
                }
            })
            
        }
        else{
            return res.json({Error: "Email not Existed"})
        }
    })
})


// server run
app.listen(8081, () => {
    console.log("Server Running on Port 8081");
})