'use client'

import type { Todo } from '@/types/Todo'
import { useState } from 'react'
import AddTodo from './components/add-todo/add-todo'
import TodoList from './components/todo-list/todo-list'

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      userId: 1,
      title: 'Wave hello! 👋',
      completed: false,
      id: 1,
    },
    {
      userId: 1,
      title: 'Get Coffee ☕☕☕',
      completed: false,
      id: 2,
    },
    {
      userId: 1,
      title: 'Go to Work ⚒',
      completed: false,
      id: 3,
    },
    {
      userId: 1,
      title: 'Write Code 💻',
      completed: false,
      id: 4,
    },
  ])

  return (
    <>
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  )
}
