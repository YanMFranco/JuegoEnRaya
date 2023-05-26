import './Puntos.css';

const Puntos = ({puntosX,puntosO}) =>{
    return (
        <div className='puntos'>
            <div>{puntosX}</div>
            <div>{puntosO}</div>
        </div>
    )
}

export default Puntos;