import React from 'react';
import Image from 'next/image';

const UI_Image = (props) => {
  
    const { src, width, height, alt, style , ...rest} = props;

  return (
    <Image
        src = {src}
        width = {width}
        height = {height}
        alt = {alt}
        style = {style}
        {...rest}
    />
  )
}

export default UI_Image;