const {Client } = require('pg');

const connectionString = 'postgresql://postgres:mysecret@localhost:5432/postgres'

const client = new Client({
    connectionString: connectionString
});

client.connect(err => {
    if(err){
        console.log("connection error", err.stack);
    } else{
        console.log("connected to the database")
    }
});

client.query("SELECT NOW()",(err,res) => {
    if(err){
        console.error(err);
    }else {
        console.log(res.rows[0]);
    }

    client.end();
})