import React, { useState,useEffect } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Row, Col, Container } from "react-bootstrap";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SignUpModel from "./SignUpModel";
import LoginModel from "./LoginModel";
import { useNavigate } from 'react-router-dom';
const CartScreen = ({show,setShow,setName}) => {
  const navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem("token")){
      setShow(false);
    }
  },[]);
  
  const [shipData, setShipData] = useState({
    email: "",
    fname: "",
    lname: "",
    phone: "",
    address: "",
    city: "",
    zipcode: "",
    country: "",
  });
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const handleLoginModel=()=>{
    setLogin(!login);
  };
  const handleSignupModel=()=>{
    setSignup(!signup);
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setShipData({
      ...shipData,
      [name]: value,
    });
  };

  return (
    <Container>
        {signup?<SignUpModel signup={signup} handleSignupModel={handleSignupModel} />:""}
        {login?<LoginModel login={login} handleLoginModel={handleLoginModel} setName={setName} setShow={setShow } />:""}
      <Row className="mt-3">
        <Col md={6}>
          {
            show && <>
          <p>Shipping and Payment</p>
            <Row className="mt-3">
            <Col md={3}>
              <button variant="contained" color="success" className="btn btn-pp" onClick={handleLoginModel}>
                Login
              </button>
            </Col>
            <Col md={3}>
              <button variant="contained" color="success" className="btn" onClick={handleSignupModel}>
                Signup
              </button>
            </Col>
            <Col md={6}></Col>
          </Row>
            </>
          }
         
          <Row className="mt-3">
            <p>Shipping Information</p>
            <Col md={6}>
              <input
                type="email"
                name="email"
                value={shipData.email}
                onChange={(e) => handleChange(e)}
                placeholder="Email"
                className="input"
              />
              <input
                type="text"
                name="fname"
                value={shipData.fname}
                onChange={(e) => handleChange(e)}
                placeholder="First name"
                className="input"
              />
              <input
                type="text"
                name="lname"
                value={shipData.lname}
                onChange={(e) => handleChange(e)}
                placeholder="Last name"
                className="input"
              />
              <input
                type="text"
                name="phone"
                value={shipData.phone}
                onChange={(e) => handleChange(e)}
                placeholder="Phone number"
                className="input"
              />
            </Col>
            <Col md={6}>
              <input
                type="text"
                name="address"
                value={shipData.address}
                onChange={(e) => handleChange(e)}
                placeholder="Address"
                className="input"
              />
              <input
                type="text"
                name="city"
                value={shipData.city}
                onChange={(e) => handleChange(e)}
                placeholder="City"
                className="input"
              />
              <input
                type="text"
                name="zipcode"
                value={shipData.zipcode}
                onChange={(e) => handleChange(e)}
                placeholder="Postal Code / ZIP"
                className="input"
              />
              <input
                type="text"
                name="country"
                value={shipData.country}
                onChange={(e) => handleChange(e)}
                placeholder="Country"
                className="input"
              />
            </Col>
          </Row>
        </Col>
        <Col md={3} className="mt-3">
          <p>Payment method</p>
          <Row>
            <Col md={3} className="p_method">
              <img src="./images/paypal.png" alt="paypal" />
            </Col>
            <Col md={3} className="p_method">
              <img src="./images/visa.png" alt="visa" />
            </Col>
            <Col md={3} className="p_method">
              <img src="./images/mastercard.png" alt="mastercard" />
            </Col>
            <Col md={3} className="p_method pt-2">
              <img src="./images/maestro.png" alt="maestro" />
            </Col>
            <Col md={3} className="p_method pe-2">
              <img src="./images/discover.png" alt="discover" />
            </Col>
            <Col md={3} className="p_method">
              <img src="./images/ideal.png" alt="ideal" />
            </Col>
          </Row>
          <p className="mt-3">Delivery Method</p>
          <Row>
            <Col md={6} className="mb-3">
              <Row className="d_method">
                <Col md={6}>
                  <img src="./images/ecom.png" alt="ecom" />
                </Col>
                <Col md={6} className="mt-3">
                  <span className="d_method_rate">$20.00</span>
                </Col>
              </Row>
            </Col>
            <Col md={6} className="mb-3">
              <Row className="d_method">
                <Col md={6}>
                  <img src="./images/dpd.png" alt="dpd" />
                </Col>
                <Col md={6} className="mt-3">
                  <span className="d_method_rate">$12.00</span>
                </Col>
              </Row>
            </Col>
            <Col md={6} className="mb-3">
              <Row className="d_method">
                <Col md={6}>
                  <img src="./images/dhl.png" alt="dhl" />
                </Col>
                <Col md={6} className="mt-3">
                  <span className="d_method_rate">$15.00</span>
                </Col>
              </Row>
            </Col>
            <Col md={6} className="mb-3">
              <Row className="d_method">
                <Col md={6}>
                  <img src="./images/fedex.png" alt="fedex" />
                </Col>
                <Col md={6} className="mt-3">
                  <span className="d_method_rate">$10.00</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md={3}>
          <p className="mt-3">Your cart</p>
          <Row className="mt-3">
            <Col md={3}>
              <img src="" alt="img" />
            </Col>
            <Col md={6}>
              <h6>T-Shirt</h6>
              <p>Summer Vibes</p>
              <small>#261311</small>
            </Col>
            <Col md={3}>
              <p>$89.99</p>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={3}>
              <img src="" alt="img" />
            </Col>
            <Col md={6}>
              <h6>Black Slim</h6>
              <p>Fit T-Shirt</p>
              <small>#212315</small>
            </Col>
            <Col md={3}>
              <p>$69.99</p>
            </Col>
          </Row>
          <p className="total_sec mt-3">
            Total Cost <span className="ms-auto">$159.98</span>
          </p>
          <Row>
            <Col md={1}></Col>
            <Col md={3}>
              <LocalShippingIcon />
            </Col>
            <Col md={7}>
              <p>You are $30.02 away from free shipping!</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md={7}>
        <button className="btn" onClick={()=>navigate('/')}>
        <ArrowBackIcon/> Back
        </button>
        </Col>
        <Col md={5}>
        <Row className="mt-3 mb-3">
          <Col md={5}>
          <button className="btn btn-cs">Continue Shopping</button>
          </Col>
          <Col md={7}>
          <button className="btn btn-pp">Proceed to Payment</button>            
          </Col>
        </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CartScreen;
