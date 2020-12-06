import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/");
            })
            .catch((error) => alert(error.message));
    };

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    history.push("/");
                }
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://i.pinimg.com/originals/ff/c3/d3/ffc3d3f7e25c28ea2d3fe42231736f00.png"
                    alt="logo"
                />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        onClick={signIn}
                        className="login__signInButton"
                    >
                        Sign In
                    </button>
                </form>
                <button onClick={register} className="login__registerButton">
                    Create your Account
                </button>
            </div>
        </div>
    );
}

export default Login;
