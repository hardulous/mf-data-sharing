import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake, buyMoreStock } from "../rtk/cakeSlice";
import { useEffect } from "react";
const Cake = () => {
  const dispatch = useDispatch();

  const cake = useSelector((state) => state.cake);
  const shareFunc = useSelector((state) => state.dataPasser.dataCB);
  const pubSub = useSelector((state) => state.dataPasser.pubSub);

  const handleBuy = () => {
    dispatch(buyCake());
  };

  useEffect(() => {
    // if (shareFunc) handleShare();
    if (pubSub) pubSub.publish("cake-bought", cake.cake);
  }, [cake.cake]);

  useEffect(() => {
    window.addEventListener("cake-reset", (e) => {
      console.log(e);
    });
    if (pubSub)
      pubSub.subscribe("pending-event", (data) => {
        console.log(data);
      });
  }, [pubSub]);

  const handleShare = () => {
    console.log(cake.cake);
    shareFunc({
      name: "cake-bought",
      data: cake.cake,
    });
  };

  const publishBuy = () => {
    dispatch(buyCake());
  };

  const handleFake = () => {
    pubSub.subscribe("fake-cake-event", (data) => {});
  };

  return (
    <div>
      <h1>CAKE ::</h1>
      {
        <div>
          <h4>Cake : `${cake.cake}`</h4>
          {/* 
         <button onClick={handleBuy}>Buy Cake</button>
        */}
          <button onClick={publishBuy}>Buy Cake</button>
          <button onClick={handleFake}>Fake Subscribe</button>
        </div>
      }
    </div>
  );
};

export default Cake;
