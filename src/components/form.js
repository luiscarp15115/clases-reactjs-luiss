import {  useState } from "react";
import {useCartContext} from '../store/CartContext'
import {getFirestore, doc, getDoc, collection, addDoc} from 'firebase/firestore'
import ItemList from "./ItemList";

const Form = (props) =>{
    const {carrito, totalcart} = useCartContext();
    const [newName, setNewName] = useState ("")
    const [newApellido, setNewApellido] = useState ("")
    const [newEdad, setNewEdad] = useState ("")
    const addName = (event) => {
        setNewName(event.target.value)
    }
    const addApellido = (event) => {
        setNewApellido(event.target.value)
    }
    const addEdad = (event) => {
        setNewEdad(event.target.value)
    }

    const TerminarCompra = (event) =>{
        event.preventDefault();
    
        const newUser ={
            nombre:newName,
            apellido:newApellido,
            edad:newEdad
        }

        const newBuy ={
            buyer:newUser,
            total:totalcart,
            Item:carrito
        }

        const db = getFirestore();
        const compras= collection(db,'order')
        addDoc(compras, newBuy).then((({id}) => console.log(newBuy)))
    }

    return(
        <form>
            <div>
                <label>Nombre</label>
                <input type='text' onChange={addName}/>
            </div>
            <div>
                <label>apellido</label>
                <input type='text'onChange={addApellido}/>
            </div>
            <div>
                <label>edad</label>
                <input type='text'onChange={addEdad}/>
            </div>
            <button onClick={TerminarCompra}>Terminar compra</button>


        </form>
    )
}

export default Form;