import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HEADERS, URL } from "../API.js";
import Footer from "../components/Footer.jsx";
import Services from "../components/Services.jsx";
import Spinner from "../components/Spinner.jsx";
import {
  Admin,
  Customer,
  Password,
  ProfileContainer,
  StyledProfile,
  Update,
} from "./Styles/StyledProfile.js";

const Profile = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [updatePassword, setUpdatePassword] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`${URL}/user/${id}`, {
          headers: HEADERS,
        });
        setUserName(data.user.userName);
        setEmail(data.user.email);
        setRole(data.user.role);
      } catch (error) {
        return error;
      }
    };
    fetchUser();
    setLoading(false);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `${URL}/user/${id}`,
        {
          userName,
          oldPassword,
          newPassword,
        },
        {
          headers: HEADERS,
        }
      );
      return data.updatedUser;
    } catch (error) {
      return error;
    }
  };

  const handleChangePassword = () => {
    setUpdatePassword(!updatePassword);
  };

  return (
    <Fragment>
      <StyledProfile>
        <ProfileContainer>
          {loading ? (
            <Spinner />
          ) : (
            <form onSubmit={handleSubmit}>
              <h3>Profile</h3>
              {role === "Admin" || "Super Admin" ? (
                <Admin>Admin</Admin>
              ) : (
                <Customer>Customer</Customer>
              )}
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="userName"
                value={userName || null}
                onChange={(e) => setUserName(e.target.value)}
              />
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                value={email || null}
                disabled
                onChange={(e) => setEmail({ ...user, email: e.target.value })}
              />
              {updatePassword && (
                <Fragment>
                  <div>
                    <label htmlFor="password">Old Password:</label>
                    <br />
                    <input
                      type="password"
                      id="oldPassword"
                      onChange={(e) => setOldPassword(e.target.value)}
                    />
                    <br />
                    <label htmlFor="password">New Password:</label>
                    <br />
                    <input
                      type="password"
                      id="newPassword"
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                </Fragment>
              )}
              <Update>Update</Update>
            </form>
          )}
          <Password onClick={handleChangePassword}>
            {!updatePassword ? "Update Password" : "Cancel"}
          </Password>
        </ProfileContainer>
      </StyledProfile>
      <Services />
      <Footer />
    </Fragment>
  );
};

export default Profile;
