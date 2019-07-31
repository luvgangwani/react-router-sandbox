import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import { routes } from '../routeConfig';

const App = () => {
    return (
        <Router>
            <Navigation />
            <Switch>
                {
                    routes.map((route, index) => 
                        <Route key={index} {...route} />
                    )
                }
                {/* <Route exact path="/" render={() => <Home content="This is the home page"/>} />
                <Route exact path="/about-us" render={() => <AboutUs content="This is the about us page"/>} />
                <Route exact path="/testing-react-router" render={() => <TestReactRoute content="This is the test react router page"/>} />
                <Route exact path="/contact-us" render={() => <ContactUs content="This is the contact us page"/>} />
                <Route component={NotFound} /> */}
            </Switch>
        </Router>
    )
}

export default App;
