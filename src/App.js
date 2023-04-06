console.log('APP.js is running')
            // challenge code 

// only render subtitle and p tag) if subtitle exists 
//render new p tag if options.legnth > 0 "here are your options "no options"

const app = {
    title : 'Indesicion App',
    subtitle : 'Put your life in the hands of a computer',
    Options :[]

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

 

const appRoot = document.getElementById('app');

const wipe = () => {
    app.Options = [];
    render();
}

const render= () => {
    const template = 
<div>
    <h1>{app.title}</h1>
    <p>{app.subtitle && app.subtitle }</p>
    <p>{app.Options.length > 0 ? "here are your optons" : "no Options"}</p>
    <p>{app.Options.length}</p>
    <button onClick={wipe}>Remove All</button>
<ol>
<li>This is some Item</li>
<li>This is some Item</li>
</ol>  
<form onSubmit={onFormSubmit}>
    <input type="text" name="option"></input>
    <button>Add Option</button>
</form>
</div>; 
ReactDOM.render(template, appRoot)
}

render();