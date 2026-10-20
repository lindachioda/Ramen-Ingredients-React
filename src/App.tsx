import List from "./List";
import data from "./data";
import { useState } from "react";



function App() {
  const [products, setProducts] = useState(data)
  console.log(products)

  //per riattivare tutti gli items
  const reloadAll = ()=> {
    setProducts(data)
  }

  //per cancellarne uno ad uno
  //devo importarlo a List
  const removeOne = (id:number)=> {
    setProducts((oldValue) => {
      return oldValue.filter(value => value.id !==id)
    })
    console.log("eliminato")
  }

  return (
  <section>
    <div className="container mt-12.5">
      <h2 className="title text-3xl min-[581px]:text-5xl font-bold text-amber-950">INGREDIENTI<span className="text-3xl min-[581px]:text-5xl font-bold italic text-green-900">RAMEN </span> VEGANO</h2>
       <div className="products-list rounded mt-10 shadow-lg">
          <List data={products} removeOne={removeOne}/>
       </div>
       <div className="btn-group mt-10">
          <button className="btn btn-reset" onClick={reloadAll}>Reload</button>
          <button className="btn btn-delete" onClick={()=> setProducts([])}>Delete all</button>
       </div>
    </div>
  </section>
  )
}

export default App;