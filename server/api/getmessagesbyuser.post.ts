import type pg from 'pg';
import type { user } from '../../types/natebooktypes';
import { createClient } from "../utils/createclient";

export default defineEventHandler(async (event) => {
  const client = await createClient();
  const body = await readBody(event);
  await client.connect();
  console.log(body);
  const result = await client.query(`SELECT * FROM messages WHERE user_id = ${body.user_id}`);
  await client.end();
  return {
    status: 'ok',
    message: body,
    result: result,
  };
});