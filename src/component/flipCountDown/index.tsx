import React, { CSSProperties } from 'react';
import styles from './index.less';
import Card from '../card';

const FlipCountDown = () => {
    return (
        <div className={styles.container}>
            <Card num={1}></Card>
        </div>
    )
};

export default FlipCountDown;