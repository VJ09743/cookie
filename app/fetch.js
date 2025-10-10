// fetch.js
import { Client, TablesDB, Query } from "appwrite";

export default async function fet(pagenumval) {
    const client = new Client()
        .setEndpoint("https://api.jorithm.net/v1")
        .setProject("68e6c97500379b85edde");

    const databases = new TablesDB(client);

    let rep;
    try {
        rep = await databases.listRows({
            databaseId: "68e7b2ac00260e13d0ae",
            tableId: "text",
            queries: [Query.equal("pagenum", pagenumval)],
        });
    } catch (error) {
        console.error(error);
        rep = { rows: [] };
    }
    return rep.rows[0].text;
}
