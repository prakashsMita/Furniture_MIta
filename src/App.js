import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './Components/Landing';
import '../src/assets/css/Style.css'
import '../src/assets/css/Style2.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListingHome from './Components/Listing/ListingHome';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/ListingHome' element={<ListingHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
