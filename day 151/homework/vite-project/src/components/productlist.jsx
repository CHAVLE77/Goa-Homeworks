import React from 'react';
import Productitem from './productitem';

export const Productlist = ({ product }) => {
  return (
    <div className="grid gap-4">
      {product.map((el) => (
        <Productitem
          key={el.id}
          name={el.name}
          price={el.price}
          inStock={el.inStock}
        />
      ))}
    </div>
  );
};

export default Productlist;
