import { useEffect, useState } from "react";
import styles from "../styles/Pad.module.css";
const Pad = () => {
  const gridSize = 32;
  const squares = Array(gridSize * gridSize).fill(null);
  const paletteOptions = ['default', 'bright']
  const paletteIndex = 0;
  const [choices, setChoices] = useState([
    "white",
    "black",
    "green",
    "blue",
    "red",
    "yellow",
    "purple",
    "orange",
  ]);
  const [color, setColor] = useState(choices[0]);
  const [clicked, setClicked] = useState(false);
  const [palette, setPalette] = useState(paletteOptions[paletteIndex]);
  
 useEffect(() => {
    





 }, [palette]);

  const handleClick = (index) => {
    const square = document.getElementById(`square-${index}`);

    square.style.backgroundColor = color;
  };

  const handleClear = () => {
    const allSquares = document.getElementsByClassName(styles.square);

    for (let i = 0; i < allSquares.length; i++) {
      const square = allSquares[i];

      square.style.backgroundColor = "white";
    }
  };

  const handlePreview = () => {
    const allSquares = document.getElementsByClassName(styles.square);

    for (let i = 0; i < allSquares.length; i++) {
      const square = allSquares[i];

      square.style.border = "0px";
    }

    if (clicked === false) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };

  const stopPreview = () => {
    const allSquares = document.getElementsByClassName(styles.square);

    for (let i = 0; i < allSquares.length; i++) {
      const square = allSquares[i];

      square.style.border = "1px solid black";
    }

    if (clicked === false) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };

  

  return (
    <>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.colorOptions}>
            <button>up</button>
            <br></br>
            {choices.map((choice, index) => (
              <div>
                <div
                  key={index}
                  className={styles.colorBlock}
                  style={{ backgroundColor: choice }}
                  onClick={() => setColor(choice)}
                ></div>
                <br></br>
              </div>
            ))}
            <button>down</button>
            <br></br>
            <p>Current Color:</p>
            <div
              className={styles.current}
              style={{ backgroundColor: color }}
            ></div>
          </div>

          <div className={styles.box}>
            {squares.map((squares, index) => (
              <div
                key={index}
                className={styles.square}
                id={`square-${index}`}
                onClick={() => handleClick(index)}
              ></div>
            ))}
          </div>
        </div>
        <br></br>
      </div>
      <div className={styles.buttonRow}>
        {clicked ? (
          <button onClick={stopPreview}>Stop Preview</button>
        ) : (
          <button onClick={handlePreview}>Preview</button>
        )}

        <button onClick={handleClear}>Clear</button>
      </div>
    </>
  );
};

export default Pad;
