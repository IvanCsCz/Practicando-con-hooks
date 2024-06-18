import { useReducer, useState } from 'react';
import { todoReducer } from './todoReducer';

const initialState = [
	{
		id: new Date().getTime(),
		description: 'Recolectar la piedra del Alma',
		done: false
	},
	{
		id: new Date().getTime() + 100,
		description: 'Recolectar la piedra del Poder',
		done: false
	}
];

const TodoApp = () => {
	const [todos, dispatchTodo] = useReducer(todoReducer, initialState);
	const [input, setInput] = useState('');

	const handleNewTodo = ev => {
		ev.preventDefault();
		const newTodo = {
			id: new Date().getTime() + 100,
			description: ev.target.desc.value,
			done: false
		};
		const action = {
			type: '[TODO] Add Todo',
			payload: newTodo
		};
		dispatchTodo(action);
		// console.log(newTodo);
	};
	return (
		<div>
			<h1>TodoApp: 10, pendientes: 2</h1>

			<ul>
				{todos.map(todo => {
					return (
						<li key={todo.id}>
							<span>{todo.description}</span>
							<button>Borrar</button>
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
