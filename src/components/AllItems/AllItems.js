import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import './AllItems.scss';

function AllItems({filteredMenu}) {

  return (
    <div className="menu">
      {filteredMenu.map((item, i) => 
        <MenuItem item={item} key={i}/>
      )}
    </div>
  );
}

export default AllItems;