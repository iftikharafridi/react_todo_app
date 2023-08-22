import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import {collection, addDoc,doc, getDocs, deleteDoc} from "firebase/firestore"
import { db } from './firebase.config';

function App() {
const [todoList, setTodoList] = useState([
  {
    task: "This is a test task",
    priority: "High",
    isCompleted: false
  }
]);


const getToDoList = async () => {
  const collectionRef = collection(db, 'todo');
  await getDocs (collectionRef).then((querySnapshot) => {
    //console.log(querySnapshot.docs)
    const todoData = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
      setTodoList(todoData)
  }).catch((err) => {
    console.log(err);
  })
}

useEffect(() => {
  getToDoList();
}, [])

const addTask = async (task) => {
  console.log(task);
  const newTodoList = [...todoList, {task}];
  setTodoList(newTodoList);

  try{
      const collectionRef = collection(db, 'todo');
      const docRef = await addDoc(collectionRef, {
        task: task,
        isCompleted: false
      });
      console.log("Document added to list with id: ", docRef.id);
  } catch(e){
      console.error("Error adding document: ", e);
  }
};

const completeTask = index => {
  console.log(index);
  //console.log("completeTask");
  const newTodoList = [...todoList];

  newTodoList[index].isCompleted === false ? newTodoList[index].isCompleted = true : newTodoList[index].isCompleted = false;
  
  setTodoList(newTodoList);
};



// const deleteTask = index => {
//   console.log(index);
//   const newTodoList = [...todoList];
//   newTodoList.splice(index, 1);
//   setTodoList(newTodoList);
// };

const deleteTask = async(id) => {
  try{
    console.log(id)
    const documentRef = doc(db, "todo", id);
    await deleteDoc(documentRef)
    //window.location.reload();
    getToDoList();
  } catch (err) {
    console.log(err);
  }
}

  return (
    <div className="todo-app">
      <div className='container'>
        <h1>My Toto List</h1>
        <TodoForm addTask={addTask} />
        <TodoList todoList={todoList} completeTask={completeTask} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;
