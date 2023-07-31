import React from 'react'

export default function TwoPart(props) {
    return (
        <div className='wrapper '>
            <h1 className='text-2xl mb-4'>{props.h1}</h1>
            <h2 className='text-4xl font-bold mb-4'>{props.h2}</h2>

            <p className='text-lg mb-4'>{props.p}</p>

            <img src={props.image} alt="car" className='rounded-md' />
        </div>
    )
}
