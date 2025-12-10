import { genericPost } from '../utils/genericpost';
import { createClient } from "../utils/createclient";

export default defineEventHandler(async (event) => {
  const client = await createClient();
  const body = await readBody(event);
  return genericPost(client, body, `UPDATE users SET name_color = ${body.name_color} WHERE user_id = ${body.user_id}`);
});