import './App.css';
import React from 'react';
import {Toaster} from 'react-hot-toast'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import { Layout } from './components'
import { StateContext } from './context/StateContext';
import ProductDetails from './pages/ProductDetails';

function App() {

  return (
    <BrowserRouter>
      <StateContext >
        <Layout>
          <Toaster />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:productType" element={<ProductDetails />} />
          </Routes>
        </Layout>
      </StateContext>
    </BrowserRouter>
  );

}

export default App;
