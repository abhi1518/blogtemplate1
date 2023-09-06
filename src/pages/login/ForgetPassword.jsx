import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Reset = () => {
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
          <h1>Reset Password</h1>
          <form>
            <input type="text" placeholder="Email" />
            {/* <input type="password" placeholder="Password" /> */}
           
            <Link to="/profile/1">
              <button onClick={handleLogin}>Proceed</button>
            </Link>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reset;
