import React from 'react';
import { ReactComponent as ButtonRestart } from '../../img/button-restart.svg';

const HeaderResult = ({ onRestartClick }) => {
  return (
    <header className='header header--result'>
      <button
        className='header__button header__button--restart'
        type='button'
      >
        <ButtonRestart />
        Start again
      </button>
    </header>
  );
};

export default HeaderResult;
