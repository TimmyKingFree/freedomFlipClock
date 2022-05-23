import React, { CSSProperties } from 'react';
import styles from './index.less';

export interface IFreedomFlipClockCard {
    num: number;
    style?: CSSProperties;
    className?: string;
}

const Card = ({
    num = 0,
    style = {},
    className
}: IFreedomFlipClockCard) => {
    return (
        <div className={`${styles.container} ${className}`} style={style}>
            <span className="freedomFlipClockNum">{num}</span>
            <div className="freedomFlipClockBar" />
        </div>
    )
};

export default Card;