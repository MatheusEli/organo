import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";
import Rodape from './components/Rodape';
import { v4 as uuidv4 } from "uuid";

function App() {
  const [colaboradores, setColaboradores] = useState([]);
  const [times, setTimes] = useState(
    [
      {
        id: uuidv4(),
        nome: "Programação",
        cor: "#57C278"
      },
      {
        id: uuidv4(),
        nome: "Front-end",
        cor: "#82CFFA"
      },
      {
        id: uuidv4(),
        nome: "Data Science",
        cor: "#A6D157"
      },
      {
        id: uuidv4(),
        nome: "Devops",
        cor: "#E06869"
      },
      {
        id: uuidv4(),
        nome: "Mobile",
        cor: "#DB6E8F"
      },
      {
        id: uuidv4(),
        nome: "UX e Design",
        cor: "#FF8A05"
      },
      {
        id: uuidv4(),
        nome: "Inovação e Gestão",
        cor: "#FF8A29"
      }
    ]
  );

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  const aoNovoTimeAdicionado = (novoTime) => {
    console.log(novoTime);
    setTimes([...times, novoTime]);
  }

  const deletarColaborador = (id) => {
    const newColaboradores = colaboradores.filter(membro => membro.id !== id);
    setColaboradores(newColaboradores);
  };

  const mudarCorTime = (id, novaCor) => {
      const timesFiltered = times.map((time) => {
        if(time.id === id){
          time.cor = novaCor
        }
        return time;
      });

      setTimes(timesFiltered);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
        times={times.map(time => time.nome)}
        aoNovoTimeAdicionado={aoNovoTimeAdicionado}
      />

      {times.map((time) => {
        return (
          <Time
            key={time.id}
            nome={time.nome}
            id={time.id}
            cor={time.cor}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDeletar={deletarColaborador}
            aoMudarCor={mudarCorTime}
          />
        );
      })}

      <Rodape />
    </div>
  );
}

export default App;
