import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Start taking CONTROL over your finances!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Know how much you spend/earn'
              label='Secure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Minimalistic view of budget software'
              label='Minimalist'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Bring your own calculator!'
              label='Calculated'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Get help from someone in our team!'
              label='FinanceBuddy'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Keep track of your NetWorth every month!'
              label='Growth'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;