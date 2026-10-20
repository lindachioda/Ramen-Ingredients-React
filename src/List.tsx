
import type{ Prodotti } from './type-data'
import type { ProductProps } from './type-data'
import { RiDeleteBack2Fill } from 'react-icons/ri'


//lista di tutti i prodotti array
const List = (props: { data: Prodotti[], removeOne: (id: number) => void}) => {
    console.log(props)

  return (
  <ul className="lista text-amber-50">
      {props.data.map((product) => (
        <li key={product.id}>
          <Product {...product} removeOne={props.removeOne} />
        </li>
      ))}
    </ul>
)}

//creo il mio campo visivo dei prodotti
//ProductProps è type di removrOne by id
const Product = ({img, nome, removeOne, id}:ProductProps) => {
  return (
    <>
  <article>
    <img src={img} alt={nome} className="product-img rounded-full ml-2"/>
    
        <div className="ingredients-info">
             <h2 className="nome font-bold">{nome}</h2>
        </div>
             <button className="btn btn-rem" onClick={() => removeOne(id)}>
                <RiDeleteBack2Fill/>
             </button>
        
    
   
  </article>
  <hr/>
  </>
  )
}

export default List;
