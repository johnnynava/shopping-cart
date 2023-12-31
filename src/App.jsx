import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Router from "./components/Router";
import collectionArray from "./collectionArray";
import { useState, useReducer, createContext } from "react";

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
  setShoppingCartNum: () => {},
  subtotal: 0,
  setSubtotal: () => {},
  shoppingCartArray: [],
  dispatch: () => {},
});

const initialShoppingCartArray = collectionArray.map((item) => {
  return { id: item.id, quantity: 0 };
});

const App = () => {
  const [selectedPage, setSelectedPage] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [shoppingCartNum, setShoppingCartNum] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    shoppingCartArray: initialShoppingCartArray,
  });

  return (
    <ShopContext.Provider
      value={{
        selectedPage,
        setSelectedPage,
        selectedProduct,
        setSelectedProduct,
        shoppingCartNum,
        setShoppingCartNum,
        subtotal,
        setSubtotal,
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
