let visibility = false;

const ontoggle = () => {
visibility = !visibility;
render();};



const render = () => {
const jsx = (
<div>
    <h1>VISIBILTY TOGGLE</h1>
    <button onClick={ontoggle}>{visibility ? 'hide details' : 'show details' }</button>
    {visibility && <p>These are some details</p>}
</div>)
ReactDOM.render(jsx, document.getElementById('app'))
};
render();