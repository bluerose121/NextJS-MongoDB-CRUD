import Link from 'next/link';
import { getTodos } from '../../actions';
import Todo from '../../components/todo';

export default async function ListTodoPage() {
    const Todos = await getTodos();

    return (
        <main className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-3xl mx-auto flex flex-col gap-10">
                <header className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800">📝 Your Todos</h1>
                </header>

                <section>
                    {Todos?.length > 0 ? (
                        <div className="space-y-4">
                            {Todos.map((todo) => {
                                const { _id, text } = todo;
                                return (
                                    <Todo
                                        key={_id.toString()}
                                        id={_id.toString()}
                                        text={text}
                                    />
                                );
                            })}
                        </div>
                    ) : (
                        <p className="text-gray-500 text-center">
                            You don’t have any todos yet. Try adding one from the homepage!
                        </p>
                    )}
                </section>

                {/* Button Home */}
                <section className="mt-8 flex justify-center">
                    <Link href="/">
                        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Home
                        </button>
                    </Link>
                </section>
            </div>
        </main>
    );
}
