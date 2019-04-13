import React from 'react';
import { ReactComponent as ButtonBack } from '../../img/button-back.svg';

const HeaderCalculator = ({ price, currentStep, allSteps }) => {
  return (
    <header className='header header--calculator'>
      <button className='header__button' type='button'>
        <ButtonBack />
      </button>
      <p className='header__price'>${price}</p>
      <div className='header__step-progress'>
        {currentStep}/{allSteps}
      </div>
    </header>
  );
};

export default HeaderCalculator;
