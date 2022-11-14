import React, { useState, useEffect } from "react";

const CounterIssue = () => {
    const [count, setCount] = useState(0);
    const [countIssue, setCountIssue] = useState('')

    const handleIncrement = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        document.title = count;
        setCountIssue(count)
    }, [count]);

    return (
        <div>
            <h1>{count}</h1>
            <h1>{countIssue}</h1>
            <button onClick={handleIncrement}>Plus 1</button>
        </div>
    );
}
 
export default CounterIssue;
