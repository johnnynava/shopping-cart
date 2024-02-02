import collectionArray from "../../../collectionArray";
import { ShopContext } from "../../../App";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const { setSelectedPage, setSelectedProduct } = useContext(ShopContext);
  useEffect(() => {
    setSelectedPage("/");
  }, [setSelectedPage]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="contentHome">
        <div className="videoContainer">
          <video autoPlay muted loop playsInline>
            <source src="/assets/media/video4.mp4" type="video/mp4"></source>
          </video>
          <Link to="winter-2079-collection">Winter 2079 Collection</Link>
        </div>
        <div className="discoverSection">
          {collectionArray.map((item, index) => {
            if (index < 3) {
              return (
                <div className="featured" key={"featured" + index}>
                  <div>
                    <img src={item.image}></img>
                  </div>
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
          <div>
            <img src="/assets/media/homeAbout.jpg"></img>
          </div>
          <div>
            <p>Learn more about Brand</p>
            <Link to="about">About us</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
