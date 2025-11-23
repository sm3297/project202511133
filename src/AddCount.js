import {useState} from 'react'; 

export default function AddCount(){

    const [count, setCount] = useState(0);

    return(
        <>
        <div>count : {count}</div>
        <button onClick={() => setCount(count + 1)}>+1</button>
        </>
    );
}
