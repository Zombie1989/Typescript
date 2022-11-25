import { useEffect, useState } from 'react';
import './style.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/Home';
import ContactsView from './views/Contacts';
import ProductsView from './views/Products';
import ProductDetailsView from './views/ProductDetails';
import NotFoundView from './views/NotFound';
import { ProductContext, FeaturedProductsContext, OnSaleProductsContext } from './contexts/ProductContext'

function App() {
  const [products, setProducts] = useState([])
  const [featured, setFeatured] = useState([])
  const [onSale, setOnSale] = useState([])

  //Skapar alla produkter
  useEffect(() => {
    const fetchAllData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts(await result.json())
    }
    fetchAllData()

    //Skapar åtta produkter
    const fetchFeaturedData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setFeatured(await result.json())
    }
    fetchFeaturedData()

    //Skapar fyra produkter
    const fetchOnSaleData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setOnSale(await result.json())
    }
    fetchOnSaleData()


  }, [setProducts, setFeatured, setOnSale])  


  return (
    <BrowserRouter>
      <ProductContext.Provider value={products}>
      <FeaturedProductsContext.Provider value={featured}>
      <OnSaleProductsContext.Provider value={onSale}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/contacts" element={<ContactsView />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/products/:id" element={<ProductDetailsView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </OnSaleProductsContext.Provider>
      </FeaturedProductsContext.Provider >
      </ProductContext.Provider>
    </BrowserRouter>
  );
};

export default App;
