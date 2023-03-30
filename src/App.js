console.log('APP.js is running')
            // challenge 2 
            // comppleted :}


var user = {
    title : 'Indesicion App',
    subtitle : 'Put your life in the hands of a computer'

}

 var template = 
<div>
    <h1>{user.title}</h1>
    <p>{user.subtitle}</p>
<ol>
<li>This is some Item</li>
<li>This is some Item</li>
</ol>
    
</div>; 


                        //challenge 1

                        // *completed :]
var user = {
    name : 'saad',
    age : 16,
    location : 'karachi'
};

var userName = "ali"
var userAge = 27
var userLocation = 'London'
var templateTwo = 
<div>
    <h1>{user.name}</h1>
    <p>Age : {user.age}</p>
    <p>Location: {user.location}</p>
</div> 



var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);