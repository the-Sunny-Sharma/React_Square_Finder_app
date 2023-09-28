import { useState } from 'react';

function Square(){

    const [ num, setNum ] = useState("");
    const [ msg, setMsg ] = useState("");

    const hNum = (event) => { setNum(event.target.value); }

    const find = (event) => {
        event.preventDefault();

        if( num == ""){
            alert("Please enter a number");
            setMsg('');
            return;
        }
        let n = parseFloat(num);
        let r = Math.pow(n, 2).toFixed(2);
        let ans = `Square of ${n} is = ${r}`;
        setMsg(ans);
    }

    const clearText = (event) => {
        event.preventDefault();
        setNum('');
        setMsg('');
    }

    return(
        <>
            <h1>Finding Square Application - Using REACT</h1>
            <p>A project by Kamal Sir and Sunny Sharma.</p>
            <div className="container">
                <form onSubmit={ find }>
                    <input className="text" type="number" step="any" placeholder="Enter the number here..." onChange={ hNum } value={ num }/>
                    <div className="container-btn">
                        <input className="button" type="submit" value="Find Square" />
                        <button className="button clearBtn" onClick={ clearText }>Clear</button>
                    </div>
                </form>
            </div>
            <p className="msg"> <span>Answer will be Displayed here:</span>{msg} </p>
        </>
    );
}

export default Square;