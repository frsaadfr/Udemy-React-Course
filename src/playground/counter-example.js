let count = 0;
//addition function
const addOne = () =>{
    count++;
rendercounterApp();
};
//subtraction function
const minusOne = () => {
    count--;
    rendercounterApp();
};
//reset function
const reset = () => {
count = count * 0;
rendercounterApp();
};

//buttons / rerendering
const rendercounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
                <button onClick={addOne}>+1</button>
                <button onClick={minusOne}>-1</button>
                <button onClick={reset}>reset</button>
            </div>
    );

   // ReactDOM.render(templateTwo, appRoot);      
};

rendercounterApp();