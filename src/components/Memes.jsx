import React, { useState } from 'react'

import { codes } from '../constants'
import Modal from './Modal'


const Card = ({ index, name, description, image, imageBefore, text }) => {
    const [hovered, setHovered] = useState(false)
    // const [clicked, setClicked] = useState(false)
    const [showModal, setShowModal] = useState(false)

    return (
        <div className='relative bg-[hsl(240,1%,15%)] rounded-2xl sm:w-[450px] 
        w-full h-[350px] shadow-lg  items-center flex'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => {
                setHovered(false)
            }}
        >
            {/* <img src={imageBefore} 
                alt={name} 
                className={`absolute rounded-2xl w-full h-full object-cover transition-opacity duration-500 ${!clicked && hovered ? '' : 'opacity-20'}`}
                onClick={() => setClicked(true)}
                />
                <img src={image} 
                alt={name} 
                className={`absolute rounded-2xl w-full h-full object-cover transition-opacity duration-500 ${clicked ? '' : 'hidden'}`}
                onClick={() => setClicked(false)}
                /> */}
            <img src={imageBefore}
                alt={name}
                className={`absolute rounded-2xl w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-45' : ''}`}
                onClick={() => console.log('clicked')}
            />
            <div className={`font-bold text-6xl pl-5 cursor-default transition-opacity duration-300 ${hovered ? 'opacity-100 z-10' : 'opacity-0'}`}>
                <h2 className='text-primary'>{name}</h2>
                <p>{description}</p>
                <p className='font-medium text-xl mt-5 text-secondary-100 cursor-pointer inline-block'
                onClick={() => setShowModal(true)}
                >Decription</p>
            </div>

            <Modal show={showModal} onClose={() => setShowModal(false)} image={image} name={name} text={text}/>
        </div>
    )
}

const Memes = () => {
    return (
        <div className='mt-10 flex flex-wrap gap-11 justify-center mb-32'>
            {codes.map((code, index) => (
                <Card key={index} code={code.name} {...code} />
            ))}
        </div>
    )
}

export default Memes