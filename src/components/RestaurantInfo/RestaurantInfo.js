import React from 'react';
import './RestaurantInfo.scss';
import Divider from '../Divider/Divider';

function RestaurantInfo(props) {
  return (
    <div className="info">
      <div className="info__text">
        <h2 className="info__name">Aroy Urban Thai</h2>
        <h3 className="info__address">420 Queen St. W</h3>
        <h2 className="info__delivery">27-37 mins <span className="delivery__emphasis">-</span> $1.99 / <span className="delivery__emphasis">Free over $20</span></h2>
      </div>
      <Divider />
    </div>
  );
}

export default RestaurantInfo;