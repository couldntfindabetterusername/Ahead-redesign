import React from 'react'
import UI_Image from '../UI_Image/UI_Image';

const Rating = () => {
  return (
    <div className="flex justify-start">
        <UI_Image src='/assets/star.png' width={20} height={20} alt='rating' />
        <UI_Image src='/assets/star.png' width={20} height={20} alt='rating' />
        <UI_Image src='/assets/star.png' width={20} height={20} alt='rating' />
        <UI_Image src='/assets/star.png' width={20} height={20} alt='rating' />
        <UI_Image src='/assets/star.png' width={20} height={20} alt='rating' />
    </div>
  )
}

export default Rating