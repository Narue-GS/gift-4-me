'use client'

import { useState } from "react"
import { IoTrashBinOutline } from "react-icons/io5";

import { IUser, emptyModel } from "@/app/(backend)/api/user/types"
import { CREATE, DELETE_, UPDATE } from "@/app/(backend)/api/user/service"

import Confirmation from "./confirmation";
import EntityForm from "./Form";

export const dynamic = 'force-dynamic'

export default function List({data}:{data:IUser[]}) {
  let [list, setList] = useState(data)
  let [newItem, setNewItem] = useState({...emptyModel, id: data[data.length - 1]?.id + 1 || 0})
  let [selectedItem, setSelectedItem] = useState({...emptyModel, id: -1})

  let [modal, setModal] = useState({
    data:{...emptyModel},
    state:false
  })

  function add(data:IUser){
    CREATE(data)
    list = [...list, data]
    setList(list)
    setNewItem({...emptyModel, id: list[list.length -1]?.id + 1 || 0})
  }

  function update(data:IUser) {
    UPDATE(data)
    setList([...list.map((i) => {
      i.id == data.id ? i = data : ""
      return i
    })])
  }

  function delete_(id:number) {
    DELETE_(id)
    list = list.filter((i) => i.id != id)
    setList(list)
    setNewItem({...emptyModel, id: list[list.length -1]?.id + 1 || 0})
  }

  function addOrUpdate(data:IUser) {
    list.find((i) => i.id == data.id) ? update(data) : add(data)
  }

  return(
    <>
      {
        !modal.state ? "" : <EntityForm data={modal.data} save={addOrUpdate} close={() => setModal({data:{...emptyModel, id: -1}, state:false})}/>
      }
      <section className="flex w-screen justify-center pt-10">
        
        <div className="sm:w-[85%] md:w-[60%] border p-4 rounded-lg shadow-lg sm:min-h-[60vh] md:min-h-[60vh] bg-main">
          <div className="flex gap-5 mb-4 w-full">
            <input placeholder="Pesquisar...🔍" className="px-4 py-2 outline-none border border-black hover:border-main rounded-lg hover:shadow-lg w-full" type="search" name="" id="" />
            <button onClick={() => setModal({data:{...modal.data, id:+data[data.length - 1]?.id + 1 || 0}, state:true})} className="w-14 bg-detail rounded-lg text-2xl hover:text-4xl hover:animate-waving-hand trasnsition duration-150 ease-out">+</button>
          </div>
          <div className="flex flex-wrap gap-5 w-full p-4 rounded-lg max-h-[50vh] overflow-scroll  backdrop-brightness-75">
            {
              list.length ?
              list.map((i) => (
                <div className={`flex px-4 py-2 max-w-full max-h-[2.5em] overflow-hidden bg-white gap-2 items-center hover:scale-110 cursor-pointer rounded-full w-fit transition`} key={i.id}>
                  {/* item's body */}
                  <div className="flex gap-2  " onClick={() => setModal({data:i, state:true})}>
                    <div className="rounded-full border px-[0.5em]">{i.id}</div>
                    <span className="max-w-[80%] overflow-hidden">{i.name}</span>
                    <span className="max-w-[80%] overflow-hidden">{i.email}</span>
                  </div>
                  <Confirmation confirmFunc={() => delete_(i.id)}>
                    <IoTrashBinOutline onClick={() => console.log(modal)} style={{color:"red", cursor:"pointer"}} />
                  </Confirmation>
                </div>
              )) : <h1>No bitches?</h1>
            }
          </div>
        </div>
      </section>
    </>
  )
}