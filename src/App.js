import React, { useState } from 'react';
import './App.scss';
import AllItems from './components/AllItems/AllItems';
import searchIcon from './assets/search.svg';
import backArrow from './assets/left-arrow.svg';
import RestaurantInfo from './components/RestaurantInfo/RestaurantInfo';
import Selections from './components/Selections/Selections';
import {menuList} from './data/menuList';


function App() {
  const [currFilter, setCurrFilter] = useState(-1);
  const [filteredMenu, setFilteredMenu] = useState(menuList);

  const applyFilter = (newFilter) => {
    setCurrFilter(newFilter);
    setFilteredMenu(menuList.filter( item => {
      return true;
    }))
  }

  return (
    <div className="App">
      <div className="hero">
        <div className="hero__top-bar">
          <div className="hero__icon-box">
            <img src={backArrow} className="hero__icon" />
          </div>
          <div className="hero__text">
            <p className="hero__label hero__label--bold">DELIVERY</p>
            <p className="hero__label">50 Meyers Blvd</p>
          </div>
          <div className="hero__icon-box">
            <img src={searchIcon} className="hero__icon" />
          </div>
        </div>
      </div>
      <RestaurantInfo />
      <Selections currFilter={currFilter} applyFilter={applyFilter}/>
      <AllItems filteredMenu={filteredMenu}/>
    </div>
  );
}

export default App;
