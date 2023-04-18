class Counter extends React.Component {
    constructor(props) {
        super(props); 
        this.HandlePlusOne = this.HandlePlusOne.bind(this);
        this.HandleMinusOne = this.HandleMinusOne.bind(this);
        this.HandleReset = this.HandleReset.bind(this);
        this.state = {
            count: 0
        }
    }
    HandlePlusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count +1
            }
        });
    }
    HandleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            }
        });
    }
    HandleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });

    }
    render() {

        return (
           <div>
           <h1>Count:{this.state.count}</h1>
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

