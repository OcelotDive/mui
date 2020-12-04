import React, { useState } from 'react';

const Button = ({ val }) => {
    const [count, setCount] = useState(0);
    const [myClass, setMyClass] = useState('bar');
    const increase = () => {
        //  setCount(count + 1);
        //mock async request

        setTimeout(() => {
            setCount(count + 1);
            setMyClass('foo');
        }, 1000);

    }

    const changed = () => {
        alert("changed");
    }



    return (
        <button data-testid="count" onClick={increase} onChange={changed} className={myClass}>{`${val} ${count}`}</button>
    )
}

export default Button;