
import {Menu} from '../types';
import React from 'react';



const Menu: React.FC<Menu> = ({name, price, id, image, type, addNewOrder}) => {


  return (
    <div className="row gap-4">
      <div className="card col-auto" key={id} onClick={() => addNewOrder(id)}>
        <div className="card-body d-flex align-items-center">
          <img src={image} alt="food" style={{width: "70px", height: "70px"}}/>
          <div className="ms-3">
            <h4>{name}</h4>
            <h5>Price: {price} KGS</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;