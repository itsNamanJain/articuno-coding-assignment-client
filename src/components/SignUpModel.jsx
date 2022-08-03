import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";
import axios from "axios";
import { Form } from "react-bootstrap";
const SignUpModel = ({ handleSignupModel, signup }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  let style = {
    boxShadow: "none",
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    const { name, email, password } = user;
    if (name && email && password) {
      if (name.length < 3) {
        alert("name Should be at least 3 charracters long");
      } else if (password.length < 8) {
        alert("password Should be at least 8 charracters long");
      } else {
        let res = await axios.post("https://naman-assign.herokuapp.com/signin", user);
        alert(res.data.message); 
        handleSignupModel();
      }
    }
    else{
      alert("Enter All Details to register");
    }
  };
  return (
    <>
      <Modal show={signup} onHide={handleSignupModel}>
        <Modal.Header closeButton>Enter User Details</Modal.Header>
        <Modal.Body>
          <Form className="mt-3 m-auto">
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                style={style}
                name="name"
                value={user.name}
                onChange={(e) => handleChange(e)}
                type="text"
                placeholder="Enter Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                style={style}
                name="email"
                value={user.email}
                onChange={(e) => handleChange(e)}
                type="email"
                placeholder="Enter Email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                style={style}
                name="password"
                value={user.password}
                onChange={(e) => handleChange(e)}
                type="password"
                placeholder="Enter Password"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="contained"
            color="error"
            className="m-2"
            onClick={handleSignupModel}
          >
            Close
          </Button>
          <Button
            variant="contained"
            color="success"
            type="submit"
            className="m-2"
            onClick={handleSubmit}
          >
            SignUp
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SignUpModel;
