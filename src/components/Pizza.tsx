import Image from "next/image";
import {PizzaType} from "@/types/";


interface Props {
    pizzaObj:PizzaType
}

 function Pizza({pizzaObj}:Props){
    return (
        <li className={`pizza ${pizzaObj.soldOut ? "pizza sold-out" : ""}`}>
            <Image
                src={pizzaObj.photoName}
                alt={pizzaObj.name}
                height={400}
                width={400}
            />
            <div >
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredients}</p>
            <span>{pizzaObj.soldOut ? 'Sold Out': pizzaObj.price }</span>
            </div>
        </li>

    )
}
export default Pizza;