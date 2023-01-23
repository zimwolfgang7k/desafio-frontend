import './style.css';
import { Context } from '../../context/mainContext';
import { useContext } from 'react';

function UserSide() {
  const { setAmount, setInstallments, setMdr, submit } = useContext(Context);

  // 1 - capturar dados do formulario

  return (
    <div className="container-principal ">
      <form className="container-inputs" onSubmit={submit}>
        <h2 className="title">Simule sua Antecipação</h2>
        <label htmlFor="amount">Informe o valor da venda*</label>
        <input
          type="text"
          id="amount"
          onChange={e => setAmount(e.target.value)}
        />
        <label htmlFor="installments">Em quantas parcelas*</label>
        <input
          type="text"
          id="installments"
          onChange={e => setInstallments(e.target.value)}
        />
        <p className="max-parcelas">Maximo de 12 parcelas</p>
        <label htmlFor="mdr">Informe o percentual de MDR*</label>
        <input type="text" id="mdr" onChange={e => setMdr(e.target.value)} />
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default UserSide;
