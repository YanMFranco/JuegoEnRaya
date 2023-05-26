import './Valores.css';
import classNames from 'classnames';

const Valores = ({value, onClick, turno ,ganador}) => {

    const handleClick = () => {
        (turno !== null && value === null) && onClick();
    }

    let valoresClases = classNames({
        valores: true,
        [`valores--${value}`]: value !== null,
        ganador: ganador,
    })

    return (
        <div className={valoresClases} onClick={()=> handleClick()}>

        </div>
    )
}

export default Valores;