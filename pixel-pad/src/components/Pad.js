
import styles from '../styles/Pad.module.css';
const Pad = () => {
const gridSize = 20
const squares = Array(gridSize * gridSize).fill(null);
return(
<>
<div className={styles.container}>
<div className={styles.box}>
    {squares.map((squares, index) => (
        <div key={index} className={styles.square} id={`square-${index}`}></div>
    ))}
</div>


</div>
</>
)
}

export default Pad;