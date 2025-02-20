import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CalculatorPage from './pages/CalculatorPage';
import SavedCalculationsPage from './pages/SavedCalculationsPage';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/calculator" component={CalculatorPage} />
        <Route path="/saved" component={SavedCalculationsPage} />
      </Switch>
    </Router>
  );
}

export default App;
