export interface IGift{
  id:number,
  name:string,
  avarege_price:number | null,
  taken:boolean,
  desc:string
}

export const emptyModel = {
  id:-1,
  name:"",
  avarege_price:null,
  taken:false,
  desc:""
} 