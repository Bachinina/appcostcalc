import React, { useState } from 'react';
import { ReactComponent as TickSent } from '../../img/tick-sent.svg';
import { ReactComponent as Phone } from '../../img/phone.svg';

const MainResult = () => {

  return (
    <main className='main main--result'>
      <div className='main__container main__container--result'>
        <div className='main__result'>
          <div className='main__result-container'>
            <h1 className='main__result-title'>Your app estimate</h1>
            <span className='main__result-price'>$0</span>
            <div className='main__result-comment'>
              <span className='main__result-asterisk'>* Estimate in AUD</span>
              <button
                className='main__result-button'
              >
                How we got your estimate?
              </button>
            </div>
              <aside className='main__sent hidden'>
                <TickSent />
                <span>Cost breakdown sent to </span>
              </aside>
              <form className='main__feedback'>
                <div className='main__feedback-item form-item'>
                  <input
                    className='main__feedback-input form-input'
                    type='email'
                    id='email'
                    placeholder='me@myemail.com'
                  />
                  <label
                    className='main__feedback-label form-label'
                    htmlFor='email'
                  >
                    My Email
                  </label>
                </div>
                <button
                  className='main__feedback-button button'
                  disabled
                >
                  Send me cost breakdown
                </button>
              </form>
          </div>
          <div className='main__info'>
            <p className='main__info-description'>
              Did you know that hiring right developers directly can lower your
              cost of app development by <strong>25%</strong>? We are Brisbane
              based team for direct hire.
            </p>
            <button className='main__info-button'>
              Learn more
            </button>
          </div>
        </div>
        <div className='main__svg'>
          <Phone />
        </div>
      </div>
    </main>
  );
};

export default MainResult;
