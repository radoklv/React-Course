import React, {useState} from 'react'
import Output from './Output';

const Greeting = () => {
    const [textChanged, setTextChanged] = useState(false);

    const textChangeHandler = ()=>{
        setTextChanged(true)
    }

    return (
        <div>
            <h2>Hello World!</h2>
            {!textChanged && <Output>It's good to see you!</Output>}
            {textChanged && <Output>Changed!</Output>}
            <button onClick={textChangeHandler}>Change Text</button>
        </div>
    )
}

export default Greeting
