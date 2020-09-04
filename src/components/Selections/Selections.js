import React from 'react';
import './Selections.scss';
import downArrow from '../../assets/down-arrow.svg';

function Selections({currFilter, applyFilter}) {
  console.log("currFilter:", currFilter);

  return (
    <div className="select-bar">
      <div className={currFilter === 0 ? "select-bar__option select-bar__option--curr" : "select-bar__option"} onClick={() => applyFilter(0)}>In Season</div>
      <div className={currFilter === 1 ? "select-bar__option select-bar__option--curr" : "select-bar__option"} onClick={() => applyFilter(1)}>Vegetarian</div>
      <div className={currFilter === 2 ? "select-bar__option select-bar__option--curr" : "select-bar__option"} onClick={() => applyFilter(2)}>Vegan</div>
      <div className={currFilter === 3 ? "select-bar__option select-bar__option--curr" : "select-bar__option"} onClick={() => applyFilter(3)}>Halal</div>
      <img className="select-bar__arrow" src={downArrow} />
    </div>
  );
}

export default Selections;