import mysql from "mysql";

export const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"abhishek123",
    database:"social"
});

db.connect(function(err){
    if(err) throw err;
    else{console.log("Connected!");}
})