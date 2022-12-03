import { db } from "../db.js";
import { register } from "./authen.js";
import jwt from "jsonwebtoken";


export const checkRes = (req,res) =>{
    const q = "SELECT tableName FROM reservation_details WHERE date = ? AND time = ?"
    db.query(q,[req.body.date,req.body.time],(err,data1)=>{
        // req.body.hasReserations = false;
        let test = false;
        if (data1.length === 0)
        {
            //there are no reservations on that day
            return test;
        }
        test = true;
        return test; //there are reservations on that day
    })
};


export const addReserve = (req,res)=>{
    // res.json("from controller")
    //const {currentUser} = useContext(AuthContext);
    //Declare query
   
    // req.body.tableName = test
    // values[3] = "Table 5"
    // db.query(q2,[values],(err,data)=>{
    //     //console.log(data)"
    //     if(err) return res.json(err)
    //     return res.json(data)
    // });
    

    //grab reserations during same date/time
    const q = "SELECT table_name FROM reservations WHERE date = ? AND time = ?"
    db.query(q,[req.body.date,req.body.time],(err,data1)=>{
        //console.log(data1) //displays data1
        
        let no_Reservations = false;
        //if no reservations on this day/time, so all Tables are available
        if (data1.length !== 0)
        {
            console.log("Found othe resetvations")
           no_Reservations = true;
        };


        //There are reservations for this time, so grab them
        const tableT = "SELECT * FROM table_tracker"
        db.query(tableT,(err,data2)=>{

            for(let i = 0; i < data1.length; i++)
            {
                //iterates through list of tables on Hand
                for (let j = 0; j < data2.length;j++)
                {
                    //if tables same name decreament on_Hand

                    // let test = data1[i].table_name
                    // let numCom = test.split(",").length-1
                    // let test = parseInt(data1[i].table_name)
                    // console.log(test)

                    if(data1[i].table_name === data2[j].table_name)
                    {
                        console.log("decremint")
                        data2[j].on_Hand = data2[j].on_Hand - 1
                    }
                } 
            }

            var Avail = false;
            let table_types = [];

            //iterates through list of tables on Hand
            for (let i= 0; i < data2.length;i++)
            {
                //Check if we have table and equal to or greater than party
                if(data2[i].on_Hand !== 0 && data2[i].table_size >= req.body.guests)
                {
                    table_types.push(data2[i].table_name)
                    Avail = true;
                    break;
                }
            } 


            var combo = false;
            var total = 0;
            var numGuests = req.body.guests
            //if there is nothing available, try a combination
            if(Avail === false)
            {
              
                //look through every table type
                for(var i = 0; i < data2.length; i++)
                {
                    //add available tables until it meets or exceedes number of guests
                    for(var j = 0; j< data2[i].on_Hand; j++){
                        if(total < numGuests){
                            console.log("Adding to total")
                            total = total + data2[i].table_size
                            data2[j].on_Hand = data2[j].on_Hand - 1
                            table_types.push(data2[i].table_name)
                        }
                    }
                    if(total>=numGuests)
                    {
                        console.log("We found combo")
                        combo = true;
                    }
                }
            }


            if(Avail === false && combo === false)
            {
                console.log("No reservations available")
                const tTable = "SELECT * FROM truth_table WHERE bVal = ?"
                db.query(tTable,[req.body.hasReserations],(err,data5)=>{
                // const test2 = false;
                // const token2 = jwt.sign(test2 , "jwtkey");
                // res.cookie("access_token2", token2,{
                //     httpOnly:true
                // })
                // return fals
                    console.log(data5)
                    return res.json(data5)
                })
            }
            
          
                var tableN2 = ""
                const q2 = "INSERT INTO reservation_details ('name', 'phone_Number', 'email', 'number_Of_Guest', 'reservation_Date', 'reservation_Time', 'table_name') VALUES (?)"
                const values = [
                    req.body.date,
                    req.body.time,
                    req.body.guests,
                    req.body.userID,
                    req.body.fullname,
                    req.body.email,
                    req.body.phone,
                    tableN2
                ]

                for(let i=0; i<table_types.length; i++)
                {
                    values[3] = values[3] + table_types[i] + ", ";
                }
                //values[3] = table_types;
                console.log("All tables free NEW")
                db.query(q2,[values],(err,data3)=>{
                    //console.log(data)"
                    if(err) return res.json(err)
                    return res.json(data3)
                });
                

            })

        })
}




// function getTables(req) {

//     // return req.fullname;

//     //gets all tables that we have on hand
//     const tableT = "SELECT * FROM table_tracker"
//     db.query(tableT,(err,data2)=>{
//         //console.log(data2) //display data1
//         //data1[0].table_name gets one element from data1 query
//         //data1.length gets the size
//         //modify tables on hand
//         //iterates through tables taken
//         let test = data2[0].on_Hand
//         console.log(test)
//         console.log("waht")
//         return(data2)

    
        
//     //     for(let i = 0; i < data1.length;i++)
//     //     {
//     //         //iterates through list of tables on Hand
//     //         for (let j = 0; j < data2.length;j++)
//     //         {
//     //             //if tables same name decreament on_Hand
//     //             if(data1[i].table_name === data2[j].table_name)
//     //             {
//     //                 data2[j].on_Hand = data2[j].on_Hand - 1

//     //             }
//     //         } 
//     //     }

//     //     var Avail = false;
//     //     var tableName;


//     //     req.body.table = data2[0].table_name;
//     //     //iterates through list of tables on Hand
//     //     for (let i= 0; i < data2.length;i++)
//     //     {
//     //         //Check if we have table and equal to or greater than party
//     //         if(data2[i].on_Hand !== 0 && data2[i].table_size >= req.body.guests)
//     //         {
//     //             Avail = true;
//     //             req.body.table = data2[i].table_name;
//     //             db.query(q2,[values],(err,data)=>{
//     //                 if(err) return res.json(err)
//     //                 return res.json(data)
//     //             });
//     //             break;
//     //         }
//     //     } 

//     //     //if there is no single table available, find combo of tables
//     //     var combo = false;
//     //     let table_types = [];
//     //     var total = 0;
//     //     if(Avail === false)
//     //     {
//     //         //look through every table type
//     //         for(var i = 0; i < data2.length;i++)
//     //         {
//     //             //add available tables until it meets or exceedes number of guests
//     //             for(var j = 0; j< data2[i].on_Hand; j++){
//     //                 if(total < data1.guests){
//     //                     total = total + data2[i].table_size
//     //                     data2[j].on_Hand = data2[j].on_Hand - 1
//     //                     table_types.push(data2[i].table_name)
//     //                 }
//     //                 else {
//     //                     combo = true;
//     //                     break;
//     //                 }
//     //             }
//     //         }
//     //     }

//     //     //no table avaialable, inform customer to try again
//     //     if(combo === false && Avail === false){
//     //         return //something, might have to make two functions to return if no reservation can be made
//     //     }

//     //     //if we can combine tables, add a reservation in the reservation_table for each table being used
//     //     if(combo === true){
//     //         //for loop query
//     //         for (var i = 0; i < table_types.length;i++)
//     //         {
//     //             req.body.table = table_types[i];
//     //             db.query(q2,[values],(err,data)=>{
//     //                 if(err) return res.json(err)
//     //                 return res.json(data)
//     //             });
//     //         }
//     //     }


//     })


// }