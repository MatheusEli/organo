import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import "./index.css";

const Colaborador = ({ nome, cargo, id, imagem, favorito, corDeFundo, aoDeletar, aoFavoritar }) => {

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

        <div className='favoritar' style={{cursor: 'pointer'}}>
          {favorito ? <AiFillHeart size={25} onClick={() => aoFavoritar(id)}/> : <AiOutlineHeart size={25} onClick={() => aoFavoritar(id)}/>}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
