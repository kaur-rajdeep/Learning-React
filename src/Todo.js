import React,{useState} from 'react'
import './index.css';


function TodoApp(){
    let globalID = 0
    const [task, setTask] = useState("")
    const [todos, setTodos] = useState([])

    function createTodo(event){
        setTodos(oldTodos=>{
            setTask('')
            return [...oldTodos, {todo:task, id: globalID++}]
        })
        event.preventDefault()
    }

    function deleteItem(todo){
        setTodos(oldTodos=>oldTodos.filter(item => item.todo !==todo))
    }

    return <div className='todos'>
        <h1 align="center">TODO APP</h1>
        <div className="Input-field">
        <form onSubmit={createTodo}>
        <input 
            type="text" value={task} onChange={e=>{
            setTask(e.target.value)
        }}/>
        </form>
        <button onClick={createTodo} type="submit" className="add">+</button>
        </div>
        <ul>
            {todos.map((item)=>{
                return (
                <div key={item.id} className="todo" >
                    <li className="listItem">{item.todo}</li>
                    <button onClick={()=>deleteItem(item.todo)} className="delete">X</button>
                </div>
                )
            })
            }
        </ul>
    </div>
}

export default TodoApp