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
  const result = await client.query(`SELECT * FROM users WHERE username = '${body.username}' and password = '${body.password}'`);
  //console.log(result.rows);
  //console.log(body);

  await client.end();

  return {
    status: 'ok',
    user: body,
    result: result,
  };
});