import collectionArray from "../../../collectionArray";
import { ShopContext } from "../../../App";
import { useEffect, useContext, useRef } from "react";
import Header from "../../Header/Header";

const ProductDetail = () => {
  const {
    setSelectedPage,
    shoppingCartArray,
    dispatch,
    setShoppingCartNum,
    setSubtotal,
    selectedProduct,
    setIsItemAddedToCart,
  } = useContext(ShopContext);

  const maxQuantityAlert = useRef(null);

  useEffect(() => {
    setSelectedPage("product-detail");
  }, [setSelectedPage]);

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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    maxQuantityAlert.current.className = "";
  }, []);

  return collectionArray
    .filter((item) => item.id === selectedProduct)
    .map((selected) => {
      return (
        <>
          <Header />
          <div className="contentProductDetail" key="selectedProduct">
            <div style={{ backgroundImage: `url(${selected.image})` }}></div>
            <div className="productDetailRight">
              <p>{selected.name}</p>
              <p>£{selected.price.toLocaleString("en-GB")}.00</p>
              <button
                onClick={() => {
                  shoppingCartArray.filter((item) => item.id === selected.id)[0]
                    .quantity >= 3
                    ? (maxQuantityAlert.current.className =
                        "maxQuantityAlertActive")
                    : setIsItemAddedToCart(true);
                  dispatch({ type: "add", payload: { id: selected.id } });
                }}
              >
                Add to cart
              </button>
              <p ref={maxQuantityAlert}>
                You may only purchase up to 3 items of each product
              </p>
            </div>
          </div>
        </>
      );
    });
};

export default ProductDetail;
