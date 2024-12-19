import { useState } from 'react'
import { addTodo } from '../actions.js'
import htm from 'htm';
import * as React from 'react';

const html = htm.bind(React.createElement);

export default function AddTodo({ onNewTodo }) {
    const [newTodo, setNewTodo] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (newTodo.trim()) {
            await addTodo(newTodo)
            setNewTodo('')
            if (typeof onNewTodo === 'function') {
                onNewTodo();
            }
        }
    }

    return html`
        <form onSubmit=${handleSubmit} class="flex gap-2 mb-4">
            <input
                type="text"
                value=${newTodo}
                onChange=${(e) => setNewTodo(e.target.value)}
                placeholder="Add a new todo"
            />
            <button type="submit">Add</button>
        </form>`;
}
