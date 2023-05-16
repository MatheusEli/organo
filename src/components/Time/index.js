import Colaborador from "../Colaborador";
import "./index.css";

const Time = ({ nome, corPrimaria, corSecundaria, colaboradores }) => {
  return (
    colaboradores.length > 0 && (
      <section className="time" style={{ backgroundColor: corSecundaria }}>
        <h3 style={{ borderBottom: `4px solid ${corPrimaria}` }}>{nome}</h3>

        <div className="colaboradores">
          {colaboradores.map((colaborador, index) => (
            <Colaborador corDeFundo={corPrimaria} key={index} {...colaborador} />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
