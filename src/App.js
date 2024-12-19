import AddTodo from './components/AddTodo.js'
import TodoList from './components/TodoList.js'
import * as React from 'react';
import htm from 'htm';
import { useReducer } from 'react';

const html = htm.bind(React.createElement);

export default function Home() {
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    return html`
        <main class="container mx-auto p-4 max-w-md">
            <h1 class="text-2xl font-bold mb-4">Todo App</h1>
            <${AddTodo} onNewTodo=${forceUpdate} />
            <${TodoList} />
        </main>`;
}