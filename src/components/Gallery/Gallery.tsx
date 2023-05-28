import React from 'react'

type Props = {
    label: string
}

const Gallery = ({label}: Props) => {
  return (
    <div>{label}</div>
  )
}
export default Gallery;