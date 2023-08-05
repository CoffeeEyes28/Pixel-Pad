import { useEffect, useState, useRef } from 'react';

import styles from '../styles/Pad.module.css';
const Pad = () => {
const gridSize = 24
const squares = Array(gridSize * gridSize).fill(null);
const [color, setColor] = useState('white');
const [hoverColor, setHoverColor] = useState('white')
const [clicked, setClicked] = useState(false)
const preColor = useRef()


const handleClick = (index) => {
    const square = document.getElementById(`square-${index}`)

    square.style.backgroundColor = color

    preColor.current = color
}



const handleHover = (index) => {
    const square = document.getElementById(`square-${index}`)
    

    let squareColor = window.getComputedStyle(square).backgroundColor;

    preColor.current = squareColor
   
    square.style.backgroundColor = hoverColor
    
 }

 const handleLeave = (index) => {
    const square = document.getElementById(`square-${index}`)

    square.style.backgroundColor = preColor.current;
 }



const handleClear = () => {
    
    const allSquares = document.getElementsByClassName(styles.square)

    for(let i =0; i < allSquares.length; i++){
        const square = allSquares[i]

        square.style.backgroundColor = 'white'
        
    }

   
}

const handlePreview = () => {
    const allSquares = document.getElementsByClassName(styles.square)

    for(let i = 0; i < allSquares.length; i++){
       const square = allSquares[i]

       square.style.border = '0px'
       
    }

    if(clicked === false){
        setClicked(true)
    }else{
        setClicked(false)
    }
}

const stopPreview = () => {
    const allSquares = document.getElementsByClassName(styles.square)

    for(let i =0; i < allSquares.length; i++){
        const square = allSquares[i]

        square.style.border = '1px solid black'
    }

    if(clicked === false){
        setClicked(true)
    }else{
        setClicked(false)
    }
}

return(
<>
<div className={styles.container}>

<div className={styles.row}>

<div className={styles.colorOptions}>
    <div className={styles.white} onClick={() => {setColor('white'); setHoverColor('white')}}></div>
    <br></br>
    <div className={styles.black} onClick={() => {setColor('black'); setHoverColor('black')}}></div>
    <br></br>
    <div className={styles.green} onClick={() => {setColor('green'); setHoverColor('green')}}></div>
    <br></br>
    <div className={styles.blue} onClick={() => {setColor('blue'); setHoverColor('blue')}}></div>
    <br></br>
    <div className={styles.red} onClick={() => {setColor('red'); setHoverColor('red')}}></div>
    <br></br>
    <div className={styles.yellow} onClick={() => {setColor('yellow'); setHoverColor('yellow')}}></div>
    <br></br>
    <div className={styles.purple} onClick={() => {setColor('purple'); setHoverColor('purple')}}></div>
    <br></br>
    <div className={styles.orange} onClick={() => {setColor('orange'); setHoverColor('orange')}}></div>
    <br></br>
    <p>Current Color:</p>
    <div className={styles.current} style={{backgroundColor: color}}></div>
</div>

<div className={styles.box}>
    {squares.map((squares, index) => (
        <div key={index} className={styles.square}  id={`square-${index}`} onMouseEnter={() => handleHover(index)} onMouseLeave={() => handleLeave(index)} onClick = {() => handleClick(index)}></div>
    ))}
</div>
</div>
<br></br>

</div>
<div className={styles.buttonRow}>
{clicked ? <button onClick={stopPreview}>Stop Preview</button>  : <button onClick={handlePreview}>Preview</button>   }


<button onClick={handleClear}>Clear</button>
</div>
</>
)
}

export default Pad;