import React from 'react';

interface Props {
    name: string;
    price: number;
    image: string;
    addNewOrder: React.MouseEventHandler;
}

const Menu: React.FC<Props> = ({name, price, image, addNewOrder}) => {
    return (
        <div className="card col-auto" style={{width: "250px", cursor: "pointer"}} onClick={addNewOrder}>
            <div className="card-body d-flex align-items-center ">
                <img src={image} alt="food" style={{width: "50px", height: "50px"}}/>
                <div className="ms-3">
                    <h4 className="fs-5">{name}</h4>
                    <h5>Price: {price} KGS</h5>
                </div>
            </div>
        </div>
    );
};

export default Menu;