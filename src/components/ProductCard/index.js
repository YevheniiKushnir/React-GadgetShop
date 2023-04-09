import React from "react";
import styles from "./ProductCard.module.scss";

const modifyPrice = (price) => {
  let res = price >= 100 ? price.toLocaleString().replace(",", " ") : price;
  return res + " грн";
};

function ProductCard({
  buyItem,
  cartItems,
  favorites,
  onClickCart,
  addToFavorite,
  removeFromFavorite,
  imgUrl,
  itemName,
  price,
}) {
  //Не хватает знаний, если добавлять элемент и удалять, без перегрузки страницы, из-за разных id(id на mock api дает свой, чтобы был уникальный и при создании карточек генерируется тоже уникальный id). Как достать значения id, если лайкнутый элемент - не знаю, если следить через useEffect оч много запросов поступает. Нужно узнать как достать get запрос именно на элемент на который кликнули, когда он в состоянии лайка

  const cartItemsSet = React.useMemo(
    () => new Set(cartItems.map((item) => item.itemName)),
    [cartItems]
  );
  const [isAdded, setIsAdded] = React.useState(cartItemsSet.has(itemName));

  React.useEffect(() => {
    setIsAdded(cartItemsSet.has(itemName));
  }, [cartItemsSet, itemName]);

  // const onClickBuy = () => {
  //   buyItem({ imgUrl, itemName, price });
  //   setIsAdded(!isAdded);
  // };
  // const [isAdded, setIsAdded] = React.useState(cartItems.some((item) => item.itemName === itemName))
  // const [isLike, setToggleLike] = React.useState(favorites.some((item) => item.itemName === itemName))

  const favouritesSet = React.useMemo(
    () => new Set(favorites.map((item) => item.itemName)),
    [favorites]
  );
  const [isLike, setToggleLike] = React.useState(favouritesSet.has(itemName));

  React.useEffect(() => {
    setToggleLike(favouritesSet.has(itemName) || false);
  }, [favouritesSet, itemName]);

  const onClickBuy = () => {
    buyItem({ imgUrl, itemName, price });
    setIsAdded(!isAdded);
  };

  const onCLickLike = () => {
    isLike
      ? (() => {
          const favItem = favorites.find((item) => item.itemName === itemName);
          removeFromFavorite(favItem.id);
        })()
      : addToFavorite({ imgUrl, itemName, price });

    setToggleLike(!isLike);
  };

  return (
    <div className={styles.productCard}>
      <img className={styles.cardImg} src={imgUrl} alt="Product" />
      <h5 className={styles.cardTitle}>{itemName}</h5>
      <div className={styles.cardPrice}>
        <span>Цена:</span>
        <b>{modifyPrice(price)}</b>
      </div>
      <button
        className={`${styles.buyBtn} ${isAdded ? styles.alreadyBought : ""}`}
        onClick={isAdded ? onClickCart : onClickBuy}
      >
        <img
          width={18}
          height={18}
          src={isAdded ? "/img/alreadyBought.svg" : "/img/add-cart.svg"}
          alt="Add to Cart"
        />
        <span>{isAdded ? "Куплено" : "В корзину"}</span>
      </button>
      <button className={styles.likeUnlike}>
        <img
          width={18}
          height={18}
          src={isLike ? "/img/fill-heart.svg" : "/img/stroke-heart.svg"}
          alt="unlike/like Item"
          onClick={onCLickLike}
        />
      </button>
    </div>
  );
}

export default ProductCard;
export { modifyPrice };
