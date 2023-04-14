



class Counter extends React.Component {
    constructor(props) {
        super(props); 
        this.HandlePlusOne = this.HandlePlusOne.bind(this);
        this.HandleMinusOne = this.HandleMinusOne.bind(this);
        this.HandleReset = this.HandleReset.bind(this);
    }
    HandlePlusOne() {
        console.log('+1')
    }
    HandleMinusOne() {
        console.log('-1')
    }
    HandleReset() {
        console.log('reset')
    }
    render() {
        const HandlePlusOne = () => {
            return console.log('+1')
        };

        return (
            <div>
            <h1>Count: </h1>
            <button onClick={this.HandlePlusOne}>+1</button>
            <button onClick={this.HandleMinusOne}>-1</button>
            <button onClick={this.HandleReset}>reset</button>
            </div>
        )
    }
}
ReactDOM.render(<Counter />, document.getElementById('app'))



// let count = 0;
// //addition function
// const addOne = () =>{
//     count++;
// rendercounterApp();
// };
// //subtraction function
// const minusOne = () => {
//     count--;
//     rendercounterApp();
// };
// //reset function
// const reset = () => {
// count = count * 0;
// rendercounterApp();
// };

// //buttons / rerendering
// const rendercounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//                 <button onClick={addOne}>+1</button>
//                 <button onClick={minusOne}>-1</button>
//                 <button onClick={reset}>reset</button>
//             </div>
//     );

//    // ReactDOM.render(templateTwo, appRoot);      
// };

// rendercounterApp();

