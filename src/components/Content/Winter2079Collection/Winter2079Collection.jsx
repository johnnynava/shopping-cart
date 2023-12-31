import collectionArray from "../../../collectionArray";
import { ShopContext } from "../../../App";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

const Winter2079Collection = () => {
  const { setSelectedPage, setSelectedProduct } = useContext(ShopContext);
  useEffect(() => {
    setSelectedPage("winter-2079-collection");
  }, [setSelectedPage]);

  return (
    <div className="contentWinter2079Collection">
      <div className="winter2079CollectionHero">
        <img src="/src/assets/media/winter-collection.jpg"></img>
        <p>Winter 2079 Collection</p>
        <div className="sortWinter2079Collection">
          {/* sort by price (low to high, high to low), only show certain colors */}
        </div>
      </div>
      <div className="productsWinter2079Collection">
        {collectionArray.map((item, index) => {
          return (
            <div
              className="productWinter2079Collection"
              key={"productW2079C" + index}
            >
              <Link
                to="/product-detail"
                onClick={() => {
                  setSelectedProduct(item.id);
                }}
              >
                <img src={item.image}></img>
                <p>{item.name}</p>
                <p>£{item.price.toLocaleString("en-GB")}.00</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Winter2079Collection;
