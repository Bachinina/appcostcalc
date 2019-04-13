import React from 'react';
import HeaderCalculator from '../header/calculator';
import MainCalculator from '../main/calculator';
import { ReactComponent as IconIos } from '../../img/icon-ios.svg';
import { ReactComponent as IconAndroid } from '../../img/icon-android.svg';
import { ReactComponent as IconProfile } from '../../img/icon-profile.svg';
import { ReactComponent as IconPayments } from '../../img/icon-payments.svg';
import { ReactComponent as IconApi } from '../../img/icon-api.svg';
import { ReactComponent as IconInterface } from '../../img/icon-interface.svg';
import { ReactComponent as IconBluetooth } from '../../img/icon-bluetooth.svg';

const AppCalculator = () => {
  const questions = [
    {
      title: 'Apple iOS Platform',
      desc:
        'Would you like to build an app for Apple iOS users that are more loyal than Android users?',
      price: 10400,
      svg: <IconIos />
    },
    {
      title: 'Android Platform',
      desc:
        'Would you like to build an app for Android, the most popular platform in the Australia as well as Asia, Europe and North America?',
      price: 10400,
      svg: <IconAndroid />
    },
    {
      title: 'User Profiles and Login',
      desc:
        'Does your user require an account? Users could login with just an email and password or use other services, like Facebook and Google.',
      price: 5200,
      svg: <IconProfile />
    },
    {
      title: 'Payments',
      desc:
        'Would you like your app to generate revenue through one off download purchases or in-app purchases?',
      price: 3900,
      svg: <IconPayments />
    },
    {
      title: 'API Integration',
      desc:
        'Does your app need to integrate with your own API or third-party services, such as Google Places, Campaign monitor, etc.',
      price: 6500,
      svg: <IconApi />
    },
    {
      title: 'User Interface',
      desc:
        'Do you require a custom and unique design that makes your app unique to your users and stand up against its competition?',
      price: 9100,
      svg: <IconInterface />
    },
    {
      title: 'Native Capabilities',
      desc: 'Does your app need to use the devices GPS, Camera or Bluetooth?',
      price: 9100,
      svg: <IconBluetooth />
    }
  ];

  const question = questions[0];

  const totalCount = questions.length;

  return (
    <React.Fragment>
      <HeaderCalculator/>
      <MainCalculator/>
    </React.Fragment>
  );
};

export default AppCalculator;
