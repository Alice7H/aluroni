import { Dispatch, SetStateAction } from "react";

export interface IBuscador {
  busca: string;
  setBusca: Dispatch<SetStateAction<string>>;
}