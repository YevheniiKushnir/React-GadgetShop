import React from "react";
import { Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchItemValue, setsearchItemValue] = React.useState("");

  React.useEffect(() => {
    axios
      .get("https://642724e6161067a83bf656a5.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://642724e6161067a83bf656a5.mockapi.io/drawer")
      .then((res) => {
        setCartItems(res.data);
      });
    axios
      .get("https://642724e6161067a83bf656a5.mockapi.io/favorites")
      .then((res) => {
        setFavorites(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    if (!cartItems.some((item) => item.itemName === obj.itemName)) {
      axios.post("https://642724e6161067a83bf656a5.mockapi.io/drawer", obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onRemoveFromCart = (id) => {
    axios.delete(`https://642724e6161067a83bf656a5.mockapi.io/drawer/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setsearchItemValue(event.target.value);
  };

  const onAddToFavorite = (obj) => {
    if (!favorites.some((item) => item.itemName === obj.itemName)) {
      axios.post("https://642724e6161067a83bf656a5.mockapi.io/favorites", obj);
      setFavorites((prev) => [...prev, obj]);
    }
  };

  const removeFromFavorite = (id) => {
    axios.delete(`https://642724e6161067a83bf656a5.mockapi.io/favorites/${id}`);
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="mainWrapper">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveFromCart}
          setCartItems={setCartItems}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              searchItemValue={searchItemValue}
              setsearchItemValue={setsearchItemValue}
              onChangeSearchInput={onChangeSearchInput}
              items={items}
              uuidv4={uuidv4}
              cartItems={cartItems}
              onAddToCart={onAddToCart}
              setCartOpened={setCartOpened}
              onAddToFavorite={onAddToFavorite}
              favorites={favorites}
              removeFromFavorite={removeFromFavorite}
            />
          }
        ></Route>
        <Route
          path="/favorites"
          exact
          element={
            <Favorites
              onAddToFavorite={onAddToFavorite}
              favorites={favorites}
              removeFromFavorite={removeFromFavorite}
              cartItems={cartItems}
              onAddToCart={onAddToCart}
              setCartOpened={setCartOpened}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
