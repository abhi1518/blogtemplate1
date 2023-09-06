import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          {/* <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p> */}
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <Link to="/forget-password" className="text-right" style={{textAlign:"right"}}> Forget Password
              {/* <button onClick={handleLogin}>Login</button> */}
            </Link>
            <Link to="/profile/1">
              <button onClick={handleLogin}>Login</button>
            </Link>
            <span>Don't you have an account?</span>
            <Link to="/register">
              <button>Register</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
