-- Drop Tables
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS messages CASCADE;
DROP TABLE IF EXISTS posts CASCADE;

CREATE TABLE IF NOT EXISTS users (
    "user_id" SERIAL NOT NULL PRIMARY KEY,
    "username" VARCHAR(32) NOT NULL,
    "password" VARCHAR(32) NOT NULL,
    "name_color" VARCHAR(32) NULL
);

CREATE TABLE IF NOT EXISTS messages (
    "post_id" SERIAL NOT NULL PRIMARY KEY,
    "text" VARCHAR(200) NOT NULL,
    "user_id" INT
);

-- Check Tables
select * from users --join messages on users.user_id=messages.user_id

select * from messages

delete * from users
