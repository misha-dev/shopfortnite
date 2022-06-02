import OverlayScrollbars from "overlayscrollbars";
import { useEffect } from "react";

const options = {};
export const useScroll = (root, hasScroll) => {
  useEffect(() => {
    let scrollBars;
    if (root.current && hasScroll) {
      scrollBars = OverlayScrollbars(root.current, options);
    }

    return () => {
      if (scrollBars) {
        scrollBars.destroy();
      }
    };
  }, [root, hasScroll]);
};
