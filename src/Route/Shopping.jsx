import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

const Shopping = () => {
  const [cart, setCart] = useState({
    show: false,
    items: [],
  });
  const products = [
    {
      title: 'Slim Fit Cotton T-Shirt',
      imgUrl:
        'https://i0.wp.com/www.juxar.com/wp-content/uploads/2022/01/GOOD-VIBES-Medium.jpg?resize=600%2C600&ssl=1',
      price: 399,
      index: 0,
    },
    {
      title: 'Oversize Loose Fit T-Shirt',
      imgUrl:
        'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1654932334_9186569.jpg?w=376&dpr=1.0',
      price: 699,
      index: 1,
    },
    {
      title: 'Black Printed Cut T-Shirt',
      imgUrl:
        'https://m.media-amazon.com/images/I/41OIfjfWP+L._AC_SX480_SY360_.jpg',
      price: 499,
      index: 2,
    },
  ];
  console.log(cart.items);
  return (
    <>
      <div>
        <nav className="bg-[#2E64BC] text-white font-semibold text-xl flex flex-row justify-between items-center mb-4">
          <IconButton
            onClick={e => {
              setCart(prev => {
                return { ...prev, show: false };
              });
            }}
          >
            <HomeIcon />
          </IconButton>
          <h1 className="">Shopping App</h1>
          <IconButton
            onClick={e => {
              setCart(prev => {
                return { ...prev, show: true };
              });
            }}
          >
            <ShoppingCartIcon color="action" />
            {cart.items.length}
          </IconButton>
        </nav>
        {/* Product Grid */}
        {!cart.show && (
          <>
            {/* Product Grid */}
            <h1 className="text-center font-semibold text-4xl mb-6">
              Our Items
            </h1>
            <div className="container1">
              {products.map((el, ind) => {
                return (
                  <div className="card1" key={ind}>
                    <img
                      src={el.imgUrl}
                      alt={el.title}
                      srcset=""
                      className="images1"
                    />
                    <div className='details1'>
                      <h1>{el.title}</h1>
                      <h2>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      </h2>
                      <h1>
                        <span>Price : Rs </span>
                        {el.price} /-
                      </h1>
                      </div>
                    <Button
                      variant="contained"
                      id={ind}
                      onClick={e => {
                        setCart(prev => {
                          console.log(prev);
                          return {
                            ...prev,
                            items: [...prev.items, e.target.id],
                          };
                        });
                      }}
                    >
                      Add To Cart
                    </Button>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* Cart Page  -Main Container*/}
        {cart.show && (
          <>
            <h1 className="text-center font-semibold text-4xl mb-6">
              You Have Orderd
            </h1>
            {/* Cart Item Gallary */}
            <div className="flex flex-col  items-center bg-slate-100 p-2">
              {cart.items.map((el, ind) => {
                return (
                  <div className="p-2 flex flex-row justify-space-between items-space-between bg-white-100 w-3/4 mb-4">
                    <img
                      src={products[el]['imgUrl']}
                      alt={products[el]['title']}
                      srcset=""
                      className="h-40"
                    />
                    <div className="info flex flex-col items-space-between justify-center">
                      <h1>{products[el]['title']}</h1>
                      <h2>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </h2>
                      <h1>
                        <span>Price :Rs </span>
                        {products[el]['price']} /-
                      </h1>
                    </div>
                    <div className="Center">
                      <Button
                        variant="contained"
                        color="error"
                        id={ind}
                        onClick={e => {
                          console.log(ind);
                          setCart(prev => {
                            const list = [...prev.items];
                            list.splice(e.target.id, 1);
                            return {
                              ...prev,
                              items: list,
                            };
                          });
                        }}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Shopping;