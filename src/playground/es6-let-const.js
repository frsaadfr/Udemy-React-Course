var nameVar ='saad'
var nameVar = "mikke"
console.log('nameVar', nameVar)
 
let nameLet = 'jen'
console.log('nameLet',nameLet)

const nameConst = 'anas'
console.log('nameConst', nameConst)

//block scoping

const fullName = 'Andrew tate'
let firstName ;
if (fullName){
     firstName = fullName.split(' ')[0]
    console.log (firstName)
}
console.log(firstName)