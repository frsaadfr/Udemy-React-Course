
import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashBoardPage = () => (
    <div>
    this from my dashboard component
    </div>
);

const AddExpensePage = () => (
    <div>
    this from my addexpense component
    </div>
)
const EditExpensePage = () => (
    <div>
    this from my EditExpensePage component
    </div>
)
const HelpPage = () => (
    <div>
    this from my HelpPage component
    </div>
)
const NotFoundPage = () => (
    <div>
    404
    </div>
)

const routes = (
    <BrowserRouter>
    <Switch>
        
        <Route path="/" component={ExpenseDashBoardPage} exact={true}/>
         <Route path="/create" component={AddExpensePage}/>
         <Route path="/editExpense" component={EditExpensePage} />
         <Route path="/Help" component={HelpPage} />
         <Route component={NotFoundPage} />
    </Switch>
     

    </BrowserRouter>
);
ReactDOM.render(routes, document.getElementById('app'));

