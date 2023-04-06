import React from 'react'

const button = ( {bgColor, color, size, text, borderRadius} ) => {
  return (
    <button
      type='button'
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className = {`text-${size}`}
    >
      {text}
    </button>
  )
}

export default button

