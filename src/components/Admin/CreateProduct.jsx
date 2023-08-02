import React, { useState } from "react";
import {
  ImagePreview,
  PrimaryButton,
  StyledCreateProduct,
  StyledForm,
} from "./StyledAdmin.js";
import { useDispatch } from "react-redux";
import { productCreate } from "../../store/productSlice.js";

const CreateProduct = () => {
  const [image, setImage] = useState({});
  const [productImg, setProductImg] = useState("");
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [gender, setGender] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      productCreate({
        image,
        brand,
        name,
        price,
        desc,
        gender,
      })
    );
  };

  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];
    TransformFile(file);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const TransformFile = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImg(reader.result);
      };
    } else {
      setProductImg("");
    }
  };

  return (
    <StyledCreateProduct>
      <StyledForm onSubmit={handleSubmit}>
        <h3>New Product</h3>
        <input
          id="imgUpload"
          type="file"
          accept="image/*"
          onChange={(e) => {
            handleProductImageUpload(e);
            handleImageChange(e);
          }}
          required
        />
        <select onChange={(e) => setBrand(e.target.value)} required>
          <option value="">Brand</option>
          <option value="adidas">Adidas</option>
          <option value="nike">Nike</option>
          <option value="new balance">New Balance</option>
          <option value="under armour">Under Armour</option>
          <option value="vans">Vans</option>
          <option value="kappa">Kappa</option>
          <option value="reebok">Reebok</option>
          <option value="puma">Puma</option>
          <option value="adidas originals">Adidas Originals</option>
          <option value="converse">Converse</option>
          <option value="air jordan">Air Jordan</option>
        </select>
        <select onChange={(e) => setGender(e.target.value)}>
          <option value="">Gender</option>
          <option value="male">Men</option>
          <option value="female">Women</option>
        </select>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setDesc(e.target.value)}
        />
        <PrimaryButton type="submit">Submit</PrimaryButton>
      </StyledForm>
      {productImg && (
        <ImagePreview>
          <img src={productImg} alt={name} />
        </ImagePreview>
      )}
    </StyledCreateProduct>
  );
};

export default CreateProduct;
