import { useContext } from 'react';
import { Context } from '../../context/mainContext';

export const Values = () => {
  const { result } = useContext(Context);

  return (
    <>
      <h2 className="title-apiside">VOCÊ RECEBERÁ:</h2>
      <p className="values">Amanhã: R${result[1]},00</p>
      <p className="values">Em 15 dias: R${result[15]},00</p>
      <p className="values">Em 30 dias: R${result[30]},00</p>
      <p className="values">Em 90 dias: R${result[90]},00</p>
    </>
  );
};
