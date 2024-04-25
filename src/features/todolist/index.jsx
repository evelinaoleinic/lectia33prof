import { useState } from "react"
import ListItem from "../../components/listitem"
import Typography from "../../components/Typography"
import Form from "../../components/Form"
import Modal from "../../components/modal"
import Icon from "../../components/icons"



const ToDoList =()=>{
const [toDoList, setToDoList] = useState([])

  const [toDoTitle, setToDoTitle] = useState('')
  const [editToDo, setEditToDo]=useState('')//EDITODO  lucreaza doar atunci cand apasam pe modal 
  //const[isModalOpen, setIsModalOpen]=useState(false)//titlu nou a todo-ului
  const [toDoToEdit, setToDoToEdit]=useState('')//titlu vechi a todo-ului
  
  const handleChangeTodoTitle = (event) => {
    setToDoTitle(event.target.value)
  }

  const addToDo = () => {
    const nonUniq = toDoList.some(item=>item.title === toDoTitle) //verificam ca sa fie unic si daca el nu exista deja 

    if(nonUniq ) return alert('ai deja unul') //daca e nonuniq, fa alerta

    const newValue = [...toDoList, {title: toDoTitle,done:false}]
    setToDoList(newValue)
    setToDoTitle('')
  }
const deleteToDo=(e, title)=>{
  e.stopPropagation()
  const newList = toDoList.filter(item=>item.title !==title)
  setToDoList([...newList]) //sa fie o copie a listei vechi
}
const handlerEditToDo = ()=>{
const nonUniq = toDoList.some(item=>item.title === editToDo) //verificam ca sa fie unic si daca el nu exista deja 

  if(nonUniq ) return alert('ai deja unul')

const newList = toDoList.map(item=>{
  if(item.title===toDoToEdit){//vaqrificam daca vreun elem. din lista este identic cu titlu vechi
    return {...item,title:editToDo }//returnam optiunea noua 
  }
return item
})
setToDoList(newList)
setToDoToEdit('')//ca sa inchidem modalul 
}

const toogleToDo =( title)=>{
  
    const newList = toDoList.map(item=>item.title===title ? {...item, done:!item.done}: item)
  
    setToDoList(newList)
}

//dunctia care schimba valoarea

  const renderToDoList = toDoList.filter(item=> !item.done).map((item, idx) => {
    return <ListItem title={item.title} 
    key={idx}
    deleteAction={(e)=> deleteToDo(e, item.title)}
  editAction={(e)=>{
    e.stopPropagation()
    setEditToDo(item.title)//seteaza valoarea pentru input ca sa o vede
    setToDoToEdit(item.title)//pastreaza valoarea beche a todo-ului

  }}
  onClick={()=>toogleToDo( item.title)}
    />

  })
  
  const renderDoneToDoList = toDoList.filter(item=> item.done).map((item, idx) => {
    return <ListItem title={item.title} 
    key={idx}
    done
    deleteAction={(e)=> deleteToDo(e,item.title)}
  editAction={(e)=>{
    e.stopPropagation()
    setEditToDo(item.title)//seteaza valoarea pentru input ca sa o vede
    setToDoToEdit(item.title)//pastreaza valoarea beche a todo-ului

  }}
  onClick={()=>toogleToDo(item.title)}
    />

  })
 
  
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
        buttonDisabled={Boolean(!toDoTitle.trim())} //scoatem spatiile sa nu fie ca caracter in input
         />
         {renderToDoList}
         <div style={{display:'flex', justifyContent:'space-between' }}>
            <div>
                <p>Done</p>
                {renderDoneToDoList}
            </div>
            <div>
                <p>UnDone</p>
                {renderToDoList}
            </div>

         </div>
         
         <Modal isOpen={toDoToEdit} onClose={()=>setToDoToEdit('')}>
         <Form
       title="Edit todo"
        tag="p" 
        value={editToDo}
        onChange={(e)=>setEditToDo(e.target.value)}//metoda care schimba ceea ce am tapat in edittodo si o afiseaza 
        placeholder="Edit"
        buttonTitle="Edit todo"
        buttonAction={handlerEditToDo}
        buttonDisabled={Boolean(!editToDo.trim())} //se seteaza ca disbled in momentul cand nu e scris nimic in el (default)
         />
         
         </Modal>
    </div>
  );
}

export default ToDoList