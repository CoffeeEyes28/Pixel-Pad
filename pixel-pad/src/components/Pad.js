import { useState } from 'react';
import styles from '../styles/Pad.module.css';
const Pad = () => {
const gridSize = 20
const squares = Array(gridSize * gridSize).fill(null);
const [color, setColor] = useState();

const handleClick = (index) => {
    const square = document.getElementById(`square-${index}`)

    square.style.backgroundColor = color
}


return(
<>



<div className={styles.container}>
<div className={styles.colorOptions}>
    <div className={styles.white} onClick={ () => setColor('white')}></div>
    <br></br>
    <div className={styles.black} onClick={() => setColor('black')}></div>
</div>

<div className={styles.box}>
    {squares.map((squares, index) => (
        <div key={index} className={styles.square} id={`square-${index}`} onClick = {() => handleClick(index)}></div>
    ))}
</div>

</div>





</>
)
}

export default Pad;