import { log } from "console";
import { Client, QueryResult } from "pg"

var resultUser
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
  console.log(result.rows);

  await client.end();

  resultUser = result.rows[0];
  loggedUser.userId = resultUser.userId;
  loggedUser.username = resultUser.username;
  loggedUser.password = resultUser.password;

  return {
    status: 'ok',
    user: result
  };
});

import { reactive } from "vue";
export const loggedUser = reactive({
  userId: 0,
  username: "",
  password: ""
})