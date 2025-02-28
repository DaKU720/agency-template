import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { HelmetProvider } from "react-helmet-async";
import { PublicRoute } from './router/PublicRoute/PublicRoute';

import PreviewLayout from './layouts/PreviewLayout/PreviewLayout';

import './assets/scss/App.scss';

const App = () => {
    return (
        <HelmetProvider>
            <Router basename="/">
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/homepage" />
                    </Route>
                    <PublicRoute path="/homepage" component={PreviewLayout} />
                </Switch>
            </Router>
        </HelmetProvider>
    );
};

export default App;
