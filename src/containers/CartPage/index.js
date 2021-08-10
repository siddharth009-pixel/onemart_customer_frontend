import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCartItems } from "../../actions/cart.action";
import { cartConstants } from "../../actions/constants";
import Layout from "../../components/Layout";
import { MaterialButton } from "../../components/MaterialUI";
import { Card } from "../../UI/Card";
import { CartItem } from "./CartItem";
import "./style.css";
import { PriceDetails } from "../../components/PriceDetails";

export default function CartPage(props) {
  
  console.log('helllooo');
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const [cartItems, setCartItems] = useState(cart.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    setCartItems(cart.cartItems);
  });

  useEffect(() => {
    if (auth.authenticate) {
      dispatch(getCartItems());
      console.log('sdfghjrtyucvbn');
      setCartItems(cart.cartItems);
    }
  }, [auth.authenticate]);

  const onQuantityIncrement = (_id, qty) => {
    const { name, img, price } = cartItems[_id];
    dispatch(addToCart({ _id, name, img, price, qty }, 1));
  };

  const onQuantityDecrement = (_id, qty) => {
    const { name, img, price } = cartItems[_id];
    dispatch(addToCart({ _id, name, img, price, qty }, -1));
  };

  if (props.withoutHeaderAndFooter) {
    return (
      <div>
        {Object.keys(cartItems).map((key, index) => {
          return (
            <CartItem
              key={index}
              cartItem={cartItems[key]}
              onQuantityInc={onQuantityIncrement}
              onQuantityDec={onQuantityDecrement}
            />
          );
        })}
      </div>
    );
  }

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          margin: "10px 20px",
        }}
        className="cartPageDiv"
      >
        <div
          style={{
            width: "75%",
            border: "2px solid black",
          }}
        >
          <div style={{ borderBottom: "2px solid black" }}>
            <h3>My Cart</h3>
          </div>
          <div>
            {Object.keys(cartItems).map((key, index) => {
              return (
                <CartItem
                  key={index}
                  cartItem={cartItems[key]}
                  onQuantityInc={onQuantityIncrement}
                  onQuantityDec={onQuantityDecrement}
                />
              );
            })}
          </div>
          <div style={{ margin: "5px 10px", width: "30%" }}>
            <MaterialButton
              title="Place Order"
              onClick={() => {
                props.history.push("/checkout");
              }}
            />
          </div>
        </div>

        <div
          style={{
            width: "25%",
            border: "2px solid black",
          }}
        >
          <div>
            <h3>Price Details</h3>
          </div>
          <div>
            <PriceDetails
              style={{
                margin: "20px 20px",
              }}
              totalItems={Object.keys(cart.cartItems).reduce((qty, key) => {
                return qty + cart.cartItems[key].qty;
              }, 0)}
              totalPrice={Object.keys(cart.cartItems).reduce((price, key) => {
                return (
                  price + cart.cartItems[key].price * cart.cartItems[key].qty
                );
              }, 0)}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
