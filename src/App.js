import React from 'react';
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Drawer from './components/Drawer';


function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])

  React.useEffect(() => {
    fetch('https://642724e6161067a83bf656a5.mockapi.io/items').then((res) => {
      return res.json();
    }).then((json) => {
      setItems(json)
    })
  }, [])

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj])
  }

  return (
    <div className="mainWrapper">
      {cartOpened && <Drawer items={cartItems} onClose={()=> setCartOpened(false)}/>}
      <Header onClickCart={()=> setCartOpened(true)}/>
      <div className="content">
        <div className="contentHeader">
          <h1 className="">Весь товар</h1>
          <div className="searchBlock">
            <img width={13} height={13} src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." className="searchBlock__search" />
          </div>
        </div>
        <div className="wrapperProductCard">
          {
            items.map(item => (
              <ProductCard
                itemName={item.itemName}
                price={item.price}
                imgUrl={item.imgUrl}
                buyItem={(obj) => onAddToCart(obj)} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
