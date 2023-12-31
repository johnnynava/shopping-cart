import collectionArray from "../../../collectionArray";
import { ShopContext } from "../../../App";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const {
    setSelectedPage,
    shoppingCartArray,
    dispatch,
    setShoppingCartNum,
    setSubtotal,
    selectedProduct,
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
      return (
        <div className="contentProductDetail" key="selectedProduct">
          <img src={selected.image}></img>
          <div className="productDetailRight">
            <p>{selected.name}</p>
            <p>{selected.price}</p>
            <button
              onClick={() => {
                dispatch({ type: "add", payload: { id: selected.id } });
              }}
            >
              Add to cart
            </button>
            <Link to="/checkout">GO TO CHECKOUT</Link>
          </div>
        </div>
      );
    });
};

export default ProductDetail;
