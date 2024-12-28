import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://test_owner:XJYM3cvti6Pg@ep-still-pine-a5ybfutz.us-east-2.aws.neon.tech/test?sslmode=require",
});

async function createUserTable() {
  await client.connect();
  const result = await client.query(`
        CREATE TABLE addresses (
          id SERIAL PRIMARY KEY,
          user_id INTEGER NOT NULL,
          city VARCHAR(100) NOT NULL,
          country VARCHAR(100) NOT NULL,
          street VARCHAR(255) NOT NULL,
          pincode VARCHAR(20),
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        );
    `);
  console.log(result);
}
createUserTable();