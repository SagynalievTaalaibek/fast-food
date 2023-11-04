import React from 'react';

interface Props {
  name: string;
  sum: number;
  count: number;
  deleteOrder: React.MouseEventHandler;
}

const Order: React.FC<Props> = ({ name, sum, count, deleteOrder }) => {
  return (
    <div className='d-flex align-items-center my-2 justify-content-between'>
      <h5 className='m-0'>{name}</h5>
      <div className='d-flex align-items-center'>
        <strong className='mx-2'>x{count}</strong>
        <span className='mx-3'>{sum}KGS</span>
        <button className='btn btn-danger' onClick={deleteOrder}>Delete</button>
      </div>
    </div>
  );
};

export default Order;