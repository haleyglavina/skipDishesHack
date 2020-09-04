import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import './AllItems.scss';

function AllItems({filteredMenu}) {

  return (
    <div className="menu">
      {filteredMenu.map(item => 
        <MenuItem item={item} />
      )}
    </div>
  );
}

export default AllItems;