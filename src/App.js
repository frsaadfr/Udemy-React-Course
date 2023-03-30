console.log('APP.js is runninng')

// Real Code 

 var template = 
<div>
    <h1>Indecision App</h1>
    <p>This is some info</p>

    <ol>
        <li>This is some list item</li>
    </ol>
</div>; 


                        //challenge code

                        // *completed :]

/*
var templateTwo = 
<div>
    <h1>Saad</h1>
    <p>16</p>
    <p>Location:Pakistan</p>
</div> */



var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);