import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-reducer/todoReducer';

const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodo = setInput => {
	const [todos, dispatchTodo] = useReducer(todoReducer, [], init);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

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
		setInput('');
	};

	const handleDeleteTodo = id => {
		const action = {
			type: '[TODO] Remove Todo',
			payload: id
		};
		dispatchTodo(action);
	};

	const handleToggleTodo = id => {
		const action = {
			type: '[TODO] Toggle Todo',
			payload: id
		};
		dispatchTodo(action);
	};

	return {
		todos,
		handleNewTodo,
		handleDeleteTodo,
		handleToggleTodo
	};
};
