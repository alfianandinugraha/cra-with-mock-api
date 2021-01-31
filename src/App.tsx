import React, { useEffect, useState } from 'react';
import { Product } from './@types/Product';
import http from './utils/http';

function App() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => await http.get<Product[]>('/products').then(res => res.data)

    fetchProducts().then(payload => setProducts(payload))
  }, [])

  return (
    <div className="App">
      <h1>Hello this is Reactjs</h1>
      <p>
        Api resource : <a href="http://localhost:9000/api/products">http://localhost:9000/api/products</a>
      </p>
      <hr />
      {products.length ? (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Discount</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr>
                <td>{ product.id }</td>
                <td>{ product.name }</td>
                <td>{ product.description }</td>
                <td>{ product.price }</td>
                <td>{ product.discount }%</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
}

export default App;
