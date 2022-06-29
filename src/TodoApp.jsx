import { useState } from 'react';
import { useGetTodoQuery, useGetTodosQuery } from './store/apis/todosApi'

export const TodoApp = () => {
  
//   const { data: todos = [], isLoading } = useGetTodosQuery();

    const [todoValue, setTodoValue] = useState(1)

  const { data: todo = [], isLoading } = useGetTodoQuery(todoValue);

  const NextTodo = () => {
    setTodoValue( todoValue + 1 );
  }

  const PrevTodo = () => {
    setTodoValue( todoValue - 1 );
  }


  return (
    <>
        <h1>Todos - RTK Query</h1>
        
        <h4>isLoading: { isLoading ? 'True': 'False'} </h4>



        <pre>
            {JSON.stringify(todo)}
        </pre>

        <button
            onClick={PrevTodo}
        >
            Prev
        </button>
        
        <button
            onClick={NextTodo}
        >
            Next
        </button>


        {/* <ul>
            { todos.map( todo => (
                <li key={todo.id}>
                    <strong>{ todo.completed ? 'Done ' : 'Pending '}</strong>
                    { todo.title}
                </li>
            ))}
        </ul> */}
    </>
  )
}
