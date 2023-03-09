function Header() {
  return (
    <header className="d-flex justify-between	align-center p-40">
      <div className="d-flex align-center">
        <img className="mr-15" width={40} height={40} src="/img/logo.png" alt="LogoShop" />
        <div>
          <h3 className="text-uppercase">Gadget store</h3>
          <p className="opacity-8">Магазин гаджетов и телефонов</p>
        </div>
      </div>
      <ul className="headerRight d-flex align-center justify-center">
        <li className="headerRight__balance">
          <img width={18} height={18} src="/img/wallet.svg" alt="totalPrice" />
          <span>Баланс: 12333грн</span>
        </li>
        <li>
          <img width={24} height={24} src="/img/cart.svg" alt="Cart" />
        </li>
        <li>
          <img width={20} height={20} src="/img/fill-heart.svg" alt="arrowLinks" />
        </li>
      </ul>
    </header>
  )
}

export default Header;