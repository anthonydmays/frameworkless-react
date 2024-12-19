let todos = [
    { id: 1, text: 'Learn React.js', completed: false },
    { id: 2, text: 'Build a todo app', completed: false },
    { id: 3, text: 'Subscribe to @anthonydmays on YouTube!', completed: false },
]

export async function getTodos() {
    return todos;
}

export async function addTodo(text) {
    const newTodo = {
        id: todos.length + 1,
        text,
        completed: false,
    };
    todos.push(newTodo);
}

export async function toggleTodo(id) {
    todos = todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
}

export async function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
}
