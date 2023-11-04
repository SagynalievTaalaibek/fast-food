import { useMemo, useState } from 'react';
import Menu from '../../components/Menu/Menu';
import Order from '../../components/Order/Order';
import foodImg from '../../assets/food.svg';
import drinkImg from '../../assets/drink.svg';
import { OrderInterface } from '../../types';


const App = () => {
  const MENU = [
    { name: 'Hamburger', image: foodImg, price: 80, id: 1 },
    { name: 'Fries', image: foodImg, price: 45, id: 2 },
    { name: 'Cheeseburger', image: foodImg, price: 90, id: 3 },
    { name: 'Coffee', image: drinkImg, price: 70, id: 4 },
    { name: 'Tea', image: drinkImg, price: 50, id: 5 },
    { name: 'Cola', image: drinkImg, price: 40, id: 6 },
  ];

  const orders = MENU.map((food) => {
    return {
      id: food.id, name: food.name, price: food.price, sum: 0, count: 0, show: false,
    };
  });

  const [order, setOrder] = useState<OrderInterface[]>(orders);

  const newOrder = (id: number) => {
    setOrder((prevState) => prevState.map(orderFood => {
      if (orderFood.id === id) {
        return {
          ...orderFood,
          show: true,
          count: orderFood.count + 1,
          sum: orderFood.sum + orderFood.price,
        };
      }

      return orderFood;
    }));
  };

  const show = order.reduce((acc, value) => {
    if (value.show) {
      acc = true;
    }

    return acc;
  }, false);


  const deleteOrder = (id: number) => {
    setOrder((prevState) => prevState.map((order) => {
      if (order.id === id && order.count !== 0) {
        return { ...order, count: order.count - 1, sum: order.sum - order.price };
      }

      return order;
    }));

    setOrder((prevState) => prevState.map((order) => {
      if (order.count === 0) {
        return { ...order, show: false };
      }

      return order;
    }));
  };

  const bookMenu = MENU.map((food) => {
    return (
      <Menu
        key={food.id}
        name={food.name}
        image={food.image}
        price={food.price}
        addNewOrder={() => newOrder(food.id)}
      />
    );
  });


  const orderList = order.map((item) => {
    if (item.show) {
      return (
        <Order
          key={item.id}
          name={item.name}
          sum={item.sum}
          count={item.count}
          deleteOrder={() => deleteOrder(item.id)}
        />
      );
    }
  });

  const total = useMemo(() => {
    return order.reduce((acc, item) => {
      return acc + item.sum;
    }, 0);
  }, [order]);

  return (
    <div className='container mt-5 px-5'>
      <div className='d-flex justify-content-between'>
        <div className='border p-3'>
          <h3>Order</h3>
          {show ? orderList : 'Order is empty. Add new food'}
          {show ? <div className='my-4'>Total price {total}</div> : undefined}
        </div>
        <div className='border p-3 w-75'>
          <h3>Menu</h3>
          <div className='d-flex flex-wrap gap-2'>
            {bookMenu}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;