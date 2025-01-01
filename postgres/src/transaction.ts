import { Client } from "pg";
import express from "express";

// Creating an Express application instance
const app = express();
// Middleware to parse incoming JSON request bodies
app.use(express.json());

// Creating a PostgreSQL client instance with the database connection URL
const pgClient = new Client({
    connectionString:
    "postgresql://test_owner:XJYM3cvti6Pg@ep-still-pine-a5ybfutz.us-east-2.aws.neon.tech/test?sslmode=require",
});

// API endpoint for user signup
app.post("/signup", async (req, res) => {
    // Extracting user details from the request body
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const city = req.body.city;
    const country = req.body.country;
    const street = req.body.street;
    const pincode = req.body.pincode;

    try {
        // Connecting to the PostgreSQL database
        await pgClient.connect();

        // Ensuring the 'users' table exists, or creating it if not
        await pgClient.query(
            `CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );`
        );

        // Ensuring the 'addresses' table exists, or creating it if not
        await pgClient.query(
            `CREATE TABLE IF NOT EXISTS addresses (
                id SERIAL PRIMARY KEY,
                user_id INTEGER NOT NULL,
                city VARCHAR(100) NOT NULL,
                country VARCHAR(100) NOT NULL,
                street VARCHAR(255) NOT NULL,
                pincode VARCHAR(20),
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            );`
        );

        // Query to insert user data into the 'users' table
        const insertQuery = `INSERT INTO users(username, email, password) VALUES ($1, $2, $3) RETURNING id;`;

        // Query to insert address data into the 'addresses' table
        const addressQuery = `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES ($1, $2, $3, $4, $5);`;

        // Start a database transaction
        await pgClient.query("BEGIN;");

        // Insert user data and get the newly created user's ID
        const response = await pgClient.query(insertQuery, [username, email, password]);
        const userId = response.rows[0].id; // Extract the user ID from the insert response

        // Insert address data linked to the user ID
        await pgClient.query(addressQuery, [city, country, street, pincode, userId]);

        // Commit the transaction to make the changes permanent
        await pgClient.query("COMMIT;");

        // Sending a success response to the client
        res.json({
            message: "You have signed up successfully",
        });

    } catch (error) {
        // Logging and handling errors
        console.log(error);

        // Rolling back the transaction if any query fails to prevent partial updates
        await pgClient.query("ROLLBACK;");

        // Sending an error response to the client
        res.status(400).json({
            message: "Error while signing up",
        });
    }
});

// Starting the server to listen on port 3000
app.listen(3000);