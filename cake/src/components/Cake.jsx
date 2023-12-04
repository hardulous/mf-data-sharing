import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake, buyMoreStock } from "../rtk/cakeSlice";
import { useEffect } from "react";
const Cake = () => {
  const dispatch = useDispatch();
  const cake = useSelector((state) => state.cake);
  const shareFunc = useSelector((state) => state.dataPasser.dataCB);

  const handleBuy = () => {
    dispatch(buyCake());
  };

  useEffect(() => {
    if (shareFunc) handleShare();
  }, [cake.cake]);

  useEffect(() => {
    window.addEventListener("cake-reset", (e)=>{
        console.log(e)
    });
  }, []);

  const handleShare = () => {
    console.log(cake.cake);
    shareFunc({
      name: "cake-bought",
      data: cake.cake,
    });
  };

  return (
    <div>
      <h1>CAKE ::</h1>
      {
        <div>
          <h4>Cake : `${cake.cake}`</h4>
          <button onClick={handleBuy}>Buy Cake</button>
        </div>
      }
    </div>
  );
};

export default Cake;
