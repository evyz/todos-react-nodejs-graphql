import { useMutation, useQuery } from '@apollo/client';
import { React, useEffect, useState } from 'react';
import './App.css';
import { CREATE_TODO, DELETE_TODO, UPDATE_TODO } from './mutations/todo';
import { GET_ALL_TODOS } from './query/todos';

const App = () => {
  const { data, loading, error, refetch } = useQuery(GET_ALL_TODOS)
  const [newTodo] = useMutation(CREATE_TODO)
  const [delTodo] = useMutation(DELETE_TODO)
  const [chaTodo] = useMutation(UPDATE_TODO)
  const [loader, setLoader] = useState(false)

  const [todos, setTodos] = useState([])

  const [title, setTitle] = useState("")
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    if (!loading) {
      setTodos(data.getAllTodos)
    }
  }, [data])

  const createTodo = () => {
    newTodo({
      variables: {
        input: {
          title, completed
        }
      }
    }).then(data => {
      setTitle('')
      refetch()
    })
  }

  const deleteTask = (id) => {
    delTodo({
      variables: {
        input: {
          id, completed
        }
      }
    }).then(data => {
      refetch()
    })
  }

  const changeTodo = (id) => {
    chaTodo({
      variables: {
        input: {
          id, completed
        }
      }
    }).then(data => {
      refetch()
    })
  }

  return (
    <div className="App">
      <div className="todos">

        <div className="half">
          <div className="title">
            <h2>Wellcome to Task-manager!</h2>
          </div>

          <div>
            <input placeholder="Введите название" value={title} onChange={e => setTitle(e.target.value)} />
            <button onClick={() => createTodo()}>Create new Task</button>
          </div>
        </div>

        <div className="half todos-map">
          <button onClick={() => refetch()}>Reboot</button>
          <ul>
            {todos.map(todo =>
              todo.id &&
              <li key={todo.id}><button className={todo.completed ? "text true" : "text"} onClick={() => {
                if (!todo.completed) {
                  changeTodo(todo.id, setCompleted(true))
                }
                else {
                  changeTodo(todo.id, setCompleted(false))
                }
              }}>{todo.title}</button> <button onClick={() => deleteTask(todo.id)}>Delete</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
