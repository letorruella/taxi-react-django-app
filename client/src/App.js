import { Outlet, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Container, Navbar, Form, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import axios from "axios";

import Landing from "./components/Landing";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

import "./App.css";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(() => {
    return window.localStorage.getItem("taxi.auth") !== null;
  });
  const logIn = async (username, password) => {
    const url = "/api/log_in/";
    try {
      const response = await axios.post(url, { username, password });
      window.localStorage.setItem("taxi.auth", JSON.stringify(response.data));
      setLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  };
  const logOut = () => {
    window.localStorage.removeItem("taxi.auth");
    setLoggedIn(false);
  };
  return (
    <Routes>
      <Route
        index
        path="/"
        element={<Layout logOut={logOut} isLoggedIn={isLoggedIn} />}
      />
      {/* <Route index element={<Landing />} /> */}
      <Route path="sign-up" element={<SignUp isLoggedIn={isLoggedIn} />} />
      <Route
        path="log-in"
        element={<LogIn isLoggedIn={isLoggedIn} logIn={logIn} />}
      />
    </Routes>
  );
}

function Layout({ isLoggedIn, logOut }) {
  return (
    <>
      <Navbar bg="light" expand="lg" variant="light">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="logo">Taxi</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle />
          {/* changed */}
          <Navbar.Collapse className="justify-content-end">
            {isLoggedIn && (
              <Form>
                <Button data-cy="logOut" type="button" onClick={() => logOut()}>
                  Log out
                </Button>
              </Form>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="pt-3">
        <Outlet />
      </Container>
    </>
  );
}

export default App;
