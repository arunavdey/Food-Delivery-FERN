import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            title: title,
        });
    };
    return (
        <div className="checkoutProduct">
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <p>₹{price}</p>
                </p>
                <p className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </p>
                {!hideButton && (
                    <button onClick={removeFromBasket}>
                        Remove from Basket
                    </button>
                )}
            </div>
        </div>
    );
}

export default CheckoutProduct;
