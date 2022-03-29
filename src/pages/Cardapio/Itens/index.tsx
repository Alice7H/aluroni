import cardapio from './itens.json';
import Item from './Item';
import styles from './Itens.module.scss';
import { useEffect, useState } from 'react';
import { IItens } from 'types/itens';

export default function Itens(props: IItens){
  const [lista, setLista] = useState(cardapio);
  const { busca, filtro, ordenador } = props;

  function ordenarPropriedadeCrescente(
    lista: typeof cardapio,
    propriedade: 'size' | 'serving' | 'price'
  ){
    return lista.sort((a, b) => (a[propriedade] > b[propriedade] ? 1 : -1));
  };

  useEffect(()=>{
    function testaBusca(title: string) {
      const regex = new RegExp(busca, "i");
      return regex.test(title);
    }
  
    function testaFiltro(id: number) {
      if(filtro != null) return filtro === id;
      return true;
    }

    function ordenar(lista: typeof cardapio) {
      switch(ordenador){
        case 'porcao':
          return ordenarPropriedadeCrescente(lista, 'size');
        case 'qtd_pessoas':
          return ordenarPropriedadeCrescente(lista, 'serving');
        case 'preco':
          return ordenarPropriedadeCrescente(lista, 'price');
        default:
          return lista;
      }
    }

    const novaLista = cardapio.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
    setLista(ordenar(novaLista));

  },[busca, filtro, ordenador])

  return(
    <div className={styles.itens}>
      { lista.map(item =>(
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}