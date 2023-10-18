import React from 'react'
import { Link } from 'react-router-dom'

const Header_for = () => {
  return (
    <div>
      <header className='head_part posits  border-bottom'>
        <div className='d-flex p-2  container justify-content-between'>
            <div className='mx-3 mt-2 '>
             <Link to='/'> <i class="fa-solid fa-2x text-primary fa-circle-arrow-left"></i></Link>
            </div>
            <div className='mt-2 w-75 text-center'>
                <h1 className='logo text-center'>Sizning savatingiz</h1>
            </div>
        </div>
      </header>
    </div>
  )
}

export default Header_for
