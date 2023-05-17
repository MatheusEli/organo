import Colaborador from "../Colaborador";
import "./index.css";
import hexToRgba from "hex-to-rgba";

const Time = ({ nome, cor, id, colaboradores, aoDeletar, aoFavoritar, aoMudarCor }) => {

  const mudaCor = (evt) => {
    aoMudarCor(id, evt.target.value);
  };

  return (
    colaboradores.length > 0 && (
      <section className="time" style={{ backgroundImage: 'url(/assets/fundo.png)', backgroundColor: hexToRgba(cor, '0.6')}}>
        <input className="input-cor" type="color" value={cor} onChange={mudaCor}/>
        <h3 style={{ borderBottom: `4px solid ${cor}` }}>{nome}</h3>

        <div className="colaboradores">
          {colaboradores.map((colaborador, index) => {
            return <Colaborador corDeFundo={cor} key={index} {...colaborador} aoDeletar={aoDeletar} aoFavoritar={aoFavoritar}/>
          }
          )}
        </div>
      </section>
    )
  );
};

export default Time;
