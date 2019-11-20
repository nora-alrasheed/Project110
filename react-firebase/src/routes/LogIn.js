import React, {useContext} from "react";
import {Redirect} from "react-router-dom";
import '../App.css';
import {AuthContext} from "../auth/Auth";
import db , { provider, provider2 } from "../base"

const Login = ({history}) => {
    const handleLoginWithFb = ( ) => {
        try{
            db
                .auth()
                .signInWithPopup(provider);
            history.push("/");
        } catch (error){
            alert(error);
        }
    }

    const handleLoginWithGoogle = () => {
        try{
            db
                .auth()
                .signInWithPopup(provider2);
            history.push("/");
        } catch (error){
            alert(error);
        }
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const {email, password } = event.target.elements;

        try{
            db
                .aith()
                .signInWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }

    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to="/" />;
    }

    const redirectSignUp = () => {
        history.push("/signup")
    }

    return(
        <div className="centered">
            <div className="row">
            <h1>Log In</h1>
            <form onSubmit={handleLogin} >
                <label>
                    Email
                    <input name="email" type="email" placeholder="Email" />
                </label>
                <label>
                    Password
                    <input name="password" type="password" placeholder="Password" />
                </label>
                <button type="submit"> Log In</button>
            </form>
            <button onClick={redirectSignUp}> Sign Up </button>
            <button onClick={handleLoginWithGoogle}>Log In with Google</button>
            <button onClick={handleLoginWithFb}>Log In with Facebook</button>
            </div>
        </div>
    );
};

export default Login;