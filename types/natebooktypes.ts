import type { QueryResult, QueryResultBase } from "pg";

export type user = {
  id: number;
  username: string;
  password: string;
  nameColor: string | null;
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