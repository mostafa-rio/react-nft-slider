import React from 'react'
import './Gallery.css';

type Props = {
    label: string
}

const Gallery = ({label}: Props) => {
  return (
    <div>{label}</div>
  )
}
export default Gallery;