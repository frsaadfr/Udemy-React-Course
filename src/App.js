console.log('APP.js is running')
            // challenge code 

// only render subtitle and p tag) if subtitle exists 
//render new p tag if options.legnth > 0 "here are your options "no options"

const app = {
    title : 'Indesicion App',
    subtitle : 'Put your life in the hands of a computer',
    Options : []

};

const onFormSubmit = (e) => {
e.preventDefault();
const option = e.target.elements.option.value;

if (option) {
    app.Options.push(option);
    e.target.elements.option.value = '';
    render();
}
};


const wipe = () => {
    app.Options = [];
    render();
};

const onMakeDecision = () => {
const randomNum = Math.floor(Math.random() * app.Options.length);
const option = app.Options[randomNum];
alert(option);
console.log(randomNum)
};

const numbers = [10, 100, 101]

const appRoot = document.getElementById('app');

const render= () => {
    const template = 
<div>
    <h1>{app.title}</h1>
    <p>{app.subtitle && app.subtitle }</p>
    <p>{app.Options.length > 0 ? "here are your optons" : "no Options"}</p>
    <button disabled={app.Options.length === 0} onClick={onMakeDecision}>what should i do?</button>
    <button onClick={wipe}>Remove All</button>
    

<ol>
{
    app.Options.map((option) => <li key={option}>{option}</li>)
}
</ol>  
<form onSubmit={onFormSubmit}>
    <input type="text" name="option"></input>
    <button>Add Option</button>
</form>
</div>; 
ReactDOM.render(template, appRoot)
}

render();