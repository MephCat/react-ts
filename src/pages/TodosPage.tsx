import React, {useState, useEffect} from 'react'
import {Navbar} from "../component/Navbar";
import {TodoForm} from "../component/TodoForm";
import {TodoList} from "../component/TodoList";
import {ITodo} from "../interfaces";

declare var confirm: (question: string) => boolean

export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
        setTodos(saved)
    }, [])
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title,
            id: Date.now(),
            completed: false
        }
        setTodos(prev => [newTodo, ...prev])
    }
    const toggleHandler = (id: number) => {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        }))
    }
    const removeHandler = (id: number) => {
        const confirmStr = window.confirm('Удалить ?')
        if (confirmStr) {
            setTodos(prev => prev.filter(todo => todo.id !== id))
        }
    }
    return (
        <>
            <TodoForm onAdd={addHandler}/>
            <TodoList todos={todos}
                      onToggle={toggleHandler}
                      onRemove={removeHandler}/>
        </>
    )
}
