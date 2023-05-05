import { useState } from 'react';
import styles from '../styles/Pad.module.css';
const Pad = () => {
const gridSize = 24
const squares = Array(gridSize * gridSize).fill(null);
const [color, setColor] = useState();

const handleClick = (index) => {
    const square = document.getElementById(`square-${index}`)

    square.style.backgroundColor= color
}

const handleClear = () => {
    
    const allSquares = document.getElementsByClassName(styles.square)

    for(let i =0; i < allSquares.length; i++){
        const square = allSquares[i]

        square.style.backgroundColor = 'white'
        
    }

    
}


return(
<>



<div className={styles.container}>
<div className={styles.row}>
<div className={styles.colorOptions}>
    <div className={styles.white} onClick={ () => setColor('white')}></div>
    <br></br>
    <div className={styles.black} onClick={() => setColor('black')}></div>
    <br></br>
    <div className={styles.green} onClick={() => setColor('green')}></div>
    <br></br>
    <div className={styles.blue} onClick={() => setColor('blue')}></div>
    <br></br>
    <div className={styles.red} onClick={() => setColor('red')}></div>
    <br></br>
    <div className={styles.yellow} onClick={() => setColor('yellow')}></div>
    <br></br>
    <div className={styles.purple} onClick={() => setColor('purple')}></div>
    <br></br>
    <div className={styles.orange} onClick={() => setColor('orange')}></div>
</div>

<div className={styles.box}>
    {squares.map((squares, index) => (
        <div key={index} className={styles.square} id={`square-${index}`} onClick = {() => handleClick(index)}></div>
    ))}
</div>
</div>
<br></br>

<div className={styles.row}>
<button onClick={handleClear}>Clear</button>
</div>
</div>


    




</>
)
}

export default Pad;