import React from 'react';
import styles from '../index.module.css';
const Image = ({ image }) => (
    <div className={styles.image} style={{ backgroundImage: "url(" + image + ")" }}></div>
)
export default Image;