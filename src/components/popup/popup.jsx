import React from 'react';
import { ReactComponent as IconQuestionMark } from '../../img/icon-question-mark.svg';
import { ReactComponent as IconPers } from '../../img/icon-pers.svg';
import { ReactComponent as IconPhone } from '../../img/icon-phone.svg';
import { ReactComponent as IconDirect } from '../../img/icon-direct.svg';
import { ReactComponent as TickSent } from '../../img/tick-sent.svg';
import { ReactComponent as ButtonClose } from '../../img/button-close.svg';

const Popup = ({ onClose }) => {

  return (
    <section className='popup'>
      <div className='popup__wrapper'>
        <div className='popup__container'>
          <h1 className='popup__title'> App Calculator</h1>
          <ul className='popup__list'>
            <li className='popup__item'>
              <div className='popup__item-img'>
                <IconQuestionMark />
              </div>
              <div className='popup__desc'>
                <p className='popup__question'>How we got your estimate?</p>
                <p className='popup__answer'>
                  Your estimate is based on the pricing standards for digital
                  agencies in Brisbane.
                </p>
              </div>
            </li>
            <li className='popup__item'>
              <div className='popup__item-img'>
                <IconPers />
              </div>
              <div className='popup__desc'>
                <p className='popup__question'>Who we are?</p>
                <p className='popup__answer'>
                  We are a team of experienced Brisbane developers.
                </p>
              </div>
            </li>
            <li className='popup__item'>
              <div className='popup__item-img'>
                <IconPhone />
              </div>
              <div className='popup__desc'>
                <p className='popup__question'>Why hire directly?</p>
                <p className='popup__answer'>
                  Save on your hiring fees and project management overhead.
                </p>
              </div>
            </li>
            <li className='popup__item'>
              <div className='popup__item-img'>
                <IconDirect />
              </div>
              <div className='popup__desc'>
                <p className='popup__question'>How to stay in control?</p>
                <p className='popup__answer'>
                  We communicate directly with you to ensure transparency.
                </p>
              </div>
            </li>
          </ul>

          <form className='popup__form'>
            <div className='form-item'>
              <input
                className='form-input'
                type='tel'
                id='phone-number'
                placeholder='0412 345 678'
              />
              <label className='form-label' htmlFor='phone-number'>
                Phone number
              </label>
            </div>

            <div className='form-item'>
              <input
                className='form-input'
                type='text'
                id='name'
                placeholder='John Smith'
              />
              <label className='form-label' htmlFor='phone-number'>
                Name
              </label>
            </div>

            <div className='form-item'>
              <input
                className='form-input'
                type='email'
                id='email'
                placeholder='me@myemail.com'
              />
              <label className='form-label' htmlFor='email'>
                Email
              </label>
            </div>
            <button className='popup__form-button button'>
              Request Callback!
            </button>
          </form>

          <aside className='main__sent hidden'>
            <TickSent />

            <span>Cost breakdown sent to </span>
          </aside>
          <button className='popup__close-button'>
            <ButtonClose />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Popup;
