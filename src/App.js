class Header extends React.Component {
render(){
    return (
        <div>
        <h1>Indesicion</h1>
        <h2>put your lifes in the hands of a computer</h2>
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
class Options extends React.Component {
    render(){
        return (
            <div>
           Options Component here 
            </div>
        )
    }
}
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
const jsx = (
    <div>
    <Header />
    <Action />
    <Options/>
    <AddOption/>
    </div>
)

ReactDOM.render(jsx, document.getElementById('app'))