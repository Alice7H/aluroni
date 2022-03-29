import { Dispatch, SetStateAction } from 'react';

export type OpcoesOrdenador = '' | 'porcao' | 'qtd_pessoas' | 'preco';

export interface IOrdenador {
  ordenador: OpcoesOrdenador;
  setOrdenador: Dispatch<SetStateAction<OpcoesOrdenador>>
}
