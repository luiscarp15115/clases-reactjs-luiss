import { useState } from "react";
import { Link } from 'react-router-dom';
import './ItemCount.css';

function Itemcount({ stock, inicial, onAdd }) {
    const [num, setNum] = useState(inicial)
    const agregar = () => {
        if (num < stock) {
            setNum(num + 1)
        }
    }
    const restar = () => {
        if (num > inicial) {
            setNum(num - 1)
        }
        else {
            setNum(inicial)
        }

    }

    return (
        <div className="box-provisorio">
            <p>Limite de stock {stock}</p>
            <div className="mostrarstock">
                <button onClick={restar} >-</button>
                <p>{num}</p>
                <button onClick={agregar}>+</button>
            </div>
            <Link to='/#'onClick={() => onAdd(num)}>Agregar al carrito</Link>
        </div>
    )
}

export default Itemcount;