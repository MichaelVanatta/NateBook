import { genericPost } from '../utils/genericpost';
import { createClient } from "../utils/createclient";

export default defineEventHandler(async (event) => {
  const client = await createClient();
  const body = await readBody(event);
  return genericPost(client, body, `INSERT INTO users (username, password, name_color) VALUES('${body.username}', '${body.password}', ${body.name_color})`);
});