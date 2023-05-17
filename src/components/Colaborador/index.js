import { AiFillCloseCircle } from 'react-icons/ai';
import "./index.css";

const Colaborador = ({ nome, cargo, id, imagem, corDeFundo, aoDeletar }) => {
  return (
    <div className='colaborador'>
      <div className="deletar" onClick={() => aoDeletar(id)}>
        <AiFillCloseCircle size={25}/>
      </div>
      <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>

      <div className='rodape'>
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
