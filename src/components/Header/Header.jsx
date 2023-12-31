import collectionArray from "../../collectionArray";
import { useContext, useEffect } from "react";
import { ShopContext } from "../../App";

const Header = () => {
  const {
    selectedPage,
    shoppingCartArray,
    shoppingCartNum,
    subtotal,
    setSelectedProduct,
  } = useContext(ShopContext);
};

export default Header;
