import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import PrivateRoute from "./auth/PrivateRoute";
import { AuthProvider } from "./auth/Auth";
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import DisplayData from './components/DisplayData.js';
import TeamMembers from './components/TeamMembers.js';

import Home from "./routes/Home";
import Login from "./routes/LogIn";
import SignUp from "./routes/SignUp";

function App() {
    return (
        <AuthProvider>
            <Router>
                <div>
                    <PrivateRoute exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
