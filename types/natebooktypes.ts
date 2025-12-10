import type { QueryResult } from "pg";

export type user = {
  user_id: number;
  username: string;
  password: string;
  name_color: string;
};

export type userRes = {
  method: "POST";
  user: {
    username: string;
    password: string;
  } | null,
  result: QueryResult<any>;
};

export type message = {
  post_id: number,
  user_id: number,
  text: string
}

export type messageRes = {
  method: 'POST',
  body: {
    post_id: number | null,
    user_id: number,
    text: string
  }
}