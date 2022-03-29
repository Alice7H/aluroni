import { OpcoesOrdenador } from "./ordenador";

export interface IItens {
  busca: string;
  filtro: number | null;
  ordenador: OpcoesOrdenador;
}