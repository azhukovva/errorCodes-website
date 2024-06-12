import React from 'react'
import { close } from '../assets'

const Modal = ({ show, onClose, image, name, text }) => {
    if (!show)
        return null

    return (
        <div className='fixed inset-0 bg-[#252526] bg-opacity-45 flex justify-center items-center z-50'>
            <div className='relative p-10 bg-[#131111] rounded-lg pt-12 mt-[-70px]' onClick={(e) => e.stopPropagation()}>
            <button className='absolute top-0 right-0 mr-5 mt-4 text-white' onClick={onClose}>
                <img src={close} alt="close button" className='w-5'/>
            </button>
                <div className='w-full max-w-xl mx-auto mt-2'>
                    <img src={image} alt={name} className='w-full h-auto rounded-lg' />
                    <p className='mt-6 mb-6 text-[20px]'>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Modal