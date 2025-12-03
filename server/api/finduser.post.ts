import { genericPost } from '../utils/genericpost';
import { createClient } from "../utils/createclient";

export default defineEventHandler(async (event) => {
  const client = await createClient();
  const body = await readBody(event);
  return genericPost(client, body, `SELECT * FROM users WHERE username = '${body.username}')`);
});