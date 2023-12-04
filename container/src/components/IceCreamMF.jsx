import { mount } from "iceCream/iceCreamApp";
import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fromChild } from "../rtk/hostSlice";

export default () => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        if (history.location.pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      initialPath: history.location.pathname,
      fromIceCreamMF: (childInfo) => {
        dispatch(
          fromChild({
            name: childInfo.name,
            data: childInfo.data,
          })
        );
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <diV ref={ref} id="icecream-mf"></diV>;
};
