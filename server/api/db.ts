import { Client } from "pg"

export default defineEventHandler(async () => {
  const client = new Client({
    user: "postgres",
    password: "nathanandnathan",
    host: "localhost",
    port: 5432,
    database: "postgres",
    ssl: false,
  });

  await client.connect();

  const result = await client.query("SELECT * FROM users");

  await client.end();

  return result.rows;
});