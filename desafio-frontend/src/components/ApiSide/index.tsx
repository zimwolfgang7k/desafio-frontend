import { useContext } from 'react';
import { Context } from '../../context/mainContext';
import { Values } from '../Values';
import './style.css';

function ApiSide() {
  const { result } = useContext(Context);

  return (
    <div className="container-principal-valores">
      <div className="container">
        {result[1] ? (
          <Values />
        ) : (
          <>
            <h2 className="title-apiside">VOCÊ RECEBERÁ:</h2>
            <p className="values">Amanhã: R$00,00</p>
            <p className="values">Em 15 dias: R$00,00</p>
            <p className="values">Em 30 dias: R$00,00</p>
            <p className="values">Em 90 dias: R$00,00</p>
          </>
        )}
      </div>
    </div>
  );
}

export default ApiSide;
