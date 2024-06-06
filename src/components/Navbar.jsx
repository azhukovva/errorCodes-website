import React from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'

const Navbar = () => {
  return (
    <nav className='flex justify-between'>
      <div className='w-full flex justify-between items-center mx-auto'>
        <Link to='/' className={`${styles.padding}`}>
          <div>
            <p className={`${styles.headText} ${styles.paddingX}`}>Codes</p>
            <p className={`${styles.paddingX} text-primary uppercase text-[30px] mt-[-15px]`}>
              and the way they speak
            </p>
          </div>
        </Link>
        <p className='sm:flex px-[200px] hover:text-primary cursor-pointer'>About</p>
      </div>
    </nav >
  );
}

export default Navbar
