import ProductCard from "../components/ProductCard";
import React from "react";

function Favorites({
  onAddToCart,
  cartItems,
  setCartOpened,
  onAddToFavorite,
  favorites,
  removeFromFavorite,
}) 
{
  return (
    <div className="content">
      <div className="contentHeader">
        <h1 className="">Мой список желаний</h1>
      </div>
      <div className="wrapperProductCard">
        {favorites.map((item) => (
          <ProductCard
            key={item.id}
            itemName={item.itemName}
            price={item.price}
            imgUrl={item.imgUrl}
            buyItem={() => onAddToCart(item)}
            cartItems={cartItems}
            onClickCart={() => setCartOpened(true)}
            addToFavorite={onAddToFavorite}
            favorites={favorites}
            removeFromFavorite={removeFromFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
