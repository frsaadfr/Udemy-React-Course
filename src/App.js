
class IndesicionApp extends React.Component {
    constructor(props){
        super(props);
        this.HandleDeleteOptions = this.HandleDeleteOptions.bind(this)
        this.HandlePick = this.HandlePick.bind(this)
        this.state = {
            options: ['thing 1', ' things 2 ', ' thing 3']
        }
    }
    HandleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }
    HandlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    render(){

        const title = 'Indesicion';
        const subtitle = 'put your life in hands of computer';

        return(
            <div>
          <Header title={title} subtitle={subtitle}/>
          <Action hasOptions={this.state.options.length > 0}
          HandlePick = {this.HandlePick}
          />
          <Options options={this.state.options}
          HandleDeleteOptions={this.HandleDeleteOptions}
          />
          <AddOption />
            </div>
        );
    }
    
}

class Header extends React.Component {
render(){
   
    return (
        <div>
        <h1>{this.props.title}  </h1>
        <h2>{this.props.subtitle}</h2>
        </div>
    )
}
}

class Action extends React.Component {
    render() {
        return (
            <div>
            <button
             onClick={this.props.HandlePick}
             disabled={!this.props.hasOptions}
             >
            What should i do?
            </button>
            </div>
        )
    }
}
// 

class Options extends React.Component {

    render(){
        return (
            <div>
            <button onClick={this.props.HandleDeleteOptions}>RemovAll</button>
           {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
            </div>
        )
    }
}

class Option extends React.Component{
render() {
    return(
        <div>
       option : {this.props.optionText}
        </div>
     )
    }
}
// option - option component here
class AddOption extends React.Component {
    handleAddOption(e){
        e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if(option){
        alert(option)
    } 
    }
    render(){
        return (
            <div>
            <form onSubmit={this.handleAddOption}>
            <input type="text" name="option"></input>
            <button>Add Option</button>
        </form>
            </div>
        )
    }
} 
// clas option list - option component here 
// addoption component - form - add option here 


ReactDOM.render(<IndesicionApp />, document.getElementById('app'))