import collectionArray from "../../../collectionArray";
import { ShopContext } from "../../../App";
import { useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";

const ShoppingCart = ({ bagLogo, shoppingCartNumBox }) => {
  const {
    shoppingCartArray,
    shoppingCartNum,
    subtotal,
    setSelectedProduct,
    isItemAddedToCart,
    setIsItemAddedToCart,
  } = useContext(ShopContext);
  const shoppingBagDiv = useRef(null);

  useEffect(() => {
    if (isItemAddedToCart) {
      shoppingBagDiv.current.className = "activeShoppingBag";
      setIsItemAddedToCart(false);
    }
  }, [isItemAddedToCart, setIsItemAddedToCart]);

  return (
    <>
      <div className="bagSection">
        <img
          src="/src/assets/purse-white.svg"
          ref={bagLogo}
          onClick={() => {
            shoppingBagDiv.current.className = "activeShoppingBag";
          }}
        ></img>
        <div className="shoppingCartNumBox" ref={shoppingCartNumBox}>
          {shoppingCartNum}
        </div>
      </div>
      <div ref={shoppingBagDiv}>
        <div></div>
        <div className="shoppingBagDivTop">
          <img
            src="/src/assets/close-black.svg"
            onClick={() => {
              shoppingBagDiv.current.className = "";
            }}
          ></img>
          <p>
            <span>Subtotal:</span> £{subtotal.toLocaleString("en-GB")}.00
          </p>
        </div>
        <div className="shoppingBagProducts">
          {shoppingCartArray
            .filter((item) => item.quantity > 0)
            .map((filteredItem, index) => {
              return collectionArray
                .filter((collectItem) => filteredItem.id === collectItem.id)
                .map((collectItem) => {
                  return (
                    <Link
                      to="/product-detail"
                      className="shoppingBagProduct"
                      key={"ShoppingBagProduct" + index}
                      onClick={() => {
                        setSelectedProduct(filteredItem.id);
                      }}
                    >
                      <img src={collectItem.image}></img>
                      <div className="shoppingBagProductRight">
                        <p>{collectItem.name}</p>
                        <p>
                          £{collectItem.price * filteredItem.quantity}.00 (
                          {filteredItem.quantity})
                        </p>
                      </div>
                    </Link>
                  );
                });
            })}
        </div>
        <Link className="shoppingBagCheckout" to="/checkout">
          CHECKOUT
        </Link>
      </div>
    </>
  );
};

export default ShoppingCart;
