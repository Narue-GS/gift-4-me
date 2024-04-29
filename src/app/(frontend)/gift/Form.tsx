"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { IGift } from "@/app/(backend)/api/gift/types"


const formSchema = z.object({
  name: z.string().min(2, {message: "Coloque o seu nome completo",}),
  avarage_price: z.coerce.number().min(1, {message: "valor muito baixo"}).optional(),
  desc: z.string().optional()
})
 
export default function EntityForm({data, close, save}: {data: {name:string, avarage_price:number | null, desc:string, id:number}, close:() => void, save:(data:IGift) => void}) {
  let [selectedItem, setSelectedItem] = useState(data)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: data.name || "",
      avarage_price: data.avarage_price || undefined,
      desc: data.desc || ""
    },
  })
 
  // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
      save({
        id: data.id,
        name: values.name,
        avarage_price: values.avarage_price || null,
        desc: values.desc || "",
        taken: false
      })
      close()
    }

  return (
    <section className="flex justify-center">
      <div onClick={close} className="w-screen h-screen fixed backdrop-brightness-75"></div>
      <div className="w-[33vw] absolute top-10 z-20 bg-white p-4 rounded-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input autoFocus placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField control={form.control} name="avarage_price" render={({ field }) => (
                <FormItem>
                  <FormLabel>Preço médio</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField control={form.control} name="desc" render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="px-4 py-1 rounded-lg text-white border hover:text-red-500 hover:scale-110 transition mr-5" type="button" onClick={close}>Cancelar</Button>
            <Button className="px-4 py-1 rounded-lg text-white border hover:text-green-500 hover:scale-110 transition" type="submit" >Confirmar</Button>
          </form>
        </Form>
      </div>
    </section>
  )
}