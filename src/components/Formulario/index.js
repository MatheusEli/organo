import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./index.css";

const Formulario = () => {

  const times = [
    'Programação',
    'Front-end',
    'Data Science',
    'Devops',
    'Mobile',
    'UX e Design',
    'Inovação e Gestão'
  ];

  return (
    <section className='formulario'>
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digiteo endereço da imagem" />
        <ListaSuspensa label="Time" itens={times}/>
        
        <Botao texto="Criar Card"/>
      </form>
    </section>
  );
};


export default Formulario;
