import React from 'react';
import { ReactComponent as Phone } from '../../img/phone.svg';

const MainStart = ({ onStartClick }) => {
  return (
    <main className='main main--start'>
      <div className='main__container'>
        <div className='main__img'>
          <div className='main__svg'>
            <Phone />
          </div>
        </div>
        <h1 className='main__title'>How much does it cost to build an app?</h1>
        <p className='main__desc'>
          Have you ever wondered how much digital agencies charge to develop an
          app for iOS or Android? With our app cost estimator you will find out
          in less than a minute!
        </p>
        <button className='main__start-button button' onClick={onStartClick}>
          Get Started
        </button>
      </div>
    </main>
  );
};

export default MainStart;
