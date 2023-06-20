import React from 'react'
import { Slider } from './components/Slider';

export const App = () => {

    const slides = [
        { imageUrl: 'http://i.imgur.com/Gu5Cznz.jpg', title: 'The Best Places in The World' },
        { imageUrl: 'http://i.imgur.com/idjXzVQ.jpg', title: 'The Best Places in The World' },
        { imageUrl: 'http://i.imgur.com/8DYumaY.jpg', title: 'The Best Places in The World' },
        { imageUrl: 'http://i.imgur.com/Gu5Cznz.jpg', title: 'The Best Places in The World' },
        { imageUrl: 'http://i.imgur.com/8IuucQZ.jpg', title: 'The Best Places in The World' }
      ];

  return (
    <div>
        <Slider slides={slides} />
    </div>
  )
}
