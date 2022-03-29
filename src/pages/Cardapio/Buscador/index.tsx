import React from "react";
import styles from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg';
import { IBuscador } from "types/buscador";

export default function Buscador({ busca, setBusca }: IBuscador){
  return(
    <div className={styles.buscador}>
      <label htmlFor="buscar" className={styles.hide}>Buscar</label>
      <input 
       type="text" 
       value={busca} 
       id="buscar"
       onChange={(event) => {setBusca(event.target.value)}}
        placeholder="Buscar"
      />
      <CgSearch size={20} color="#4c4d5f"/>
    </div>
  );
}