import React, { Fragment, useEffect } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import PayButton from "../components/PayButton.jsx";
import Services from "../components/Services.jsx";
import {
  addToCart,
  cartFetch,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../store/cartSlice.js";
import {
  Act,
  Amount,
  CartContainer,
  CartItem,
  Checkout,
  Clear,
  Count,
  DI,
  DesktopCart,
  Empty,
  Info,
  Login,
  MiniCart,
  MobileCart,
  Price,
  Product,
  ProductQuantity,
  Shopping,
  Subtotal,
  Summary,
  Title,
  Titles,
  Total,
  TotalPrice,
} from "./Styles/StyledCart.js";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(cartFetch());
  }, [dispatch]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <Fragment>
      <CartContainer>
        <h2>Shopping Cart</h2>
        {cart?.cartItems.length === 0 ? (
          <Empty>
            <p>Your cart is currently empty</p>
            <Shopping>
              <Link to="/">
                <AiOutlineArrowLeft />
                <span>Start Shopping</span>
              </Link>
            </Shopping>
          </Empty>
        ) : (
          <Fragment>
            <DesktopCart>
              <Titles>
                <Title>Product</Title>
                <h3>Price</h3>
                <h3>Quantity</h3>
                <Total>Total</Total>
              </Titles>
              <div>
                {cart?.cartItems.map((cartItem) => (
                  <CartItem key={cartItem._id}>
                    <Product>
                      <img
                        src={cartItem.image.secure_url}
                        alt={cartItem.name}
                      />
                      <div>
                        <h3>{cartItem.name}</h3>
                        <button onClick={() => handleRemoveFromCart(cartItem)}>
                          Remove
                        </button>
                      </div>
                    </Product>
                    <Price>${cartItem.price}</Price>
                    <ProductQuantity>
                      <button onClick={() => handleDecreaseCart(cartItem)}>
                        -
                      </button>
                      <Count>{cartItem.cartQuantity}</Count>
                      <button onClick={() => handleAddToCart(cartItem)}>
                        +
                      </button>
                    </ProductQuantity>
                    <TotalPrice>
                      ${cartItem.price * cartItem.cartQuantity}
                    </TotalPrice>
                  </CartItem>
                ))}
              </div>
              <Summary>
                <Clear onClick={() => handleClearCart()}>Clear Cart</Clear>
                <Checkout>
                  <Subtotal>
                    <span>Subtotal</span>
                    <Amount>${cart.cartTotalAmount}</Amount>
                  </Subtotal>
                  <p>Taxes and shipping calculated at checkout</p>
                  {auth._id ? (
                    <PayButton cartItems={cart.cartItems} />
                  ) : (
                    <Login onClick={() => navigate("/login")}>
                      Login to check out
                    </Login>
                  )}

                  <Shopping>
                    <Link to="/">
                      <AiOutlineArrowLeft />
                      <span>Continue Shopping</span>
                    </Link>
                  </Shopping>
                </Checkout>
              </Summary>
            </DesktopCart>
            <MobileCart>
              {cart?.cartItems.map((cartItem) => (
                <MiniCart key={cartItem._id}>
                  <Info>
                    <img src={cartItem.image.secure_url} alt={cartItem.name} />
                    <div>
                      <h5>{cartItem.brand}</h5>
                      <h3>{cartItem.name}</h3>
                      <p>${cartItem.price}</p>
                    </div>
                  </Info>
                  <hr />
                  <Act>
                    <DI>
                      <span onClick={() => handleDecreaseCart(cartItem)}>
                        -
                      </span>
                      <p>{cartItem.cartQuantity}</p>
                      <span onClick={() => handleAddToCart(cartItem)}>+</span>
                    </DI>
                    <button onClick={() => handleRemoveFromCart(cartItem)}>
                      Remove
                    </button>
                  </Act>
                </MiniCart>
              ))}

              <Summary>
                <Clear onClick={() => handleClearCart()}>Clear Cart</Clear>
                <Checkout>
                  <Subtotal>
                    <span>Subtotal</span>
                    <Amount>${cart.cartTotalAmount}</Amount>
                  </Subtotal>
                  <p>Taxes and shipping calculated at checkout</p>
                  {auth._id ? (
                    <PayButton cartItems={cart.cartItems} />
                  ) : (
                    <Login onClick={() => navigate("/login")}>
                      Login to check out
                    </Login>
                  )}

                  <Shopping>
                    <Link to="/">
                      <AiOutlineArrowLeft />
                      <span>Continue Shopping</span>
                    </Link>
                  </Shopping>
                </Checkout>
              </Summary>
            </MobileCart>
          </Fragment>
        )}
      </CartContainer>
      <Services />
      <Footer />
    </Fragment>
  );
};

export default Cart;
