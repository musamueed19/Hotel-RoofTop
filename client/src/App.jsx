import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// layout
import Layout from "./Layout";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Policy from "./pages/Policy";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Layout Wrapper */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/policies" element={<Policy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog/:id/:title" element={<Blog />} />
          </Route>

          {/* Non Layout Wrappers */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
