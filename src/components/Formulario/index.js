import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./index.css";

const Formulario = ({ aoColaboradorCadastrado, times }) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("Programação");

  const onHandleSubmit = (evt) => {
    evt.preventDefault();

    aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    });

    clean();
  };

  const clean = () => {
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
  }

  return (
    <section className="formulario">
      <form onSubmit={onHandleSubmit}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          onValueChange={(valor) => setNome(valor)}
          valor={nome}
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <CampoTexto
          onValueChange={(valor) => setCargo(valor)}
          valor={cargo}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <CampoTexto
          onValueChange={(valor) => setImagem(valor)}
          valor={imagem}
          label="Imagem"
          placeholder="Digiteo endereço da imagem"
        />
        <ListaSuspensa
          onValueChange={(valor) => setTime(valor)}
          valor={time}
          label="Time"
          itens={times}
        />

        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
