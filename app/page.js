import {Client, TablesDB} from "appwrite";
import NaviBar from "@/app/navigation";

export default async function Home() {
    // ✅ Initialize Appwrite client
    const client = new Client()
        .setEndpoint("https://fra.cloud.appwrite.io/v1")
        .setProject("68e6c97500379b85edde");

    const databases = new TablesDB(client);

    // ✅ Wait for data before rendering
    let rep;
    try {
        rep = await databases.listRows({
            databaseId: "68e7b2ac00260e13d0ae",
            tableId: "text",
            queries: [], // optional
        });
    } catch (error) {
        console.error(error);
        rep = { rows: [] };
    }

    return (
        <div className="flex bg-gradient-to-br from-blue-800 to-green-800 h-screen justify-center">
            <NaviBar />
            <main className="text-white bg-neutral-400/20 h-fit rounded-3xl p-10 mt-25 w-95/100 overflow-auto">
                {rep.rows?.length > 0 ? (
                    rep.rows.map((doc) => (
                        <text key={doc.$id} className="mb-2">{doc.text}</text>
                    ))
                ) : (
                    <pre>No data found.</pre>
                )}
            </main>
        </div>
    );
}
