/*
import foodImg from '../assets/food.svg';
import drinkImg from '../assets/drink.svg';
*/

import Menu from '../components/Menu';



const App = () => {
  return (
    <div className="container mt-5 px-5">
      <div className="d-flex justify-content-between">
        <div className="border px-3">
          <h3>Order</h3>
        </div>
        <div className="border px-3">
          <h3>Menu</h3>
          <Menu/>
        </div>
      </div>
    </div>
  );
};

export default App;