import React, { useState } from "react";
import { items } from "./static-data.js";
import ItemPage from "./ItemPage.js";
import "./Style/App.css";
import Nav from "./Nav.js";
import CartPage from "./CartPage.js";

const summarizeCart = (cart) => {
  const groupItems = cart.reduce((summary, item) => {
    summary[item.id] = summary[item.id] || {
      ...item,
      count: 0
    };
    summary[item.id].count++;
    return summary;
  }, {});
  return Object.values(groupItems);
};

const App = () => {
  const [activeTab, setActiveTab] = useState("items");
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  }

  const removeItem = (item) => {
    let index = cart.findIndex(i => i.id===item.id);
    if(index>=0){
      setCart(cart =>{
        const copy = [...cart];
        copy.splice(index, 1);
        return copy;
      });
    }
  };
  return (
    <div className="App">
      <Nav activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="App-content">
        <Content tab={activeTab} onAddToCart={addToCart}
        onRemoveItem={removeItem}
        cart={summarizeCart(cart)}/>
      </main>
    </div>
  );
};

const Content = ({ tab, onAddToCart, cart, onRemoveItem }) => {
  switch (tab) {
    default:
    case "items":
      return <ItemPage items={items} onAddToCart={onAddToCart} />;
    case "cart":
      return <CartPage items={cart} onAddOne={onAddToCart} onRemoveOne={onRemoveItem}/>;
  }
};

export default App;
