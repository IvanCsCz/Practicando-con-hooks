import { useState } from 'react';
import { useTodo } from '../hook/useTodo';

const TodoApp = () => {
	const [input, setInput] = useState('');
	const { todos, handleDeleteTodo, handleToggleTodo, handleNewTodo } =
		useTodo(setInput);

	return (
		<div>
			<h1>TodoApp</h1>

			<ul>
				{todos.map(todo => {
					return (
						<li key={todo.id}>
							<span onClick={() => handleToggleTodo(todo.id)}>
								{todo.description}
							</span>
							<button onClick={() => handleDeleteTodo(todo.id)}>Borrar</button>
						</li>
					);
				})}
			</ul>

			<div>
				<h4>Agregar TODO</h4>
				<form onSubmit={handleNewTodo}>
					<input
						type='text'
						name='desc'
						value={input}
						onChange={ev => setInput(ev.target.value)}
					/>
					<button>Agregar</button>
				</form>
			</div>
		</div>
	);
};

export default TodoApp;
