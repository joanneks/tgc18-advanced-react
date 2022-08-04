
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ContactUsSample from "./pages/ContactUsSample";
import Home from "./pages/Home";
import SubmittedForm from './pages/SubmittedForm';
import PostPage from './pages/PostPage';

function App() {
  return (
    <React.Fragment>
      {/* The Routes, Route, Link only works in <Router></Router> */}
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/contact-sample">Contact Us Sample</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>

        {/* The <Routes></Routes> contain the pages */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/contact-sample" element={<ContactUsSample/>} />
          <Route path="/form-submitted" element={<SubmittedForm/>} />
          <Route path="/posts" element={<PostPage/> }></Route>
        </Routes>

      </Router>
    </React.Fragment>
  )
}

export default App;
