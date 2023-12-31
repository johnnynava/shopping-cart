import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Router from "./components/Router";
import collectionArray from "./collectionArray";
import { useState, useRef, useReducer, useEffect, createContext } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        shoppingCartArray: state.shoppingCartArray.map((item) => {
          if (+action.payload.id === item.id && item.quantity < 3) {
            return { ...item, quantity: item.quantity + 1 };
          } else return item;
        }),
      };
    case "remove":
      return {
        shoppingCartArray: state.shoppingCartArray.map((item) => {
          if (+action.payload.id === item.id) {
            return { ...item, quantity: 0 };
          } else return item;
        }),
      };
    case "modify":
      return {
        shoppingCartArray: state.shoppingCartArray.map((item) => {
          if (+action.payload.id === item.id) {
            return { ...item, quantity: action.payload.quantity };
          } else return item;
        }),
      };
  }
};

export const ShopContext = createContext({
  selectedPage: "",
  setSelectedPage: () => {},
  selectedProduct: "",
  setSelectedProduct: () => {},
  shoppingCartNum: 0,
  subtotal: 0,
  shoppingCartArray: [],
  dispatch: () => {},
});

const initialShoppingCartArray = collectionArray.map((item) => {
  return { id: item.id, quantity: 0 };
});

const App = () => {
  const [selectedPage, setSelectedPage] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const shoppingCartNum = useRef(0); // shoppingCartNum.current = shoppingCartNum.current
  const subtotal = useRef(0); //subtotal.current
  const [state, dispatch] = useReducer(reducer, {
    shoppingCartArray: initialShoppingCartArray,
  });

  // useEffect(() => {
  //   console.log(state.shoppingCartArray);
  // }, [state]);

  return (
    <ShopContext.Provider
      value={{
        selectedPage,
        setSelectedPage,
        selectedProduct,
        setSelectedProduct,
        shoppingCartNum,
        subtotal,
        shoppingCartArray: state.shoppingCartArray,
        dispatch,
      }}
    >
      <Header />
      <Router />
      <Footer />
    </ShopContext.Provider>
  );
};

export default App;

{
  /* <h1>COLLECTION</h1>
{collectionArray.map((item, index) => {
  return (
    <Fragment key={"collection" + index}>
      <img src={item.image}></img>
      <button
        data-id={item.id}
        onClick={(e) => {
          dispatch({
            type: "add",
            payload: { id: e.target.getAttribute("data-id") },
          });
        }}
      >
        Add to cart
      </button>
    </Fragment>
  );
})}
<h1>SHOPPING CART</h1>
{state.shoppingCartArray
  .filter((item) => item.quantity > 0)
  .map((item, index) => {
    return collectionArray
      .filter((collectItem) => collectItem.id === item.id)
      .map((filteredItem) => {
        return (
          <Fragment key={"stock" + index}>
            <img src={filteredItem.image}></img>
            <select
              value={item.quantity}
              data-id={filteredItem.id}
              onChange={(e) => {
                dispatch({
                  type: "modify",
                  payload: {
                    id: e.target.getAttribute("data-id"),
                    quantity: +e.target.value,
                  },
                });
              }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <button
              data-id={filteredItem.id}
              onClick={(e) => {
                dispatch({
                  type: "remove",
                  payload: { id: e.target.getAttribute("data-id") },
                });
              }}
            >
              Remove from cart
            </button>
          </Fragment>
        );
      });
  })} */
}
