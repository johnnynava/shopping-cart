import collectionArray from "../../../collectionArray";
import { ShopContext } from "../../../App";
import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// { path: "/", element: <Home /> },
// { path: "about", element: <About /> },
// { path: "checkout", element: <Checkout /> },
// { path: "product-detail", element: <ProductDetail /> },
// { path: "winter-2079-collection", element: <Winter2079Collection /> },

// export const ShopContext = createContext({
//   selectedPage: "",
//   setSelectedPage: () => {},
//   selectedProduct: "",
//   setSelectedProduct: () => {},
//   shoppingCartNum: 0,
//   totalPrice: 0,
//   shoppingCartArray: [],
//   dispatch: () => {},
// });

const Checkout = () => {
  const {
    shoppingCartArray,
    dispatch,
    shoppingCartNum,
    subtotal,
    setSelectedProduct,
    selectedPage,
    setSelectedPage,
  } = useContext(ShopContext);
  const [isCheckoutCompleted, setIsCheckoutCompleted] = useState(false);

  //not sure if it's going to work, need to wait to implement the rest and test this, play with the dependencies
  // useEffect(() => {
  //   shoppingCartArray.forEach((item) => {
  //     shoppingCartNum.current = shoppingCartNum.current + item.quantity;
  //   });
  //   shoppingCartArray
  //     .filter((item) => item.quantity > 0)
  //     .forEach((filteredItem) => {
  //       collectionArray.forEach((collectItem) => {
  //         if (filteredItem.id === collectItem.id) {
  //           subtotal.current =
  //             subtotal.current + filteredItem.quantity * collectItem.price;
  //         }
  //       });
  //     });
  // }, [shoppingCartArray, shoppingCartNum, subtotal]);

  useEffect(() => {
    setIsCheckoutCompleted(false);
  }, []);

  //should it have the dependency???
  useEffect(() => {
    setSelectedPage("checkout");
  }, [setSelectedPage]);

  if (!isCheckoutCompleted) {
    return (
      <div className="contentCheckoutFalse">
        <div className="checkoutHero">
          <img src="/src/assets/media/checkout.jpg"></img>
          <p>Shopping Cart</p>
        </div>
        <div className="checkoutLeft">
          {shoppingCartArray
            .filter((item) => item.quantity > 0)
            .map((item, index) => {
              return collectionArray
                .filter((collectItem) => collectItem.id === item.id)
                .map((filteredItem) => {
                  return (
                    <div className="productCheckout" key={"stock" + index}>
                      <img src={filteredItem.image}></img>
                      <div className="productText">
                        <p>{filteredItem.name}</p>
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
                        <div className="productButtons">
                          <Link
                            to="product-detail"
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
        <div className="checkoutRight">
          <p>Order Summary</p>
          <p>Subtotal: £{subtotal}.00</p>
          <p>Shipping: £15.00</p>
          <p>Total: £{subtotal === 0 ? 0 : subtotal + 15}.00</p>
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
  } else {
    return (
      <div className="contentCheckoutTrue">
        <p>ORDER SUCCESSFUL</p>
        <p>ORDER ID: #{uuidv4()}</p>
      </div>
    );
  }
};

export default Checkout;
