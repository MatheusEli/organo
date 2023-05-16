import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";
import Rodape from './components/Rodape';

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  const times = [
    {
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9"
    },
    {
      nome: "Front-end",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF"
    },
    {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2"
    },
    {
      nome: "Devops",
      corPrimaria: "#E06869",
      corSecundaria: "#FDE7E8"
    },
    {
      nome: "Mobile",
      corPrimaria: "#DB6E8F",
      corSecundaria: "#FAE9F5"
    },
    {
      nome: "UX e Design",
      corPrimaria: "#FF8A05",
      corSecundaria: "#FFF5D9"
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF"
    }
  ];

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
        times={times.map(time => time.nome)}
      />

      {times.map((time) => {
        return (
          <Time
            key={time.nome}
            nome={time.nome}
            corPrimaria={time.corPrimaria}
            corSecundaria={time.corSecundaria}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          />
        );
      })}

      <Rodape />
    </div>
  );
}

export default App;
