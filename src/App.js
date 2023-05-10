//state lesss components 


class IndesicionApp extends React.Component {
    constructor(props){
        super(props);
        this.HandleDeleteOptions = this.HandleDeleteOptions.bind(this)
        this.HandlePick = this.HandlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            options: props.options
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
    handleAddOption(option) {
        if (!option) {
            return 'enter valid value'
        } 
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        })
    }
    render(){

       
        const subtitle = 'put your life in hands of computer';

        return(
            <div>
          <Header  subtitle={subtitle}/>
          <Action hasOptions={this.state.options.length > 0}
          HandlePick = {this.HandlePick}
          />
          <Options options={this.state.options}
          HandleDeleteOptions={this.HandleDeleteOptions}
          />
          <AddOption 
          handleAddOption = {this.handleAddOption}
          />
            </div>
        );
    }
    
}   

IndesicionApp.defaultProps = {
    options: []
}
const Header = (props) => {
    return (
        <div>
        <h1>{props.title}  </h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

const Action = (props) => {
    return (
        <div>
        <button
         onClick={props.HandlePick}
         disabled={!props.hasOptions}
         >
        What should i do?
        </button>
        </div>
    )
}
Header.defaultProps = {
    title: 'Indecision'
}

const Options = (props) =>{
    return (
        <div>
        <button onClick={props.HandleDeleteOptions}>RemovAll</button>
       {props.options.map((option) => <Option key={option} optionText={option}/>)}
        </div>
    )
}


const Option = (props) => {
    return(
        <div>
       option : {props.optionText}
        </div>
     )
    }


class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e){
        e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option)
    
    this.setState(() => {
        return {error};
    })
    }
    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
            <input type="text" name="option"></input>
            <button>Add Option</button>
        </form>
            </div>
        )
    }
} 


ReactDOM.render(<IndesicionApp />, document.getElementById('app'))
