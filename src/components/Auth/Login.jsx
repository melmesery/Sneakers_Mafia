import React, { useEffect, useState } from "react";
import { BiError } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../store/authSlice.js";
import {
  Error,
  ErrorIcon,
  ErrorMessage,
  Form,
  StyledForm,
} from "./StyledAuth.js";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth._id) {
      navigate("/");
    }
  }, [auth._id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(user));
  };

  return (
    <Form>
      <div>
        {auth.loginStatus === "rejected" && (
          <Error>
            <ErrorMessage>
              <ErrorIcon>
                <BiError />
              </ErrorIcon>
              <p>There was a problem</p>
            </ErrorMessage>
            <p>{auth.loginError}</p>
          </Error>
        )}

        <StyledForm onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button>
            {auth.loginStatus === "Pending" ? "Submitting..." : "Login"}
          </button>
        </StyledForm>
      </div>
    </Form>
  );
};

export default Login;
