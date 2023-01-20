import { useContext } from 'react';
import { Context } from '../../context/mainContext';
import './style.css';

function ApiSide() {
  const { result } = useContext(Context);

  return (
    <div className="container-principal-valores">
      <div className="container">
        <h2>VOCÊ RECEBERÁ:</h2>
        <p>Amanhã: R${result[1]},00</p>
        <p>Em 15 dias: R${result[15]},00</p>
        <p>Em 30 dias: R${result[30]},00</p>
        <p>Em 90 dias: R${result[90]},00</p>
      </div>
    </div>
  );
}

export default ApiSide;
