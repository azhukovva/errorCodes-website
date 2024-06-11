import React, { useState } from 'react'

import { codes } from '../constants'


const Card = ({ index, name, description, image, imageBefore }) => {
    const [hovered, setHovered] = useState(false)
    const [clicked, setClicked] = useState(false)

    return (
        <div className='relative bg-[hsl(240,1%,15%)] rounded-2xl sm:w-[450px] 
        w-full h-[350px] shadow-lg justify-center items-center flex'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => {
                setHovered(false);
                setClicked(false)
            }}
        >
            <img src={imageBefore} 
                alt={name} 
                className={`absolute rounded-2xl w-full h-full object-cover transition-opacity duration-500 ${!clicked && hovered ? '' : 'opacity-20'}`}
                onClick={() => setClicked(true)}
                />
                <img src={image} 
                alt={name} 
                className={`absolute rounded-2xl w-full h-full object-cover transition-opacity duration-500 ${clicked ? '' : 'hidden'}`}
                onClick={() => setClicked(false)}
                />
            <p className={`font-bold text-6xl cursor-default transition-opacity duration-300 ${hovered ? 'opacity-0' : 'opacity-100 z-10'}`}>{name}</p>

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