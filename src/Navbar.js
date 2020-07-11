import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import logo from "./Images/logo.png";
const navigantionBar = () => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      style={{ display: "flex", flexDirection: "row-reverse" }}
    >
      <Navbar.Brand href="/">
        <img src={logo} style={{ width: "120px", height: "60px" }}></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="mr-auto"
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            width: "100%",
          }}
        >
          <Nav.Link href="/home" style={{ marginRight: "1em" }}>
            الصفحة الرئيسية
          </Nav.Link>
          <Nav.Link href="/quiz">نشاطات </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Form inline>
        <Button style={{ marginRight: "1em" }} variant="outline-success">
          البحث
        </Button>
        <FormControl type="text" placeholder="بحث" className="mr-sm-2" />
      </Form>
    </Navbar>
  );
};

export default navigantionBar;
