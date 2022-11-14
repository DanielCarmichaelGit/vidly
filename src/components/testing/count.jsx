import React, { useState, useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        document.title = count;
    }, [count]);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Plus 1</button>
        </div>
    );
}
 
export default Counter;
