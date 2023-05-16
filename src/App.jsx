import React from "react";

import { Route, Routes } from "react-router-dom";
import Parent from "./pages/Parent";
import Home from "./pages/Home";

import Movielist from "./pages/Movielist";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Parent />}>
          <Route index element={<Home />} />
          <Route path="/movielist" element={<Movielist />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
