import React from 'react'

export default function PriceBox(props) {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-2xl text-center mt-4'>For the best prices, give us a call</h1>
            <a href="tel:00400770890582" className='rounded-lg text-xl bg-text text-black p-4 font-bold'>0770890582</a>
            <h1 className='text-2xl text-center mt-8'>Or send us an e-mail</h1>
            <a href="mailto: szilveszternandor@gmail.com" className='rounded-lg text-xl bg-text text-black p-4 font-bold'>szilveszternandor@gmail.com</a>
        </div>
    )
}
