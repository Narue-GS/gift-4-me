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
import { IUser } from "@/app/(backend)/api/user/types"

import { PiEye, PiEyeClosedLight } from "react-icons/pi";



const formSchema = z.object({
  name: z.string().min(2, {message: "Coloque o seu nome completo",}),
  email: z.string().email({message:"Email inválido"}),
  password: z.string().min(2, {message:"A senha deve ter ao menos 4 caracteres"})
})


 
export default function EntityForm({data, close, save}: {data:IUser, close:() => void, save:(data:IUser) => void}) {
  const [showPassword, setShowPassword] = useState(false)


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: data.name || "",
      email: data.email,
      password: data.password
    },
  })
 
  // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
      save({
        id: data.id,
        name: values.name,
        email: values.email,
        password: values.password
      })
      close()
    }

  return (
    <section className="flex justify-center">
      <div onClick={close} className="w-screen h-screen fixed backdrop-brightness-75"></div>
      <div className="w-[30rem] max-w-[90vw]  absolute top-10 z-20 bg-white p-4 rounded-lg">
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
            <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField control={form.control} name="password" render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <div className="flex gap-3">
                      <Input type={showPassword ? "text" : "password"} {...field} />
                      <button onClick={() => setShowPassword(!showPassword)} type="button" className="border border-black rounded-lg flex items-center w-12 hover:opacity-50 cursor-pointer justify-center">
                        {showPassword? <PiEyeClosedLight size={20}/> : <PiEye size={20}/>}
                      </button>
                    </div>
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