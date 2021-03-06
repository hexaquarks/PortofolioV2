import { useState } from "react";
import styles from './Cover.module.scss';


const TitleLetter = (props : {name: string, index: number}) => {

    const {name, index} = props;
    const [animating, setAnimating] = useState<boolean>(false);

    return (
        <li className     ={ animating ? `${styles.rotate}` : ''}
            onMouseEnter  ={ () => { setAnimating(true); }}
            onAnimationEnd={ () => { setAnimating(false); }}
        > 
          {index === 6 ? String.fromCharCode(160) : name}
        </li>
    )
}

export default TitleLetter;