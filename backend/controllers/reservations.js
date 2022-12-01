import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { AuthContext } from './client/context/authContext';
import e from "express";


//need to include context and add those values to the insert if they exist?
export const addReserve = (req,res)=>{
    // res.json("from controller")
    const {currentUser} = useContext(AuthContext);
    const q = "INSERT INTO reservations (`date`,`time`,`guests`,`table`,`userID`,`fullname`,`email`,`phone`) VALUES (?)"
    // const values = [
    //     req.body.date,
    //     req.body.time,
    //     req.body.guests,
    //     req.body.table,
    //     req.body.userID,
    //     req.body.fullname,
    //     req.body.email,
    //     req.body.phone
    // ]

    //check to see if the user has an account, if so fill in their information
    const user = currentUser.username;
    if (user.length){
        const values = [
            req.body.date,
            req.body.time,
            req.body.guests,
            req.body.table,
            currentUser.userID,
            currentUser.fullname,
            currentUser.email,
            currentUser.phone
        ]
    }
    else{
        const values = [
            req.body.date,
            req.body.time,
            req.body.guests,
            req.body.table,
        ]
    }


    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })

}


// app.post("/books", (req,res)=>{
//     const q = "INSERT INTO books (`title`,`desc`,`price`,`cover`) VALUES (?)"
//     const values = [
//         req.body.title,
//         req.body.desc,
//         req.body.price,
//         req.body.cover,
//     ]

//     db.query(q,[values], (err,data)=>{
//         if(err) return res.json(err)
//         return res.json(data)
//     })
// })

