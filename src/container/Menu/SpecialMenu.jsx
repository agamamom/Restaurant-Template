import React from 'react';
import { SubHeading, MenuItem } from '../../components/index'
import { data, images } from '../../constants/index'
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id='menu'>
    <div className="app_specialMenu-title" style={{ textAlign: "center" }}>
      <SubHeading props="Menu that fits you palatte" />
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((item, index) => (
            <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu" />
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((item, index) => (
            <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: "15px" }}>
      <button type='button' className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
