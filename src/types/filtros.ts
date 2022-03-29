import { Dispatch, SetStateAction } from "react";
import filtros from '../pages/Cardapio/Filtros/filtros.json';

export type IOpcao = typeof filtros[0];

export interface IFiltros {
  filtro: number | null;
  setFiltro: Dispatch<SetStateAction<number | null>>
}