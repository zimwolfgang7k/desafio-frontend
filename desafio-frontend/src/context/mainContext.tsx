import React, { createContext, SyntheticEvent, useState } from 'react';
import api from '../services/api';

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
  amount: string;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
  installments: string;
  setInstallments: React.Dispatch<React.SetStateAction<string>>;
  mdr: string;
  setMdr: React.Dispatch<React.SetStateAction<string>>;
  submit: (e: SyntheticEvent) => void;
}

export const Context = createContext<IContext>({} as IContext);

const Provider = ({ children }: ProviderProps) => {
  const [result, setResult] = useState<IResult>({} as IResult);

  const [amount, setAmount] = useState('');
  const [installments, setInstallments] = useState('');
  const [mdr, setMdr] = useState('');

  let data = {
    amount: amount,
    installments: installments,
    mdr: mdr
  };

  const submit = (e: SyntheticEvent) => {
    e.preventDefault();
    api
      .post('', data)
      .then(res => setResult(res.data))
      .catch(error => console.log(error));
  };

  return (
    <Context.Provider
      value={{
        result,
        setResult,
        amount,
        setAmount,
        installments,
        setInstallments,
        mdr,
        setMdr,
        submit
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
