import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const ImageElement = ({ setImageIndex, index, scrolling }) => {
  const [pos, setPos] = useState(null);
  const ref = useRef();

  useEffect(() => {
    setPos(ref.current?.getBoundingClientRect());
  }, [scrolling]);

  useEffect(() => {
    pos?.y <= 200 && pos.y >= 0 && setImageIndex(index);
  }, [pos]);

  return (
    <div ref={ref}>
    </div>
  );
};

export default ImageElement;
