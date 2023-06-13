import { createContext, useState } from "react";
import { ContextProps, MesoProps, RegiaoProps, UfProps } from "../types";

const Contexto = createContext({} as ContextProps);

function Provider({ children }: any) {
  const [regioes, setRegioes] = useState([] as RegiaoProps[]);
  const [ufs, setUfs] = useState([] as UfProps[]);
  const [mesos, setMesos] = useState([] as MesoProps[]);

  return (
    <Contexto.Provider value={{ regioes, ufs, mesos }}>
      {children}
    </Contexto.Provider>
  );
}

export { Contexto, Provider };
