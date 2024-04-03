'use client'

import { IoTrashBinOutline } from "react-icons/io5";

import { IGift, emptyModel } from "@/app/(backend)/gift/types"

import { useState } from "react"

import { CREATE, DELETE_, updateTaken } from "@/app/(backend)/gift/service"

import Confirmation from "./confirmation";

export const dynamic = 'force-dynamic'

export default function List({data}:{data:any[]}) {
  let [list, setList] = useState(data)
  let [newItem, setNewItem] = useState({...emptyModel, id: parseInt(list[list.length -1]?.id) + 1 || 0})


  function add(){
    CREATE(newItem)
    list = [...list, newItem]
    setList(list)
    setNewItem({...emptyModel, id: list[list.length -1]?.id + 1 || 0})
  }

  function take(id:number) {
    list = [...list.map(i => {
      if(i.id == id) {
        updateTaken(i)
        i.taken = !i.taken
      }
      return i 
    })]
    setList(list)
  }

  function deleteGift(id:number) {
    DELETE_(id)
    list = list.filter((i) => i.id != id)
    setList(list)
    setNewItem({...emptyModel, id: parseInt(list[list.length -1]?.id) + 1 || 0})
  }

  return(
    <section className="flex w-screen justify-center pt-10">
      
      <div className="sm:w-[85%] md:w-[60%] border p-4 rounded-lg shadow-lg sm:min-h-[60vh] md:min-h-[60vh] bg-main">
        <div className="flex gap-5 mb-4 w-full">
          <input onChange={(e) => setNewItem({...newItem, name:e.target.value})} value={newItem.name} className="px-4 py-2 outline-none border border-black hover:border-main rounded-lg hover:shadow-lg w-full" type="search" name="" id="" />
          <button onClick={add} className="w-24  bg-detail  rounded-lg hover:text-2xl hover:animate-waving-hand trasnsition duration-150 ease-out">new</button>
        </div>
        <div className="flex flex-wrap gap-5 w-full p-4 rounded-lg max-h-[50vh] overflow-scroll  backdrop-brightness-75">
          {
            list.length ?
            list.map((i) => (
              <div style={i.taken ? {backgroundColor:"rgba(255,255,255,0.5)", textDecoration:"line-through"} : {}} className={`flex px-4 py-2 max-w-full max-h-[2.5em] overflow-hidden bg-white gap-2 items-center ${i.taken ? "" : "hover:scale-110"} cursor-pointer rounded-full w-fit transition`} key={i.id}>
                <div className="rounded-full border px-[0.5em]">{i.id}</div>
                <span className="max-w-[80%] overflow-hidden">{i.name}</span>
                <span>{i.avarege_price}</span>
                <input defaultChecked={i.taken}  onChange={() => take(i.id)} type="checkbox" name="" id="" value={i.taken}/>
                <Confirmation confirmFunc={() => deleteGift(i.id)}>
                  <IoTrashBinOutline style={{color:"red", cursor:"pointer"}} />
                </Confirmation>
              </div>
            )) : <h1>No bitches?</h1>
          }
        </div>
      </div>
    </section>
  )
}