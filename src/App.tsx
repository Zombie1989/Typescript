import { useEffect, useState } from 'react';
import './style.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/Home';
import ContactsView from './views/Contacts';
import ProductsView from './views/Products';
import ProductDetailsView from './views/ProductDetails';
import ManageProductsView from './views/ManageProducts';
import NotFoundView from './views/NotFound';
import ProductProvider from './contexts/ProductContext-2';
import UpdateProduct from './views/UpdateProduct';

function App() {

  return (
    <BrowserRouter>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/contacts" element={<ContactsView />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/products/:id" element={<ProductDetailsView />} />
          <Route path="/ManageProducts" element={<ManageProductsView />} />
          <Route path="/UpdateProducts/:id" element={<UpdateProduct />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  );
};

export default App;
