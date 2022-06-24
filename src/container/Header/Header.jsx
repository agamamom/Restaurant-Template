import React from 'react';

import './Header.css';
import SubHeading from '../../components/SubHeading/SubHeading'
import linkImages from '../../constants/images';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading props="Chase the new flavour" />
      <h1 className="app__header-h1">The key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam minus ratione illum? Iste officia sequi at earum sed! Magnam minima inventore explicabo reiciendis quisquam consectetur aut, fugiat laboriosam. Officiis, voluptatem!
      </p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={linkImages.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
