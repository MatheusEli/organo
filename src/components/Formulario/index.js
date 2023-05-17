import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./index.css";
import { v4 as uuidv4 } from "uuid";


const Formulario = ({ aoColaboradorCadastrado, aoNovoTimeAdicionado, times }) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("Programação");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const onNewColaboradorSubmit = (evt) => {
    evt.preventDefault();

    aoColaboradorCadastrado({
      id: uuidv4(),
      nome,
      cargo,
      imagem,
      time
    });

    clean();
  };

  const onNewTimeSubmit = (evt) => {
    evt.preventDefault();

    aoNovoTimeAdicionado({
      id: uuidv4(),
      nome: nomeTime,
      cor: corTime
    });

    clean();

  } 

  const clean = () => {
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
    setNomeTime('');
    setCorTime('');
  }

  return (
    <section className="formulario">
      <form onSubmit={onNewColaboradorSubmit}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Campo
          onValueChange={(valor) => setNome(valor)}
          valor={nome}
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <Campo
          onValueChange={(valor) => setCargo(valor)}
          valor={cargo}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <Campo
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
      
      <form onSubmit={onNewTimeSubmit}>
        <h2>Preencha os dados para criar o um novo time</h2>
        <Campo
          onValueChange={(valor) => setNomeTime(valor)}
          valor={nomeTime}
          obrigatorio
          label="Nome"
          placeholder="Digite o nome"
        />
        <Campo
          obrigatorio
          onValueChange={(valor) => setCorTime(valor)}
          valor={corTime}
          type="color"
          label="Cor"
          placeholder="Digite a cor do time"
        />

        <Botao>Criar um novo time</Botao>
      </form>
    </section>
  );
};

export default Formulario;
