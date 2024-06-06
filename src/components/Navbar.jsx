import React from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'

const Navbar = () => {
  return (
    <nav className='flex justify-between'>
      <div className='w-full flex justify-between items-center mx-auto'>
        <Link to='/' className={`${styles.padding}`}>
          <div>
            <p className={`${styles.headText} ${styles.paddingX}`}>http</p>
            <p className={`${styles.paddingX} text-primary uppercase text-[30px] mt-[-15px]`}>
              and the way it speaks
            </p>
          </div>
        </Link>
        <p className='sm:flex px-[200px] hover:text-primary cursor-pointer'>About</p>
        {/* //TODO - show a little description */}
      </div>
    </nav >
  );
}

export default Navbar
