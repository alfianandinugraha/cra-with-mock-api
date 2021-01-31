import React, { useEffect, useState } from 'react';
import { Product } from './@types/Product';
import http from './utils/http';

function App() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => await http.get<Product[]>('/products').then(res => res.data)

    fetchProducts().then(payload => setProducts(payload))
  }, [])

  useEffect(() => {
    console.log(products)
  }, [products])

  return (
    <div className="App">
      <h1>Hello this is Reactjs</h1>
    </div>
  );
}

export default App;
