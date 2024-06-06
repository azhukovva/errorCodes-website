import React from 'react'

import { codes } from '../constants'


const Card = ({ index, name, description }) => {
    return (
        <div className='bg-[#252526] p-5 rounded-2xl sm:w-[450px] w-full shadow-lg'>
eee
        </div>
    )
}

const Memes = () => {
    return (
        <div className='mt-10 flex flex-wrap gap-10 justify-center'>
            {codes.map((code, index) => (
                <Card key={index} code={code} {...code} />
            ))}
        </div>
    )
}

export default Memes