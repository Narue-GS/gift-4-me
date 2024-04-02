'use client'

import { IGift, emptyModel } from "@/app/(backend)/gift/types"

import { useState } from "react"

import { CREATE, updateTaken } from "@/app/(backend)/gift/service"

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
    console.log(list);
    
    setList(list)
  }

  return(
    <section className="flex w-screen justify-center pt-10">
      <div className="w-[65%] border p-4 rounded-lg shadow-lg min-h-[33vh] bg-main">
        <div className="flex gap-5 mb-4 w-full">
          <input onChange={(e) => setNewItem({...newItem, name:e.target.value})} className="px-4 py-2 outline-none border border-black hover:border-main rounded-lg hover:shadow-lg w-full" type="search" name="" id="" />
          <button onClick={add} className="w-24  bg-detail  rounded-lg hover:text-2xl hover:animate-waving-hand trasnsition">new</button>
        </div>
        <div className="flex flex-wrap gap-5 p-4 rounded-lg max-h-[50vh] overflow-scroll  backdrop-brightness-75">
          {
            list.map((i) => (
              <div style={i.taken ? {backgroundColor:"gray"} : {}} className="flex px-4 py-2 bg-white gap-2 rounded-full w-fit" key={i.id}>
                <div className="rounded-full border px-[0.5em]">{i.id}</div>
                <span>{i.name}</span>
                <span>{i.avarege_price}</span>
                <input defaultChecked={i.taken}  onChange={() => take(i.id)} type="checkbox" name="" id="" value={i.taken}/>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}