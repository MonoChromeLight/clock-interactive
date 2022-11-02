import { useRef, useEffect, useState, useCallback } from "react";

const Arrow = (props) => {
  const hourHandle = useRef(null);
  const hourArrHandle = useRef(null);

  const [rotationDegree, setRotationDegree] = useState(0);
  const [background, setBackground] = useState(0);

  const adjustTime = useCallback(
    (arrowType) => {
      if (rotationDegree < 360) {
        if (arrowType === "se") {
          setRotationDegree((prevState) => {
            return prevState + 1;
          });
        } else if (arrowType === "mi") {
          setRotationDegree((prevState) => {
            return prevState + 6;
          });
        } else if (arrowType === "ho") {
          setRotationDegree((prevState) => {
            return prevState + 30;
          });
        }
      } else {
        setRotationDegree(0);
        if (arrowType === "ho") {
          background === "#000000"
            ? setBackground("#ffffff")
            : setBackground("#000000");
        }
        document.body.style.background = background;
      }
    },
    [rotationDegree, background]
  );

  useEffect(() => {
    const handleHover = (event) => {
      let arrow = event.target.className;
      adjustTime(arrow);
    };

    let arrowElement = hourHandle.current;

    arrowElement.addEventListener("mouseover", handleHover);
    return () => {
      arrowElement.removeEventListener("mouseover", handleHover);
    };
  }, [adjustTime]);

  return (
    <div
      ref={hourHandle}
      className={props.arrowType}
      id={props.arrowType}
      style={{ transform: `rotateZ(${rotationDegree}deg)` }}
    >
      <div
        ref={hourArrHandle}
        className={props.arrowType.substring(0, 2)}
      ></div>
    </div>
  );
};

export default Arrow;
