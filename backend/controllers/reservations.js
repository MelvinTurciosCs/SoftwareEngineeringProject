import { db } from "../db.js";

//const {currentUser} = useContext(AuthContext);
//need to include context and add those values to the insert if they exist?
export const addReserve = (req,res)=>{
    // res.json("from controller")
    //const {currentUser} = useContext(AuthContext);

    //grab reserations during same date/time
    const q = "SELECT * FROM reservations WHERE date = ? AND time = ?"
    db.query(q,[req.body.date,req.body.time],(err,data)=>{
        console.log(data)
        let test = data;
        console.log(test);
        // let total_tables = [2,3,4,5];

        // //find if single table can accomidate guests
        // if(req.body.guests > total_tables.length+1)
        // {
        //     let addTables = 0;
        //     let tTables = total_tables.length 
        //     while(addTables < req.body.guests)
        //     {
        //         total_tables[totl]
        //     }
        // }

        // //find remaining tables
        // for(let i=0; i<data.length; i++){
        //     let curTable = data[i].guests;
        // }
    })




    const q2 = "INSERT INTO reservations (`date`,`time`,`guests`,`table`,`userID`,`fullname`,`email`,`phone`) VALUES (?)"
    const values = [
        req.body.date,
        req.body.time,
        req.body.guests,
        req.body.table,
        req.body.userID,
        req.body.fullname,
        req.body.email,
        req.body.phone
    ]

    //check to see if the user has an account, if so fill in their information
    // const user = currentUser.username;
    // if (user.length){
    //     const values = [
    //         req.body.date,
    //         req.body.time,
    //         req.body.guests,
    //         req.body.table,
    //         currentUser.userID,
    //         currentUser.fullname,
    //         currentUser.email,
    //         currentUser.phone
    //     ]
    // }
    // else{
    //     const values = [
    //         req.body.date,
    //         req.body.time,
    //         req.body.guests,
    //         req.body.table,
    //     ]
    // }


    db.query(q2,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    });

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

