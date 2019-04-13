import React from 'react';
import { ReactComponent as ButtonYes } from '../../img/button-yes.svg';
import { ReactComponent as ButtonNo } from '../../img/button-no.svg';

const MainCalculator = ({ questionItem }) => {
  return (
    <main className='main'>
      <div className='main__container'>
        <div className='main__question-img'>
          <div className='main__question-svg'></div>
        </div>
        <h1 className='main__question-title'></h1>
        <p className='main__question-desc'></p>

        <div className='main__question-buttons'>
          <button className='main__question-button main__question-button--no'>
            <ButtonNo/>
          </button>
          <button className='main__question-button main__question-button--yes'>
            <ButtonYes/>
          </button>
        </div>
      </div>
    </main>
  );
};

export default MainCalculator;
