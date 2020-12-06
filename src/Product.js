import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    console.log("this is the basket >>> ", basket);

    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                title: title,
                price: price,
                rating: rating,
            },
        });
    };
    return (
        <div className="product">
            <div className="product__title">
                <p>{title}</p>
            </div>
            <div className="product__price">
                <p>₹{price}</p>
            </div>
            <div className="product__rating">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
            </div>
            <button onClick={addToBasket}>Add</button>
        </div>
    );
}

export default Product;
