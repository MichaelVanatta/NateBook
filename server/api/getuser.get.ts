import { Client } from "pg"

export default defineEventHandler(async (event) => {
  const client = new Client({
    user: "postgres",
    password: "nathanandnathan",
    host: "localhost",
    port: 5432,
    database: "postgres",
    ssl: false,
  });

  await client.connect();
  const body = await readBody(event);
  console.log(body);
  const result = await client.query(`INSERT INTO users (username, password) VALUES('${body.username}', '${body.password}')`);
  await client.end();
  return {
    status: 'ok',
    user: body,
  }
});