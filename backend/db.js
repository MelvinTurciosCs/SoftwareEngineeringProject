import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "hunter27",
    database:"swe"
  })