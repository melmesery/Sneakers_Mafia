import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productEdit } from "../../store/productSlice.js";
import {
  Edit,
  ImagePreview,
  PrimaryButton,
  StyledEditProduct,
  StyledForm,
} from "./StyledAdmin.js";

function EditProduct({ id }) {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState({});
  const [productImg, setProductImg] = useState("");
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [gender, setGender] = useState("");

  const { items } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      productEdit({
        id,
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

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleClickOpen = () => {
    setOpen(true);
    let selected = items.filter((item) => item._id === id);
    selected = selected[0];
    setName(selected.name);
    setPrice(selected.price);
    setGender(selected.gender);
    setBrand(selected.brand);
    setDesc(selected.desc);
    setImage(selected.image);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="m-0">
      <Edit variant="outlined" onClick={handleClickOpen}>
        Edit
      </Edit>
      <Dialog
        className="dialog"
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={"md"}
      >
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent className="dialog-content">
          <StyledEditProduct>
            <StyledForm onSubmit={handleSubmit}>
              <input
                id="imgUpload"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  handleProductImageUpload(e);
                  handleImageChange(e);
                }}
              />
              <select
                onChange={(e) => setBrand(e.target.value)}
                value={brand}
                required
              >
                <option>Brand</option>
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
              <select
                onChange={(e) => setGender(e.target.value)}
                value={gender}
                required
              >
                <option>Gender</option>
                <option value="male">Men</option>
                <option value="female">Women</option>
              </select>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                required
              />
              <PrimaryButton type="submit">Edit</PrimaryButton>
            </StyledForm>
            {productImg || image ? (
              <ImagePreview>
                <img src={productImg || image.secure_url} alt={name} />
              </ImagePreview>
            ) : null}
          </StyledEditProduct>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditProduct;
