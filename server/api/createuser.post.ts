import { genericPost } from '../utils/genericpost'
import createclient from "../utils/createclient";

export default defineEventHandler(async (event) => {
  const client = createclient
  const body = await readBody(event);
  return genericPost(client, body, `INSERT INTO users (username, password) VALUES('${body.username}', '${body.password}')`);
});