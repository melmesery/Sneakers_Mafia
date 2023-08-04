import React, { useEffect, useState } from "react";
import { BiError } from "react-icons/bi";
import { GrUser, GrUserAdmin } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../store/authSlice.js";
import {
  Admin,
  Error,
  ErrorIcon,
  ErrorMessage,
  Form,
  StyledForm,
} from "./StyledAuth.js";

const Register = () => {
  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    cPassword: "",
    key: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth._id) {
      navigate("/login");
    }
  }, [auth._id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(user));
  };

  const handleAdminAuth = () => {
    setAdmin(!admin);
  };

  return (
    <Form>
      <div>
        {auth.loginStatus === "rejected" ? (
          <Error>
            <ErrorMessage>
              <ErrorIcon>
                <BiError />
              </ErrorIcon>
              <p>There was a problem</p>
            </ErrorMessage>
            <p>{auth.loginError}</p>
          </Error>
        ) : null}
        <StyledForm onSubmit={handleSubmit}>
          <Admin onClick={handleAdminAuth}>
            {!admin ? (
              <GrUserAdmin title="sign up as admin" />
            ) : (
              <GrUser title="sign up as user" />
            )}
          </Admin>
          {admin ? <h2>Admin</h2> : <h2>Register</h2>}

          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setUser({ ...user, userName: e.target.value })}
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setUser({ ...user, cPassword: e.target.value })}
          />
          {admin ? (
            <input
              type="text"
              placeholder="Admin Key"
              onChange={(e) => setUser({ ...user, key: e.target.value })}
            />
          ) : null}

          <button>
            {auth.registerStatus === "Pending" ? "Submitting..." : "Register"}
          </button>
        </StyledForm>
      </div>
    </Form>
  );
};

export default Register;
