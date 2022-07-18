import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out destinations</h1>
        <div className='cards_container'>
            <div className='cards_wrapper'>
                <ul className='cards_items'>
                    <CardItem
                        src='images/img-1.jpg'
                        text='explore the waterfall deep in the amazon jungle!'
                        label='Adventure'
                        path='/Services'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards