
let visibilty = false;
const toggle = () => {
    visibilty = !visibilty;
    render();
}
const render = () => {
    const jsx = (
<div>
<h1>VISIBILTY TOGGLE</h1>
<button onClick={toggle}>{visibilty ? 'hide detail' : 'show details'}</button>
<br></br>
{visibilty && (
<div>some details</div>
)}
</div>
    )
    ReactDOM.render(jsx, document.getElementById('app'))
}
render();


