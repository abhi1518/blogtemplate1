import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./register.scss";
import { useContext } from "react";

const Register = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };
  return (
    // <div className="register">
    //   <div className="card">
    //     <div className="left">
    //       <h1>Lama Social.</h1>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
    //         alias totam numquam ipsa exercitationem dignissimos, error nam,
    //         consequatur.
    //       </p>
    //       <span>Do you have an account?</span>
    //       <Link to="/login">
    //       <button>Login</button>
    //       </Link>
    //     </div>
    //     <div className="right">
    //       <h1>Register</h1>
    //       <form>
    //         <input type="text" placeholder="Username" />
    //         <input type="email" placeholder="Email" />
    //         <input type="password" placeholder="Password" />
    //         <input type="text" placeholder="Name" />
    //         <button>Register</button>
    //       </form>
    //     </div>
    //   </div>
    // </div>
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
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            
            <Link to="/profile/1">
              <button onClick={handleLogin}>Register</button>
            </Link>
            <span>Do you have an account?</span>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
