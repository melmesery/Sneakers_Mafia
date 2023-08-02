import React, { useEffect, useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, cartCreate } from "../store/cartSlice.js";
import { wishlistCreate } from "../store/wishlistSlice.js";
import { Details, Price, Product, ProductBrand, Wishlist } from "./Styling.js";

const ProductCard = ({ product }) => {
  const [clicked, setClicked] = useState(false);
  const auth = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartCreate(cart.cartItems));
  }, [dispatch, cart.cartItems]);

  const handleAddToCart = (product, cartItems) => {
    dispatch(cartCreate(cartItems));
    dispatch(addToCart(product));
  };

  const handleAddToWishlist = (id) => {
    dispatch(wishlistCreate(id));
    setClicked(true);
  };

  return (
    <Product>
      <Link to={`/product/${product._id}`} target="_blank">
        <img src={product.image.secure_url} alt={product.name} />
      </Link>
      <Details>
        <ProductBrand>
          <h6>{product.brand}</h6>
          {auth._id ? (
            <Wishlist onClick={() => handleAddToWishlist(product._id)}>
              {clicked ? <FcLike /> : <FcLikePlaceholder />}
            </Wishlist>
          ) : null}
        </ProductBrand>
        <Link to={`/product/${product._id}`} target="_blank">
          <h5>{product.name}</h5>
        </Link>
        <Price>${product.price}</Price>
        <button onClick={() => handleAddToCart(product, cart.cartItems)}>
          Add To Cart
        </button>
      </Details>
    </Product>
  );
};

export default ProductCard;
