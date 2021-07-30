import './App.css';
import Navbar from './components/Navbar/Navbar';
import React, { useState } from 'react';
import Products from './components/Products/Products';
import dog from './assets/dog.jpg';

function App() {
  const [products, setProducts] = useState([
    {
      _id: 1,
      name: "Shoes",
      price: '500$',
      description: "test test test test test test test test test test test test test test test test test test",
      imgURL: 'https://picsum.photos/200/300',
    },
    {
      _id: 2,
      name: "Flip flop",
      price: '150$',
      description: "hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello",
      imgURL: 'https://picsum.photos/200/300',
    },
    {
      _id: 3,
      name: "Bag",
      price: '750$',
      description: "description description description description description description description description ",
      imgURL: 'https://picsum.photos/200/300',
    },
    {
      _id: 4,
      name: "Shirt",
      price: '120$',
      description: "Sheesh Sheesh Sheesh Sheesh Sheesh Sheesh Sheesh Sheesh Sheesh Sheesh Sheesh Sheesh Sheesh Sheesh ",
      imgURL: 'https://picsum.photos/200/300',
    },
  ]);

  return (
    <div className="App">
      <Navbar />
      <Products products={products}/>
    </div>
  );
}

export default App;
