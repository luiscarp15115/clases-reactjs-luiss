import { useState } from "react";
import './ItemCount.css';

function Itemcount({ stock, inicial }) {
    const [num, setNum] = useState(inicial)
    const agregar = () => {
        if (num != stock) {
            setNum(num + 1)
        }
    }
    const restar = () => {
        if (num > 0) {
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
        </div>
    )
}

export default Itemcount;