import { genericPost } from '../utils/genericpost';
import { createClient } from "../utils/createclient";

export default defineEventHandler(async (event) => {
  const client = await createClient();
  const body = await readBody(event);
  console.log(body.username);
  return genericPost(client, body, `DELETE FROM users WHERE username = '${body.username}';`);
});