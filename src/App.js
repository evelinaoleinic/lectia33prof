import { useState } from "react";
import Typography from "./components/Typography";
import Form from "./components/Form";

function App() {
  const [toDoList, setToDoList] = useState([])
  const [toDoTitle, setToDoTitle] = useState('')

  const handleChangeTodoTitle = (event) => {
    setToDoTitle(event.target.value)
  }

  const addToDo = () => {
    const newValue = [...toDoList, toDoTitle]
    setToDoList(newValue)
  }

  const renderList = toDoList.map((item, idx) => <li key={idx}>{item}</li>)

  return (
    <div>
      <Typography
        title='Todo List'
        tag="h1"
        className='title' />

      <Form
       title="Add todo"
        tag="p" 
        value={toDoTitle}
        onChange={handleChangeTodoTitle}
        placeholder="Add title"
        buttonTitle="Add todo"
        buttonAction={addToDo}
         />
         <ul>
         {renderList}
         </ul>
    </div>
  );
}

export default App;
