import collectionArray from "../../../collectionArray";
import { ShopContext } from "../../../App";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
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

  return collectionArray
    .filter((item) => item.id === selectedProduct)
    .map((selected) => {
      console.log(selected.image);
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
                  setIsItemAddedToCart(true);
                  dispatch({ type: "add", payload: { id: selected.id } });
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </>
      );
    });
};

export default ProductDetail;
