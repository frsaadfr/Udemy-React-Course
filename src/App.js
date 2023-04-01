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

const user = {
    name : 'saad',
    age : 18,
    location : 'philedelphia'
};


function getlocation (location) {
    if (location){
        return <p>Location : {location}</p>
    }
}


const templateTwo = 
<div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {user.age >= 18 && <p>Age : {user.age}</p>}
    {getlocation(user.location)}
</div> 



const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);