import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import Logo from './LogoComponent2'

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="background">
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
        <section className="home" id="home">
        <div className="image">
        <img src="assets/logo1.png" alt=""/>
    </div>
    </section>
      <h3 className="loginLogo"><Logo className="LoginTextLogo"/></h3>
          <div className="loginDesc">
            Connectes toi avec tes amis et plein d'autres monde sur PastalaVista.
          </div>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <div className="loginForgot">Mot de passe oublié?</div>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
      </div>
      <span><img src="assets/pate1.png" width="30%" alt=""/></span>
<span><img src="assets/pate2.png" width="30%" alt=""/></span>
<span><img src="assets/pate3.png" width="30%" alt=""/></span>
<span><img src="assets/pate1.png" width="30%" alt=""/></span>
<span><img src="assets/pate3.png" width="30%" alt=""/></span>
<span><img src="assets/pate5.png" width="30%" alt=""/></span>
<span><img src="assets/pate5.png" width="30%" alt=""/></span>
<span><img src="assets/pate2.png" width="30%" alt=""/></span>
<span><img src="assets/pate3.png" width="200%" alt=""/></span>
<span><img src="assets/pate4.png" width="45%" alt=""/></span>
<span><img src="assets/pate1.png" width="30%" alt=""/></span>
<span><img src="assets/pate5.png" width="60%" alt=""/></span>
<span><img src="assets/pate2.png" width="70%" alt=""/></span>
<span><img src="assets/pate4.png" width="45%" alt=""/></span>
<span><img src="assets/pate3.png" width="30%" alt=""/></span>
<span><img src="assets/pate2.png" width="30%" alt=""/></span>
<span><img src="assets/pate5.png" width="30%" alt=""/></span>
<span><img src="assets/pate1.png" width="30%" alt=""/></span>
<span><img src="assets/pate1.png" width="70%" alt=""/></span>
<span><img src="assets/pate2.png" width="30%" alt=""/></span>
</div>
  );
}
