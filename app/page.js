// import { getTodos } from "@/actions";
// import CreateTodo from "@/components/create-todo";
// import Todo from "@/components/todo";

// export default async function Home() {
//   const Todos = await getTodos();

//   return (
//     <main className="min-h-screen bg-gray-50 py-12 px-4">
//       {/* Page Container */}
//       <div className="max-w-3xl mx-auto flex flex-col gap-10">
//         {/* Title */}
//         <header className="text-center">
//           <h1 className="text-4xl font-bold text-gray-800">📝 Todos App</h1>
//           <p className="text-gray-500 mt-2 text-lg">
//             Built with Next.js & MongoDB
//           </p>
//         </header>

//         {/* Create Todo Form */}
//         <section>
//           <CreateTodo />
//         </section>

//         {/* Todo List */}
//         <section>
//           <h2 className="text-2xl font-semibold mb-4 text-gray-700 text-center">Your Todos</h2>
//           {Todos?.length > 0 ? (
//             <div className="space-y-4">
//               {Todos.map((todo) => {
//                 const { _id, text } = todo;
//                 return (
//                   <Todo
//                     text={text}
//                     key={_id.toString()}
//                     id={_id.toString()}
//                   />
//                 );
//               })}
//             </div>
//           ) : (
//             <p className="text-gray-500">You don’t have any todos yet. Add one above! 🚀</p>
//           )}
//         </section>
//       </div>
//     </main>
//   );
// }

// app/page.js

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md w-full">
        <header>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome To To-Do-List App
          </h1>
          <p className="text-gray-500 text-lg mb-8">
            Manage your tasks effectively and stay organized
          </p>
        </header>

        <section className="flex justify-center gap-4">
          <Link href="/create">
            <button className="w-full py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Create Todo List
            </button>
          </Link>
          <Link href="/list">
            <button className="w-full py-3 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
              List Todo
            </button>
          </Link>
        </section>
      </div>
    </main>
  );
}
