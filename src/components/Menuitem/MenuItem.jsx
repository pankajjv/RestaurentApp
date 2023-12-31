import React from 'react';

import './MenuItem.css';

const MenuItem = ({ price, title, tags }) => (
  <div className='app__menuitem'>
    <div className='app__menuitem-head'>
      <div className='app__menuoitem-name'>
        <p className='p__cormorant' style={{ color: '#DCCA87 ' }}>{title}</p>
      </div>

      <div className='app__menuitem-dash' />

      <div className='app__menuoitem-price'>
        <p className='p__cormorant'>{price}</p>
      </div>
    </div>

    <div className='app__menuitem-sub'>
      <p className='p__opensans' style={{ color: '#AAA' }}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
