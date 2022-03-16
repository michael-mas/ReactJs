import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useHistory } from "react-router";
import Logo from './LogoComponent'

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="background">
    <div className="login">
       
      <div className="loginWrapper">
        <div className="loginLeft">
        <section class="home" id="home">
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
              placeholder="Pseudo"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Mot de passe"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Confirmer mot de passe"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
            <button className="loginButton" type="submit">
              Inscription
            </button>
            <button className="loginRegisterButton">Connexion</button>
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
