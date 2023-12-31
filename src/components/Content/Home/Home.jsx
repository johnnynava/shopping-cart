import collectionArray from "../../../collectionArray";
import { ShopContext } from "../../../App";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

//should it have the dependency???
const Home = () => {
  const { setSelectedPage, setSelectedProduct } = useContext(ShopContext);
  useEffect(() => {
    setSelectedPage("/");
  }, [setSelectedPage]);

  return (
    <div className="contentHome">
      <div className="videoContainer">
        <video autoPlay muted loop>
          <source src="/src/assets/media/video.mp4" type="video/mp4"></source>
        </video>
        <Link to="winter-2079-collection">Winter 2079 Collection</Link>
      </div>
      <div className="discoverSection">
        {collectionArray.map((item, index) => {
          if (index < 3) {
            return (
              <div className="featured" key={"featured" + index}>
                <img src={item.image}></img>
                <p>{item.name}</p>
                <Link
                  to="product-detail"
                  onClick={() => {
                    setSelectedProduct(item.id);
                  }}
                >
                  Discover
                </Link>
              </div>
            );
          }
        })}
      </div>
      <div className="homeAbout">
        <img src="/src/assets/media/homeAbout.jpg"></img>
        <Link to="about">About us</Link>
      </div>
    </div>
  );
};

export default Home;
