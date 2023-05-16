//state less components 


class IndesicionApp extends React.Component {
    constructor(props){
        super(props);
        this.HandleDeleteOptions = this.HandleDeleteOptions.bind(this)
        this.HandlePick = this.HandlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.HandleDeleteOption = this.HandleDeleteOption.bind(this);
        this.state = {
            options: []
        }
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)

            if(options){
            this.setState(() => ({ options }))

            }
        }
        catch (e){
        
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length){
           const json = JSON.stringify(this.state.options)
           localStorage.setItem('options',json);
            console.log('saving data');
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    HandleDeleteOptions() {

        this.setState(() => ({options:[]}))
    }
    HandleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }

    HandlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option) {
        if (!option) {
            return 'enter valid value'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
          }
        this.setState((prevState) => ({options: prevState.options.concat(option)}))
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
          HandleDeleteOption={this.HandleDeleteOption}
          />
          <AddOption 
          handleAddOption = {this.handleAddOption}
          />
            </div>
        );
    }
    
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
        {props.options.length === 0 && <p>please add an option to get started</p>}
        {props.options.map((option) => <Option
         key={option} 
         optionText={option} 
         HandleDeleteOption={props.HandleDeleteOption}
         
         /> )}
        </div>
    )
}


const Option = (props) => {
    return(
        <div>
       option : {props.optionText}
       <button onClick={(e) => {
        props.HandleDeleteOption(props.optionText)
       }}
       
       >
       haha
       </button>
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
    
    this.setState(() => ({error}));
        if (!error){
            e.target.elements.option.value = '';
        }

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
