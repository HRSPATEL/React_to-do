import { TodoItem } from './TodoItem';

export function TodoList({ todos, toggleTodo, deleteTodo}) {
return (<ul className="list">
    {todos.length === 0 && <li>No tasks, Hurrah!!!</li>}

      {todos.map(todo => {
        return (
            <TodoItem {...todo}id={todo.id} title={todo.title} completed={todo.completed} key={todo.id} toggleTodo ={toggleTodo}
            deleteTodo = {deleteTodo}/>

     
        )
      })}
    

  </ul>
)
}