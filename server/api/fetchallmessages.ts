import { genericGet } from '../utils/genericget';
import { createClient } from "../utils/createclient";

export default defineEventHandler(async (event) => {
  const client = await createClient();
  return genericGet(client, `SELECT * FROM messages`);
});