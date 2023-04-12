class IndesicionApp extends React.Component {
    render(){

        const title = 'Indesicion';
        const subtitle = 'put your life in hands of computer';
        const options = ['thing 1', ' things 2 ', ' thing 3',];
        return(
            <div>
          <Header title={title} subtitle={subtitle}/>
          <Action />
          <Options options={options}/>
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
            <button>What should i do?</button>
            </div>
        )
    }
}
// 

class Options extends React.Component {
    render(){
        return (
            <div>
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
    render(){
        return (
            <div>
           Add Option Componrnt
            </div>
        )
    }
} 
// clas option list - option component here 
// addoption component - form - add option here 


ReactDOM.render(<IndesicionApp />, document.getElementById('app'))