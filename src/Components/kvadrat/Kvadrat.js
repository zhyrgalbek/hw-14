import './Kvadrat.css';
import {useState, useEffect, useRef} from 'react';

function Kvadrat(){
    const divClass = useRef();
    const arr = ['red', 'blue', 'yellow', 'green'];
    const [styles, setStyles] = useState('');
    const [count, setCount] = useState(0);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setCount(count + 1);
            if(count >= arr.length - 1){
                setCount(0);
            }            
            setStyles(arr[count]);
            divClass.current.className = `kvadrat ${styles}`;
            // console.log('changed');
        }, 1000);
        return ()=>{
            // console.log('clear')
            clearTimeout(timer);
        }
    }, [styles]);
    return <div className="kvadrat" ref={divClass} >Hello world</div>
}

export default Kvadrat;