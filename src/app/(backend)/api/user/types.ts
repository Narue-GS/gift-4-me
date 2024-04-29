export interface IUser{
  id:number,
  name:string,
  email:string,
  password:string,
}

export const emptyModel:IUser = {
  id:-1,
  name:"",
  email:"",
  password:"",
} 