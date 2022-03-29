import React from 'react';
import filtros from './filtros.json';
import styles from './Filtros.module.scss';
import classNames from 'classnames';
import { IFiltros, IOpcao } from 'types/filtros';

export default function Filtros({ filtro, setFiltro }: IFiltros){
  function selecionarFiltro(opcao: IOpcao){
    if(filtro === opcao.id) return setFiltro(null);
    return setFiltro(opcao.id);
  }

  return(
    <div className={styles.filtros}>
      {filtros.map( opcao =>(
        <button 
         key={opcao.id} 
         className={classNames({
           [styles.filtros__filtro]: true,
           [styles['filtros__filtro--ativo']]: filtro === opcao.id,
         })}
         onClick={()=> selecionarFiltro(opcao)}
        >
          {opcao.label}
        </button>
      ))}
    </div>
  );
}