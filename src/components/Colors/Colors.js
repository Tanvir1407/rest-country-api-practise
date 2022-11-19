import React from 'react';
import './Colors.css';
const Colors = () => {
    function black() {
        document.getElementById('black').style.backgroundColor = 'black';
        document.getElementById('black').style.color = 'white';
    }
    return (
        <div>
            <ul className='list__item'>
                <li onClick={black}>black</li>
                <li>Green</li>
                <li>Yellow</li>
                <li>pink</li>
            </ul>
        </div>
    );
};

export default Colors;