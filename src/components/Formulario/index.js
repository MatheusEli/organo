import CampoTexto from "../CampoTexto";
import "./index.css";

const Formulario = () => {
  return (
    <section className='formulario'>
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digiteo endereço da imagem" />
      </form>
    </section>
  );
};


export default Formulario;
