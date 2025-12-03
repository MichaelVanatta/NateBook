import type pg from 'pg';
import type { user } from '../../types/natebooktypes';

export async function genericPost(
  client: pg.Client,
  body: user,
  query: string,
) {
  await client.connect();
  console.log(body);
  await client.query(query);
  await client.end();
  return {
    status: "ok",
    user: body,
  };
}
