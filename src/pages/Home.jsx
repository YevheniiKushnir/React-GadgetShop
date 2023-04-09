import ProductCard from "../components/ProductCard";

function Home({
  searchItemValue,
  setsearchItemValue,
  onChangeSearchInput,
  items,
  uuidv4,
  onAddToCart,
  cartItems,
  setCartOpened,
  onAddToFavorite,
  favorites,
  removeFromFavorite,
}) {
  return (
    <div className="content">
      <div className="contentHeader">
        <h1 className="">
          {searchItemValue
            ? `Поиск по запросу: ${searchItemValue}`
            : "Весь товар"}
        </h1>
        <div className="searchBlock">
          <img className="searchImg" src="/img/search.svg" alt="Search" />
          <input
            value={searchItemValue}
            onChange={onChangeSearchInput}
            type="text"
            placeholder="Поиск..."
            className="searchBlock__search"
          />
          {searchItemValue && (
            <img
              className="clearInput"
              onClick={() => setsearchItemValue("")}
              src="/img/clearInput.svg"
              alt="clear Input"
            />
          )}
        </div>
      </div>
      <div className="wrapperProductCard">
        {items
          .map((itemObj) => {
            return {
              ...itemObj,
              id: uuidv4(),
            };
          })
          .filter((item) =>
            item.itemName
              .toLowerCase()
              .includes(searchItemValue.toLocaleLowerCase())
          )
          .map((item) => (
            <ProductCard
              key={item.id}
              itemName={item.itemName}
              price={item.price}
              imgUrl={item.imgUrl}
              buyItem={() => onAddToCart(item)}
              cartItems={cartItems}
              onClickCart={() => setCartOpened(true)}
              addToFavorite={() => onAddToFavorite(item)}
              favorites={favorites}
              removeFromFavorite={removeFromFavorite}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
