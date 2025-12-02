import pg from 'pg';

export async function genericPost(client: pg.Client, body: any, query:string) {
    await client.connect();
    console.log(body);
    await client.query(query);
    await client.end();
    return {
        status: 'ok',
        user: body,
    }
}