import React from 'react';
import style from '../css/Salesign.module.css';

const Salesign = () => {
    return (
        <div className={style.saleSign}>
        <svg className={style.shadow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.53 60.53">
            <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="200%" y2="0%">
                    <stop className={style.stp1} offset="0%" stopColor="#da6540"stopOpacity="1">
                        {/* <animate attributeName="offset" values="0%;1;0%" dur="4s" repeatCount="indefinite" />   */}
                    </stop>
                    <stop className={style.stp2} stopColor="#742710"stopOpacity="1">
                        <animate attributeName="offset" values="1;0.5;1" dur="6s" repeatCount="indefinite" />
                    </stop>
                </linearGradient>
            </defs>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <polygon className={style.cls1}
                        points="54.27 49.23 41.77 45.7 41.57 58.69 32.51 49.38 25.84 60.53 22.65 47.94 11.3 54.27 14.83 41.77 1.84 41.57 11.15 32.51 0 25.84 12.59 22.65 6.27 11.3 18.77 14.83 18.96 1.84 28.02 11.15 34.69 0 37.88 12.59 49.23 6.27 45.7 18.77 58.69 18.96 49.38 28.02 60.53 34.69 47.94 37.88 54.27 49.23" />
                    <text className={style.cls2} transform="translate(18.09 26.87)">40%<tspan x="0" y="13.65">OFF</tspan></text></g>
            </g>
        </svg>
        </div>
    )
}



export default Salesign;