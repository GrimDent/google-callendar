import React from 'react'

export default function ({day}) {
  return (
    <div>
        {day.format()}
    </div>
  )
}
