"use client";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [currentTodo, setCurrentTodo] = useState("")
  const [todos, setTodos] = useState([{id:1, task:"finir le rapport journalier",status:false}]);
  //console.log(todos)
  // const todo = {id:1, task:"finir le rapport journalier",status:false}
const addTodo = ()=>{
  setTodos([...todos,{id:Date.now(),task:currentTodo,status:false}])
  setCurrentTodo("")
}

const updateTodo = (id)=>{
  setTodos(
    todos.map(todo=>(
      todo.id == id ?{...todo, status:true}:todo
    ))
  )
  //console.log(todos)
}
const deleteTodo = (id)=>{
  setTodos(
    todos.filter(todo=>(todo.id !== id))
  )
}

  return (
    <div className="bg-[url('/background/image_bg.jpg')] h-screen flex flex-col justify-center items-center">
        <h1 className="text-center text-2xl font font-bold text-pink-500">
          Todolist
        </h1>
        <div className="">
            <input onChange={(e)=>setCurrentTodo(e.target.value)} value={currentTodo} className="h-12 bg-white rounded p-4" placeholder="Entrer la tache ici..." />
            <button disabled = {currentTodo===""?true:false} onClick={addTodo} className="bg-green-700 h-12 rounded text-white px-4" >Ajouter à la liste</button>
        </div>
        <div className="mt-10">
          <table>
            <thead>
              <tr className="bg-pink-500">
                <th className="w-40 h-10 ">No</th>
                <th className="w-40 h-10">Tache</th>
                <th className="w-40 h-10">Done</th>
                <th className="w-40 h-10">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {
                todos.map((todo,i)=>
                  (<tr key={i}>
                    <td className="w-40 h-10 text-center">{i+1}</td>
                    <td className="w-40 h-10 text-xs">{todo.task} </td>
                    <td className="w-40 h-10">{todo.status?"Terminé":"En cours"} </td>
                    <td>
                      <button   onClick={()=>deleteTodo(todo.id)} className="bg-red-500 text-white p-1 rounded">delete</button>
                      <button onClick={()=>updateTodo(todo.id)}  className="bg-green-500 text-white p-1 rounded">Finish</button>
                    </td>
                  </tr>)
                  )
              }
            </tbody>
          </table>
        </div>
    </div>
  );
}