import './Kvadrat.css';
import {useState, useEffect, useRef} from 'react';

function Kvadrat(){
    const divClass = useRef();
    const arr = ['red', 'blue', 'yellow', 'green'];
    const [styles, setStyles] = useState('');
    const [count, setCount] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setCount(count + 1);
            if(count >= arr.length - 1){
                setCount(0);
            }            
            // console.log(count)
            setStyles(arr[count]);
            divClass.current.className = `kvadrat ${styles}`;
        }, 1000);
    }, [styles]);
    return <div className="kvadrat" ref={divClass} >Hello world</div>
}

export default Kvadrat;