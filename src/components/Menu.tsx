import React from 'react';
import {pizzaDataMock} from "@/mock";
import {PizzaType} from "@/types/";
import {Pizza} from "@/components/";

function Menu() {
    const numPizzas=pizzaDataMock.length;
    return (
        <main   className="menu">
            <h2>our menu</h2>
            {numPizzas>0 ? (
                <>
                    <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all
                        delicious.</p>
            <ul className='pizzas'>
            {
                pizzaDataMock.map((pizza:PizzaType) => (
                        (<Pizza key={pizza.name} pizzaObj={pizza} />)
                    ))}
            </ul>
                </>): (
                <p> We&#39;re still working on our menu. Please come back later :)</p>
            )

            }
        </main>
    );
}

export default Menu;