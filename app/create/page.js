// app/create-todo/page.js

import CreateTodo from "../../components/create-todo";

export default function CreateTodoPage() {
    return (
        <main className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-3xl mx-auto">
                <header className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800">Create a New Todo</h1>
                </header>

                <section className="mt-8">
                    <CreateTodo />
                </section>
            </div>
        </main>
    );
}
