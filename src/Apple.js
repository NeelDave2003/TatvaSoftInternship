import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Avatar, Popover } from "@mui/material";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Formik } from "formik";
import * as Yup from "yup";

export const Apple = () => {
  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const Navigate = useNavigate();

  useEffect(() => {
    // console.log("The new value of Name : ", name);
    // return () => {
    //   console.log("The old value of Name : ", name);
    // };
  }, []);

  const validationSchema = Yup.object().shape({
    fname: Yup.string().min(3, "Name Must Contain Atleast 3 Letters."),
    lname: Yup.string().min(3, "Name Must Contain Atleast 3 Letters."),
    email: Yup.string().email("Please enter a valid email address"),
    password: Yup.string().min(3, "Password Must Contain Atleast 3 Characters"),
    cpassword: Yup.string().min(
      3,
      "Password Must Contain Atleast 3 Characters"
    ),
  });

  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  };

  const onFormSubmit = (values) => {
    console.log("On the form submitted", values);
    alert("Register Successfully :) ");
  };

  const handleClick = (event) => {
    console.log(123);
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "45px",
          color: "red",
          margin: "10px",
          padding: "10px",
          boxShadow: "3px 5px 15px 8px green",
        }}
      >
        Registration Page
      </div>

      <div
        style={{
          padding: 5,
          margin: "40px",
          padding: "15px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            cursor: "pointer",
          }}
        >
          <div
            onClick={handleClick}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              columnGap: 5,
            }}
          ></div>
        </div>
        <div
          style={{
            padding: 5,
            display: "flex",
            flexDirection: "column",
            rowGap: 8,
          }}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onFormSubmit}
          >
            {({
              value,
              errors,
              touched,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: 15,
                  }}
                >
                  <TextField
                    variant="outlined"
                    type="text"
                    label="First Name"
                    id="fname"
                    name="fname"
                    placeholder=" First Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.fname && (
                    <span
                      style={{
                        padding: 5,
                        color: "red",
                        fontSize: 16,
                        fontWeight: 500,
                      }}
                    >
                      {errors.fname}
                    </span>
                  )}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: 15,
                  }}
                >
                  <TextField
                    variant="outlined"
                    type="text"
                    label="Last Name"
                    id="lname"
                    name="lname"
                    placeholder="Last Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.lname && (
                    <span
                      style={{
                        padding: 5,
                        color: "red",
                        fontSize: 16,
                        fontWeight: 500,
                      }}
                    >
                      {errors.lname}
                    </span>
                  )}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: 15,
                  }}
                >
                  <TextField
                    variant="outlined"
                    type="email"
                    label="Email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && (
                    <span
                      style={{
                        padding: 5,
                        color: "red",
                        fontSize: 16,
                        fontWeight: 500,
                      }}
                    >
                      {errors.email}
                    </span>
                  )}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: 15,
                  }}
                >
                  <TextField
                    variant="outlined"
                    type="password"
                    label="Password"
                    id="password"
                    name="password"
                    placeholder="Enter Your Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.password && (
                    <span
                      style={{
                        padding: 5,
                        color: "red",
                        fontSize: 16,
                        fontWeight: 500,
                      }}
                    >
                      {errors.password}
                    </span>
                  )}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: 15,
                  }}
                >
                  <TextField
                    variant="outlined"
                    type="cpassword"
                    label="Conform Password"
                    id="cpassword"
                    name="cpassword"
                    placeholder="Conform Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.cpassword && (
                    <span
                      style={{
                        padding: 5,
                        color: "red",
                        fontSize: 16,
                        fontWeight: 500,
                      }}
                    >
                      {errors.cpassword}
                    </span>
                  )}
                </div>
                <div></div>
                <Button variant="contained" type="submit" className="">
                  Register
                </Button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
