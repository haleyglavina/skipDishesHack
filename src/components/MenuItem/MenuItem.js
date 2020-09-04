import React from 'react';
import saladImg from '../../assets/salad.jpg';
import './MenuItem.scss';

function MenuItem({item}) {
  return (
    <div className="item">
      <img src={saladImg} className="item__img" />
      <div className="item__text">
        <h3 className="item__name">{item.meal}</h3>
        <p className="item__price">{item.price}</p>
      </div>

    </div>
  );
}

export default MenuItem;