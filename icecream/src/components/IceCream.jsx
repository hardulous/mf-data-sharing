import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../rtk/iceCreamSlice";

const IceCream = () => {
  const dispatch = useDispatch();
  const iceCream = useSelector((state) => state.iceCream);
  const shareFunc = useSelector((state) => state.dataPasser.dataCB);

  useEffect(() => {
    if (shareFunc) handleShare();
  }, [iceCream.iceCream]);

  useEffect(() => {
    window.addEventListener("icecream-reset", (e)=>{
        console.log(e)
    });
  }, []);

  const handleShare = () => {
    shareFunc({
      name: "iceCream-bought",
      data: iceCream.iceCream,
    });
  };

  return (
    <div>
      <h1>ICECREAM::</h1>
      {
        <div>
          <h4>Ice Cream : `${iceCream.iceCream}`</h4>
          <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
        </div>
      }
    </div>
  );
};

export default IceCream;
