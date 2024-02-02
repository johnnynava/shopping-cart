import collectionArray from "../../../collectionArray";
import { ShopContext } from "../../../App";
import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Hero = () => {
  return (
    <div className="checkoutHero">
      <p>Shopping Cart</p>
    </div>
  );
};

const Checkout = () => {
  const {
    shoppingCartArray,
    dispatch,
    setShoppingCartNum,
    subtotal,
    setSubtotal,
    setSelectedProduct,
    setSelectedPage,
  } = useContext(ShopContext);
  const [isCheckoutCompleted, setIsCheckoutCompleted] = useState(false);

  useEffect(() => {
    setShoppingCartNum(
      shoppingCartArray.reduce((prev, curr) => prev + curr.quantity, 0),
    );
  }, [shoppingCartArray, setShoppingCartNum]);

  useEffect(() => {
    let temporaryArray = shoppingCartArray
      .filter((item) => item.quantity > 0)
      .map((filteredItem) => {
        return {
          quantity: filteredItem.quantity,
          id: filteredItem.id,
          price: collectionArray.filter(
            (collectItem) => collectItem.id === filteredItem.id,
          )[0].price,
        };
      });
    setSubtotal(
      temporaryArray.reduce(
        (prev, curr) => prev + curr.quantity * curr.price,
        0,
      ),
    );
  }, [shoppingCartArray, setSubtotal]);

  useEffect(() => {
    setIsCheckoutCompleted(false);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    setSelectedPage("checkout");
  }, [setSelectedPage]);

  const CheckoutRight = () => {
    return (
      <div className="checkoutRight">
        <div>
          <p>Subtotal: £{subtotal.toLocaleString("en-GB")}.00</p>
          <p>Shipping: £{subtotal === 0 ? 0 : 15}.00</p>
          <p>
            Total: £
            {subtotal === 0 ? 0 : (subtotal + 15).toLocaleString("en-GB")}
            .00
          </p>
          <button
            onClick={() => {
              setIsCheckoutCompleted(true);
            }}
          >
            CHECKOUT
          </button>
        </div>
      </div>
    );
  };

  if (!isCheckoutCompleted) {
    return (
      <>
        <div className="contentCheckout">
          <Hero />
          <div className="checkoutLeftFalse">
            {shoppingCartArray
              .filter((item) => item.quantity > 0)
              .map((item, index) => {
                return collectionArray
                  .filter((collectItem) => collectItem.id === item.id)
                  .map((filteredItem) => {
                    return (
                      <div className="productCheckout" key={"stock" + index}>
                        <div>
                          <img src={filteredItem.image}></img>
                        </div>
                        <div className="productText">
                          <p>{filteredItem.name}</p>
                          <div className="productQtyAndPrice">
                            <select
                              value={item.quantity}
                              onChange={(e) => {
                                dispatch({
                                  type: "modify",
                                  payload: {
                                    id: filteredItem.id,
                                    quantity: +e.target.value,
                                  },
                                });
                              }}
                            >
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                            </select>
                            <p>
                              £
                              {(
                                filteredItem.price * item.quantity
                              ).toLocaleString("en-GB")}
                              .00
                            </p>
                          </div>
                          <div className="productButtons">
                            <Link
                              to={
                                "/product-detail/" +
                                filteredItem.name
                                  .toLowerCase()
                                  .replace(" ", "-") +
                                "-" +
                                filteredItem.id
                              }
                              onClick={() => {
                                setSelectedProduct(filteredItem.id);
                              }}
                            >
                              View Details
                            </Link>
                            <button
                              onClick={() => {
                                dispatch({
                                  type: "remove",
                                  payload: { id: filteredItem.id },
                                });
                              }}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  });
              })}
          </div>
          <CheckoutRight />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="contentCheckout">
          <Hero />
          <div className="checkoutLeftTrue">
            <div>
              <p>ORDER SUCCESSFUL</p>
              <p>ORDER ID: #{uuidv4().toUpperCase()}</p>
            </div>
          </div>
          <CheckoutRight />
        </div>
      </>
    );
  }
};

export default Checkout;
