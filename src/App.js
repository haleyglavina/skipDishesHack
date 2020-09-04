import React, { useState } from 'react';
import './App.scss';
import AllItems from './components/AllItems/AllItems';
import save from './assets/save.svg';
import exit from './assets/exit.svg';
import RestaurantInfo from './components/RestaurantInfo/RestaurantInfo';
import Selections from './components/Selections/Selections';
import {menuList} from './data/menuList';


function App() {
  const [currFilter, setCurrFilter] = useState(-1);
  const [filteredMenu, setFilteredMenu] = useState(menuList);

  const applyFilter = (newFilter) => {
    setCurrFilter(newFilter);
    setFilteredMenu(menuList.filter( item => {
      return item.filters[newFilter];
    }))
  }

  return (
    <div className="App">
      <div className="hero">
        <div className="hero__top-bar">
          <div className="hero__icon-box">
            <img src={exit} className="hero__icon" />
          </div>
          <div className="hero__text">

          </div>
          <div className="hero__icon-box">
            <img src={save} className="hero__icon" />
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
