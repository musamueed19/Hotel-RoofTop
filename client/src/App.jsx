import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// layout
import Layout from "./Layout";

// pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Layout Wrapper */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>

          {/* Non Layout Wrappers */}
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
