import collectionArray from "../../../collectionArray";
import { ShopContext } from "../../../App";
import { useEffect, useContext, useState, useRef } from "react";
import { Link } from "react-router-dom";

const Winter2079Collection = () => {
  const [sortOrder, setSortOrder] = useState("Default");
  const sortedArray = useRef(collectionArray);
  const [filteredColor, setFilteredColor] = useState("All Colours");
  const filteredAndSortedArray = useRef(sortedArray.current);
  const { setSelectedPage, setSelectedProduct } = useContext(ShopContext);

  useEffect(() => {
    setSelectedPage("winter-2079-collection");
  }, [setSelectedPage]);

  useEffect(() => {
    setSortOrder("Default");
    setFilteredColor("All Colours");
  }, []);

  const Sort = () => {
    return (
      <div className="winter2079CollectionHero">
        <img src="/src/assets/media/winter-collection.jpg"></img>
        <p>Winter 2079 Collection</p>
        <div className="sortWinter2079Collection">
          <select
            value={sortOrder}
            onChange={(e) => {
              setSortOrder(e.target.value);
            }}
          >
            <option value="Default Order">Default Order</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
          </select>
          <select
            value={filteredColor}
            onChange={(e) => {
              setFilteredColor(e.target.value);
            }}
          >
            <option value="All Colours">All Colours</option>
            <option value="Black">Black</option>
            <option value="Blue">Blue</option>
            <option value="Gold">Gold</option>
            <option value="Pink">Pink</option>
            <option value="Red">Red</option>
          </select>
        </div>
      </div>
    );
  };
  if (sortOrder === "Default Order") {
    sortedArray.current = collectionArray;
  } else if (sortOrder === "Price: Low to High") {
    sortedArray.current = collectionArray.slice().sort((a, b) => {
      return a.price - b.price;
    });
  } else if (sortOrder === "Price: High to Low") {
    sortedArray.current = collectionArray.slice().sort((a, b) => {
      return b.price - a.price;
    });
  }
  if (filteredColor === "All Colours") {
    filteredAndSortedArray.current = sortedArray.current;
  } else if (filteredColor === "Black") {
    filteredAndSortedArray.current = sortedArray.current.filter(
      (item) => item.color === "black",
    );
  } else if (filteredColor === "Blue") {
    filteredAndSortedArray.current = sortedArray.current.filter(
      (item) => item.color === "blue",
    );
  } else if (filteredColor === "Gold") {
    filteredAndSortedArray.current = sortedArray.current.filter(
      (item) => item.color === "gold",
    );
  } else if (filteredColor === "Pink") {
    filteredAndSortedArray.current = sortedArray.current.filter(
      (item) => item.color === "pink",
    );
  } else if (filteredColor === "Red") {
    filteredAndSortedArray.current = sortedArray.current.filter(
      (item) => item.color === "red",
    );
  }

  return (
    <div className="contentWinter2079Collection">
      <Sort />
      <div className="productsWinter2079Collection">
        {filteredAndSortedArray.current.map((item, index) => {
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
