// just document the object structure in comments
// Tener = { id: number, cps: number, createdAt: number }

"use client";
import {useEffect, useRef, useState} from "react";
import {AppwriteException} from "appwrite";
import { Client, ID, TablesDB } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

const tablesDB = new TablesDB(client);

const promise = tablesDB.getRow({
    databaseId: '68e7b2ac00260e13d0ae',
    tableId: 'text',
    rowId: ID.unique(),
    data: { pagenum: 1 }
});

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
import NaviBar from "@/app/navigation";
export default function Home() {
    return (
        <div className="flex bg-gradient-to-br from-blue-800 to-green-800 h-screen  justify-center  ">
        <NaviBar/>
        <main
            className={"text-white bg-neutral-400/20 h-fit rounded-3xl p-10 mt-25 w-95/100"}>
            {promise}
        </main>
        </div>
    );
}
