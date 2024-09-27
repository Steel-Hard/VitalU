import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config();

const { Pool } = pg;

 
const pool = new Pool({
    port: 5432,
    host: 'localhost',
    user: 'postgres',
    password:  '123',
    database: 'vitalu',
    ssl:false
});


export default pool;
  