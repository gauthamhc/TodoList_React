import React from 'react';


const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {

  //Here we can write JS code and function
  const inputTextHandler = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value)
  }

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {
        id: Math.random() * 1000,
        text: inputText,
        completed: false
      }
    ]);
    setInputText("");
  }

  const statusHandler = (e) => {
    setStatus(e.target.value);
  }


  return(
    <form>
      <input 
        value={inputText}
        onChange={inputTextHandler} 
        type="text" 
        className="todo-input" 
        placeholder="Enter Todo things">
      </input>
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todo" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}



export default Form