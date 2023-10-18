import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header className='head_part posits  border-bottom'>
        <div className='d-flex p-2  container justify-content-between'>
            <div className='mt-2 w-100 text-center'>
                <h1 className='logo text-center'>Mini Food</h1>
            </div>
        </div>
      </header>
    </div>
  )
}

export default Header
