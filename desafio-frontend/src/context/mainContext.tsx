import React, { createContext, ReactNode, useState } from 'react';

export interface ProviderProps {
  children: React.ReactNode[];
}

export interface IFormData {
  amount: number;
  installments: number;
  mdr: number;
  days: Array<number>;
}

export interface IResult {
  1: number;
  15: number;
  30: number;
  90: number;
}

interface IContext {
  result: IResult;
  setResult: React.Dispatch<React.SetStateAction<IResult>>;
}

export const Context = createContext<IContext>({} as IContext);

const Provider = ({ children }: ProviderProps) => {
  const [result, setResult] = useState<IResult>({} as IResult);

  return (
    <Context.Provider value={{ result, setResult }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
