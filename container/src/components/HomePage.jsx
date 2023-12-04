import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePage = () => {
  const childMf = useSelector((state) => state.host);
  console.log(childMf);

  const handleReset = (e) => {
    if (e.currentTarget.id == "cake-reset") {
      const customEvent = new CustomEvent("cake-reset", {
        detail: { resetBy: 0 },
      });
      window.dispatchEvent(customEvent);
    } else {
      const customEvent = new CustomEvent("icecream-reset", {
        detail: { resetBy: 0 },
      });
      window.dispatchEvent(customEvent);
    }
  };

  return (
    <div>
      <h1>HomePage</h1>
      <div>Items In The Cart :</div>
      <div>
        <span>Cake : {childMf["cake-bought"] || 0}</span>
        <button id="cake-reset" onClick={handleReset}>
          Reset Cake
        </button>
      </div>
      <div>
        <span>IceCream : {childMf["iceCream-bought"] || 0}</span>
        <button id="icecream-reset" onClick={handleReset}>
          Reset Ice Cream
        </button>
      </div>
      <div></div>
      <h3>Product Items</h3>
      <div>
        <Link to="/cake">
          <div>
            <h4>Cake</h4>
          </div>
        </Link>
      </div>
      <div>
        <Link to="/icecream">
          <div>
            <h4>Ice Cream</h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
