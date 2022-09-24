import React, { Component } from "react";
import Home from "../Component/Home.js";
import Series from "../Component/Series.js";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/series"> Series</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/series" element={<Series />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
