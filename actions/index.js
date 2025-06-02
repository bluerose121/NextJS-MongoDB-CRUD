'use server';

import client from "@/db";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

const db = await client.db('next-todos');

export async function getTodos() {
    try {
        const todos = await db.collection('todos').find().toArray();
        console.log(todos)
        return todos
    } catch (e) {
        console.log(e);
    }
}

export async function createTodos(text) {
    // const db = await db.collection('todos').insertOne({ text });
    // console.log(db)
    // revalidatePath('/');
    try {
        await db.collection('todos').insertOne({ text });
    } catch (e) {
        console.log(e);
    }

    revalidatePath('/');
}

export async function deleteTodos(id) {
    try {
        await db.collection('todos').findOneAndDelete({ _id: ObjectId.createFromHexString(id) });
    } catch (e) {
        console.log(e)
    }

    revalidatePath('/');
}

export async function updateTodos(id, newText) {
    try {
        await db.collection('todos').findOneAndUpdate(
            { _id: ObjectId.createFromHexString(id) },
            {
                $set: { text: newText }
                });
    } catch (e) {
        console.log(e)
    }

    revalidatePath('/');
}