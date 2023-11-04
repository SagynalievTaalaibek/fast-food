import React from 'react';

interface Menu {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
  addNewOrder: React.MouseEventHandler;
}