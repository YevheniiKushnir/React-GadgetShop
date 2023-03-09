function ProductCard() {
  return (
    <div className="product-card d-flex flex-column">
      <img className="product-card__img" src="/img/itemPic/1.jpg" alt="Product" />
      <h5 className="product-card__info ">Samsung Galaxy A73 2022 A736B 8/256GB Gray</h5>
      <div class="product-card__price d-flex justify-between ">
        <span class="product-card__text-of-price">Цена:</span>
        <b class="product-card__total-price">18 999 грн</b>
      </div>
      <button className="product-card__buy d-flex justify-around align-center">
        <img width={18} height={18} src="/img/add-cart.svg" alt="Add to Cart" />
        <span>Купить</span>
      </button>
      <button className="product-card__like">
        <img width={18} height={18} src="img/fill-heart.svg" alt="unlike/like Item" />
      </button>
    </div>
  )
}

export default ProductCard;
