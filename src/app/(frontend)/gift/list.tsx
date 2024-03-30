import { IGift } from "@/app/(backend)/gift/types"

export default function List({list}:{list:any[]}) {
  return(
    <section>
      <div>
        <input type="search" name="" id="" />
        <div>
          {
            list.map((i) => (
              <div key={i.id}>
                <span>{i.id}</span>
                <span>{i.name}</span>
                <span>{i.avarege_price}</span>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}