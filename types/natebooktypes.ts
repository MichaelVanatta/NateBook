import type { QueryResult, QueryResultBase } from "pg";

export type user = {
  id: number | null;
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
