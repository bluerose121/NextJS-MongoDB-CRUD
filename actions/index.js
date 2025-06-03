'use server';

import client from "../db";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

// Pastikan inisialisasi database berada di luar fungsi untuk menghindari inisialisasi ulang
const db = client.db('next-todos');

export async function getTodos() {
    try {
        const todos = await db.collection('todos').find().toArray();
        console.log(todos);
        return todos;
    } catch (e) {
        console.error("Error fetching todos:", e);
    }
}

export async function createTodos(text) {
    try {
        await db.collection('todos').insertOne({ text });
        // Revalidate path to ensure the new todo is reflected
        revalidatePath('/');
    } catch (e) {
        console.error("Error creating todo:", e);
    }
}

export async function deleteTodos(id) {
    try {
        // Perbaiki ObjectId dengan new ObjectId()
        await db.collection('todos').findOneAndDelete({ _id: new ObjectId(id) });
        revalidatePath('/');
    } catch (e) {
        console.error("Error deleting todo:", e);
    }
}

export async function updateTodos(id, newText) {
    try {
        // Perbaiki ObjectId dengan new ObjectId()
        await db.collection('todos').findOneAndUpdate(
            { _id: new ObjectId(id) },
            {
                $set: { text: newText }
            }
        );
        revalidatePath('/');
    } catch (e) {
        console.error("Error updating todo:", e);
    }
}
