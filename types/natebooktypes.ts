import type { QueryResult } from "pg";

export type user = {
  user_id: number | null;
  username: string;
  password: string;
  name_color: string | null;
};

export type userRes = {
  method: "POST";
  user: {
    username: string;
    password: string;
  } | null,
  result: QueryResult<any>;
};

export type colorRes = {
  method: "POST";
  user: {
    userId: number;
    color: string;
  }
  result: QueryResult<any>;
};