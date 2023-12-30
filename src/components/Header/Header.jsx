import collectionArray from "../../collectionArray";
import { useContext, useEffect } from "react";
import { ShopContext } from "../../App";

const Header = () => {
  const {
    selectedPage,
    shoppingCartArray,
    shoppingCartNum,
    totalPrice,
    setSelectedProduct,
  } = useContext(ShopContext);
};

export default Header;
