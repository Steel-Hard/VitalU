// teste e exemplificação 

import pool from "../bd";

async function asyncrono() {
    
    const mail = 'sasdas';
    const pass = 'sadasa';
    
    try{
        const insert = await pool.query(`INSERT INTO User_Default (Email,Passwd) values ($1,$2)`,[mail,pass]);
        console.log(insert);
        const select = await pool.query('SELECT * FROM User_Default');
        console.log(select);
    
    }catch(err){
        console.log(err);
    }

}

asyncrono();

