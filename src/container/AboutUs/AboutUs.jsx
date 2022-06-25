import React from 'react';
import linkImages from '../../constants/images';

import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={linkImages.G} alt="img G" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={linkImages.spoon} alt="about_spoon" className='spoon__img' />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sint doloremque quaerat eos perspiciatis quia?
        </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={linkImages.knife} alt="img knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={linkImages.spoon} alt="about_spoon" className='spoon__img' />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sint doloremque quaerat eos perspiciatis quia?
        </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
