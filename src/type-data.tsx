

//type solo data
export type Prodotti = {
  id: number;
  nome: string;
  img: string;
}

//type data e removeOne!!
export type ProductProps = Prodotti & {
  removeOne: (id: number) => void
}