import { useEffect, useState } from 'react'
import { Trash2 } from 'lucide-react'
import { getTodos, toggleTodo, deleteTodo } from '../actions.js'
import htm from 'htm';
import * as React from 'react';

const html = htm.bind(React.createElement);

export default function TodoList() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const fetchTodos = async () => {
            const fetchedTodos = await getTodos();
            setTodos(fetchedTodos);
        }
        fetchTodos()
    }, [])

    const handleToggle = async (id) => {
        await toggleTodo(id);
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    }

    const handleDelete = async (id) => {
        await deleteTodo(id);
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return html`
        <ul class="space-y-2">
        ${todos.map(todo =>
            html`<li key=${todo.id} class="flex items-center gap-2 p-2 border rounded">
            <input type="checkbox"
                checked=${todo.completed}
                onChange=${() => handleToggle(todo.id)}
            />
            <span class=${todo.completed ? 'line-through text-gray-500' : ''}>
                ${todo.text}
            </span>
            <button
                variant="ghost"
                size="icon"
                class="ml-auto"
                onClick=${() => handleDelete(todo.id)}
            >
                <${Trash2} class="h-4 w-4" />
            </button>
            </li>`
        )}
        </ul>`;
}

