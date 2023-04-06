console.log('APP.js is running')
            // challenge code 

// only render subtitle and p tag) if subtitle exists 
//render new p tag if options.legnth > 0 "here are your options "no options"

const app = {
    title : 'Indesicion App',
    subtitle : 'Put your life in the hands of a computer',
    Options :['one','two' ]

} 

 const template = 
<div>
    <h1>{app.title}</h1>
    <p>{app.subtitle && app.subtitle }</p>
    <p>{app.Options.length > 0 ? "here are your optons" : "no Options"}</p>
<ol>
<li>This is some Item</li>
<li>This is some Item</li>
</ol>
    
</div>; 


                        //work code
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

const appRoot = document.getElementById('app');

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

    ReactDOM.render(templateTwo, appRoot);      
};

rendercounterApp();