import Valores from "../Valores/Valores";
import './Board.css';

const Board = ({ valores , onClick , turno , ganador}) => {

    const createValores = values => (
        values.map(value => (
            <Valores
                ganador={ganador.includes(value)}
                turno={turno}
                onClick={()=>onClick(value)} 
                value={valores[value]}
                key={`valor_${value}`}
            />
        ))
    );

    return (
        <div className="board">
            <div className="row">
                {createValores([0, 1, 2])}
            </div>
            <div className="row">
                {createValores([3, 4, 5])}
            </div>
            <div className="row">
                {createValores([6, 7, 8])}
            </div>
        </div>
    );
}

export default Board;