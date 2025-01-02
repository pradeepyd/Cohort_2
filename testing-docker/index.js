const {Client } = require('pg');

const connectionString = "postgresql://pradeep:mysecret@127.0.0.1:5432/pradeep";

const client = new Client({
    connectionString: connectionString
});

client.connect(err => {
    if(err){
        console.log("before connecting");
        console.log("connection error", err.message);
        console.log("connection error", err.stack);
    } else{
        console.log("connected to the database")
    }
});

client.query("SELECT NOW()",(err,res) => {
    if(err){
        console.log("selecting")
        console.error(err);
    }else {
        console.log(res.rows[0]);
    }

    client.end();
})