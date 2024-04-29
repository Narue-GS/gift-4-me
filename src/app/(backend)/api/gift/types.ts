export interface IGift{
  id:number,
  name:string,
  avarage_price:(number | null),
  desc:string,
  taken:boolean
}

export const emptyModel:IGift = {
  id:-1,
  name:"",
  avarage_price:null,
  taken:false,
  desc:""
} 