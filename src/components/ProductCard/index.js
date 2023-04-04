import React from 'react';
import styles from './ProductCard.module.scss';

const modifyPrice = (price) => {
  let res = price >= 100 ? price.toLocaleString().replace(",", " ") : price
  return res + ' грн'
}

function ProductCard({buyItem, imgUrl, itemName, price}) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickBuy = () => {
    buyItem({imgUrl, itemName, price});
    setIsAdded(!isAdded)
  }

  const checkOnClick = (condition, trueVal, falseVal) => {
    return condition ? trueVal : falseVal;
  }

  const [isLike, setLikeUnlike] = React.useState(false);

  const onClickToggleLike = () => {
    setLikeUnlike(!isLike);
  }

  return (
    <div className={styles.productCard}>
      <img className={styles.cardImg} src={imgUrl} alt="Product" />
      <h5 className={styles.cardTitle}>{itemName}</h5>
      <div className={styles.cardPrice}>
        <span>Цена:</span>
        <b>{modifyPrice(price)}</b>
      </div>
      <button className={`${styles.buyBtn} ${checkOnClick(isAdded, styles.alreadyBought)}`} onClick={onClickBuy}>
        <img width={18} height={18} src={checkOnClick(isAdded, "/img/alreadyBought.svg", "/img/add-cart.svg")} alt="Add to Cart" />
        <span>{checkOnClick(isAdded, 'Куплено', 'В корзину')}</span>
      </button>
      <button className={styles.likeUnlike}>
        <img width={18} height={18} src={checkOnClick(isLike, '/img/fill-heart.svg', '/img/stroke-heart.svg')} alt="unlike/like Item" onClick={onClickToggleLike}/>
      </button>
    </div>
  )
}

export default ProductCard;
export {modifyPrice};
