import { useState } from 'react'
import './App.css'
import Board from './componentes/Board/Board';
import Puntos from './componentes/Puntos/Puntos';

const App = () => {

  const [turno, setTurno] = useState('X');
  const [valores, setValores] = useState(Array(9).fill(null));
  const [puntos, setPuntos] = useState({
    X: 0,
    O: 0,
  });
  const [ganador, setGanador] = useState([]);

  const posicionesGanadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const reset = () => {
    setTurno("X");
    setValores(Array(9).fill(null));
    setGanador([]);
  }

  const checkForWinner = newValor => {
    for (let i = 0; i < posicionesGanadoras.length; i++) {
      const [a, b, c] = posicionesGanadoras[i];
      if (newValor[a] && newValor[a] === newValor[b] && newValor[a] === newValor[c]) {
        finalizar(newValor[a], posicionesGanadoras[i])
        return
      }
    }
    if (!newValor.includes(null)) {
      finalizar(null, Array.from(Array(10).keys()))
      return
    }
    setTurno(turno === "X" ? "O" : "X");
  }

  const handleClick = value => {
    let newValor = [...valores];
    newValor.splice(value, 1, turno);
    setValores(newValor);
    checkForWinner(newValor);
  }

  const finalizar = (resultado, posicionesGanadoras) => {
    setTurno(null);
    if (resultado !== null) {
      setPuntos({
        ...puntos,
        [resultado]: puntos[resultado] + 1,
      })
    }
    setGanador(posicionesGanadoras);
    setTimeout(() => {
      reset();
    }, 2000);
  };

  return (
    <div className='container'>
      <Board ganador={ganador} turno={turno} valores={valores} onClick={handleClick} />
      <Puntos puntosO={puntos.O} puntosX={puntos.X}/>
    </div>
  )
}

export default App
