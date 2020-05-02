import preloader from '../../../assets/images/preloader.svg'
import React from "react";
import styles from './Preloader.module..css'

let Preloader = (props) => {
    return <img src={preloader} className={styles.preloader}/>
};
export default Preloader;