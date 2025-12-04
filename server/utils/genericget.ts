import type pg from 'pg';
import type { user } from '../../types/natebooktypes';

export async function genericGet(client: pg.Client, query: string) {
  await client.connect();
  const result = await client.query(query);
  await client.end();
  return {
    status: 'ok',
    result: result,
  };
}
