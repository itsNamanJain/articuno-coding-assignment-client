import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";
import axios from "axios";
import { Form } from "react-bootstrap";
const LoginModel = ({ handleLoginModel, login,setShow,setName }) => {
  const [user, setUser] = useState({
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
    const { email, password } = user;
    if (email && password) {
     if (password.length < 8) {
        alert("password Should be at least 8 charracters long");
      } else {
        let res = await axios.post("https://naman-assign.herokuapp.com/login", user);
        alert(res.data.message); 
        localStorage.setItem("token",res.data.token);
        localStorage.setItem("user",JSON.stringify(res.data.user));
        console.log(res.data.token);
        handleLoginModel();
        setShow(false);
        setName(res.data.user.name);
      }
    }
    else{
      alert("Fill all fields to Login");
    }
  };
  return (
    <>
      <Modal show={login} onHide={handleLoginModel}>
        <Modal.Header closeButton>Enter User Details</Modal.Header>
        <Modal.Body>
          <Form className="mt-3 m-auto">
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
            onClick={handleLoginModel}
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
            login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginModel;
