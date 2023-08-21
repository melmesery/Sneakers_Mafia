import React, { useEffect, useState } from "react";
import {
  TiChevronRight,
  TiHeartOutline,
  TiShoppingCart,
  TiThLarge,
  TiUser,
} from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../store/authSlice.js";
import { wishlistFetch } from "../store/wishlistSlice.js";
import {
  Go,
  Logo,
  Logout,
  MenuBtn,
  NavbarContainer,
  NavbarIcon,
  NavbarIcons,
  NavbarQuantity,
  Profile,
  ToggleMenu,
} from "./Styling.js";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [toggle, setToggle] = useState(false);
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const { quantity } = useSelector((state) => state.wishlist);
  const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setIsAdmin(
      auth.role === "Admin" ||
        auth.role === "Super Admin" ||
        auth.role === "Tester"
    );
  }, [auth.role]);

  useEffect(() => {
    if (auth._id) {
      dispatch(wishlistFetch());
    }
  }, [dispatch, auth]);

  const handleMenuBtn = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (showMenu) {
      setToggle(true);
    }
  }, [showMenu]);

  const handleWindowClick = () => {
    setShowMenu(false);
    setToggle(false);
  };

  useEffect(() => {
    if (toggle && showMenu) {
      window.addEventListener("click", handleWindowClick);
    } else {
      window.removeEventListener("click", handleWindowClick);
    }
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, [toggle, showMenu]);

  return (
    <nav>
      <NavbarContainer>
        <Logo>
          <Link to="/">Sneakers Mafia </Link>
        </Logo>

        {showMenu && (
          <ToggleMenu onClick={handleMenuBtn}>
            <Go>
              <span>
                <TiChevronRight />
              </span>
              <Link to="/">Home</Link>
            </Go>
            <Go>
              <span>
                <TiChevronRight />
              </span>
              <Link to="/men">Men</Link>
            </Go>
            <Go>
              <span>
                <TiChevronRight />
              </span>
              <Link to="/women">Women</Link>
            </Go>
            {auth._id && isAdmin ? (
              <Go>
                <span>
                  <TiChevronRight />
                </span>
                <Link to="/admin/summary">Admin</Link>
              </Go>
            ) : null}
            {auth._id && (
              <Logout
                onClick={() => {
                  dispatch(logoutUser(null));
                  navigate("/");
                }}
              >
                Logout
              </Logout>
            )}
            {!auth._id && (
              <Go>
                <span>
                  <TiChevronRight />
                </span>
                <Link to="/login">Login</Link>
              </Go>
            )}
            {!auth._id && (
              <Go>
                <span>
                  <TiChevronRight />
                </span>
                <Link to="register">Register</Link>
              </Go>
            )}
          </ToggleMenu>
        )}

        <NavbarIcons>
          {auth._id && (
            <Link to={`/user/${auth._id}`}>
              <Profile>
                <TiUser />
              </Profile>
            </Link>
          )}

          <Link to="/cart">
            <NavbarIcon>
              <span>
                <TiShoppingCart />
              </span>
              {!cart.cartTotalQuantity ? null : (
                <NavbarQuantity>
                  <span>{cart.cartTotalQuantity}</span>
                </NavbarQuantity>
              )}
            </NavbarIcon>
          </Link>

          {auth._id ? (
            <Link to="/wishlist">
              <NavbarIcon>
                <span>
                  <TiHeartOutline />
                </span>
                {!quantity ? null : <NavbarQuantity>{quantity}</NavbarQuantity>}
              </NavbarIcon>
            </Link>
          ) : null}

          <MenuBtn onClick={handleMenuBtn}>
            <TiThLarge />
          </MenuBtn>
        </NavbarIcons>
      </NavbarContainer>
    </nav>
  );
};

export default Navbar;
