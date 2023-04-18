class Visibile extends React.Component {
    constructor(props){
        super(props);
        this.onToggle = this.onToggle.bind(this);
       this.state = {

        Visibility: false
       }
    }
    
onToggle() {
    this.setState((prevState) =>{
        return {
           Visibility: !prevState.Visibility
    }
    })
}
    render(){
       return (
         <div>
        <h1>visibility toggle</h1>
        <button onClick={this.onToggle}>{this.state.Visibility ? 'hide' : 'show'}</button>
        {this.state.Visibility && <p>some details</p>}
        </div>
    )}
}
ReactDOM.render(<Visibile />, document.getElementById('app'))
// let visibility = false;

// const ontoggle = () => {
// visibility = !visibility;
// render();};



// const render = () => {
// const jsx = (
// <div>
//     <h1>VISIBILTY TOGGLE</h1>
//     <button onClick={ontoggle}>{visibility ? 'hide details' : 'show details' }</button>
//     {visibility && <p>These are some details</p>}
// </div>)
// ReactDOM.render(jsx, document.getElementById('app'))
// };
// render();