import React, { useRef, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase/useFirebase";

const Register = () => {
  // get form data
  // const { name} = useAuth();
  const { registration } = useFirebase();

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const userTypeRef = useRef();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const location = useLocation();
  const history = useHistory();
  const redirectUrl = location.state?.from || "/home";

  // handle registration

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    if (e.target.value.length < 6) {
      console.error("password must need to be at least 6 characters");
      return;
    } else {
      setPassword(e.target.value);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    registration(email, password, history);

    history.replace("/");
  };

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };
  return (
    <section>
      <div className="flex flex-col md:flex-row container mx-auto py-16">
        <div className="">
          <img
            className="w-100"
            src="https://i.ibb.co/SRDfDZL/sign-page-abstract-concept-illustration-335657-3875.webp"
            alt=""
          />
        </div>
        <div className="md:flex-row my-20">
          <h1 className="text-center font-medium text-3xl my-5">
            Open Your Acount Here
          </h1>
          <form action="" onSubmit={handleOnSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                onChange={handleNameChange}
                name="name"
                className="form-control border-2"
                placeholder="Full Name"
                onBlur={(e) => {
                  setUserName(e.target.value);
                }}
                required
              />{" "}
              <br />
              <br />
              <label>Enter Your Name</label>
            </div>
            <div className="form-floating mb-3 ">
              <input
                type="email"
                onChange={handleEmailChange}
                className="form-control border-2"
                placeholder="name@example.com"
                onBlur={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
              <br />
              <br />
              <label>Enter email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                onChange={handlePasswordChange}
                className="form-control border-2	"
                placeholder="Password"
                onBlur={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
              <br />
              <br />
              <label>Enter Password</label>
            </div>
            <div className="mt-5 text-center">
              <button
                role="button"
                aria-label="create my account"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
              >
                Register
              </button>{" "}
              <br />
              <br />
              <p>
                Have You Already Registered?<Link to="login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
