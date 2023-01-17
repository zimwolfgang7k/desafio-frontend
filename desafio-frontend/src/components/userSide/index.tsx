import './style.css';

function UserSide() {
  return (
    <div className="container-principal">
      <div className="container-inputs">
        <h2 className="title">Simule sua Antecipação</h2>
        <label>Informe o valor da venda*</label>
        <input type="text" />
        <label>Em quantas parcelas*</label>
        <input type="text" />
        <p className="max-parcelas">Maximo de 12 parcelas</p>
        <label>Informe o percentual de MDR*</label>
        <input type="text" />
      </div>
    </div>
  );
}

export default UserSide;
